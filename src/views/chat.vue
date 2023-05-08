<template>
  <div class="current-session">
    <div class="records" ref="records">
      <section class="item" v-for="it in records" :key="it.id">
        <Avatar :name="it.role === 0 ? '我' : ''" />
        <div class="content" v-html="md2html(it.content)"></div>
      </section>
    </div>
    <textarea
      ref="input"
      class="question"
      autofocus
      :disabled="loading"
      v-model="question"
      @keydown="ask"
      :placeholder="'Ctrl/Shift/Cmd + 回车换行 \n回车发送'"
    />
  </div>
</template>

<script>
import Avatar from '@/components/avatar.vue'
import '//jscdn.ink/@bd/ui/latest/code/index.js'
import { nextTick } from 'vue'
import md2html from '//jscdn.ink/@bd/ui/latest/markd/core.js'

function ask() {
  //

  return Promise.resolve({
    data: {
      conversation: '',
      id: '',
      text: 'blabla...'
    }
  })
}

function get10Tokens(str = '') {
  return str.slice(0, 10)
}

export default {
  components: { Avatar },
  data() {
    return {
      records: [],
      question: '',
      loading: false
    }
  },

  mounted() {
    // this.getConversations()
    // this.getRecords()

    nextTick(_ => this.$refs.input.focus())
  },

  methods: {
    md2html,

    ask(ev) {
      let question = this.question.trim()
      let { id, lastMessageId } = this.$store.conversation

      if (ev.keyCode === 13) {
        if (ev.shiftKey) {
          return
        }
        if (ev.ctrlKey || ev.metaKey) {
          this.question += '\n'
          return
        }

        ev.preventDefault()

        if (question === '') {
          return
        }

        this.question = ''

        this.records.push({ id: Date.now(), role: 0, content: question })

        nextTick(_ => (this.$refs.records.scrollTop = Number.MAX_SAFE_INTEGER))

        this.loading = true

        this.records.push({
          id: Date.now(),
          role: 1,
          content: '<div class="loading"><i></i><i></i><i></i></div>'
        })

        ask(question, lastMessageId, id)
          .then(r => {
            if (!id) {
              this.$store.conversations.unshift({
                id: r.data.conversation,
                name: get10Tokens(question)
              })
            }
            this.$store.conversation.id = r.data.conversation
            this.$store.conversation.lastMessageId = r.data.id

            this.records.at(-1).id = r.data.id
            this.records.at(-1).content = r.data.text
          })
          .catch(r => {
            console.log(r)
            this.records.at(-1).content = r.msg || r.toString()

            this.$message.error(r.msg || r.toString())
          })
          .finally(_ => {
            this.loading = false
            nextTick(_ => {
              this.$refs.records.scrollTop = Number.MAX_SAFE_INTEGER
              this.$refs.input.focus()
            })
          })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.current-session {
  flex: 1;
  display: flex;
  flex-direction: column;
  max-height: 100%;
  background: var(--color-plain-1);

  .records {
    overflow: auto;
    flex: 1;
    padding: 16px;

    .item {
      display: flex;
      width: 100%;
      margin-top: 16px;
      font-size: 14px;
      color: var(--color-dark-1);

      .content {
        position: relative;
        margin-left: 16px;
        padding: 8px 16px;
        word-break: break-word;
        white-space: pre-wrap;
        border-radius: 6px;
        background: #fff;

        &::before {
          position: absolute;
          left: -6px;
          top: 10px;
          width: 12px;
          height: 12px;
          border-radius: 3px;
          background: #fff;
          transform: rotate(45deg);
          content: '';
        }
      }

      &:nth-child(odd) {
        .content {
          background: #d9ecff;
          &::before {
            background: #d9ecff;
          }
        }
      }
    }

    &::-webkit-scrollbar {
      width: 0;
      display: none;
    }
  }

  .question {
    flex-shrink: 0;
    width: 100%;
    height: 128px;
    margin-top: 32px;
    padding: 8px;
    border: 0;
    border-top: 1px solid var(--color-plain-2);
    background: #fff;
    color: var(--color-dark-2);
    resize: none;

    &:focus {
      box-shadow: 0 0 5px var(--color-blue-a);
    }

    &::placeholder {
      color: var(--color-grey-2);
    }
    &::-webkit-scrollbar {
      width: 0;
      display: none;
    }
  }
}
</style>
<style lang="scss">
.current-session .content {
  line-height: 1.5;
  ol {
    margin-left: 1em;
    list-style: decimal outside none;
  }
  ul {
    margin-left: 1em;
    list-style: disc outside none;
  }
  li {
    margin: 0.5em 0;
  }
  li ol {
    margin-left: 1em;
  }
  li ul {
    margin-left: 1em;
    list-style-type: circle;
  }
  li ol ul,
  li ul ul {
    list-style-type: square;
  }

  code.inline {
    display: inline;
    margin: 0 2px;
    padding: 0 2px;
    color: var(--color-red-1);
    background: var(--color-plain-1);
    border-radius: 2px;
    font-family: Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
}
.current-session .loading {
  display: flex;
  align-items: center;
  height: 24px;

  i {
    width: 12px;
    height: 12px;
    margin: 0 8px;
    border-radius: 50%;
    background: var(--color-blue-1);
    transform: scale(0.5);
    animation: loading 1s ease-in-out infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
}
@keyframes loading {
  0%,
  100% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
}
</style>
