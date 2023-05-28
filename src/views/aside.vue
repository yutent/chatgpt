<template>
  <aside class="history noselect">
    <el-button type="warning" plain class="new" @click="createNewConversation"
      >+ 新建会话</el-button
    >
    <ul class="list">
      <li
        class="item"
        v-for="(it, i) in $store.conversations"
        :key="it.id"
        @click="pickThisConversation(it)"
        :class="{ active: it.id === $store.conversation.id }"
      >
        <span class="text-ell">{{ it.name }}</span>
        <wc-icon
          class="close"
          name="close"
          @click.stop="removeConversation(it, i)"
        ></wc-icon>
      </li>
    </ul>
  </aside>
</template>

<script>
// import { removeConversation } from '@/lib/fetch.js'

export default {
  data() {
    return {
      conversations: []
    }
  },

  methods: {
    createNewConversation() {
      this.$store.conversation = {
        id: '',
        tokens: 0,
        records: []
      }
    },

    removeConversation(it, idx) {
      layer
        .confirm(`是否删除此会话【${it.name}】`)
        .then(_ => {
          // removeConversation(it.id)
          //   .then(r => {
          layer.toast('删除会话成功', 'success')
          this.$store.conversations.splice(idx, 1)
          if (this.$store.conversations.length) {
            this.pickThisConversation(this.$store.conversations[0])
          } else {
            this.createNewConversation()
          }
          // })
          // .catch(r => {
          //   this.$message.success('删除会话失败')
          // })
        })
        .catch(function () {})
    },

    pickThisConversation(it) {
      if (it.id === this.conversation.id) {
        return
      }
      this.conversation = { id: it.id }
      this.records = []
      this.loading = true
      this.getRecords()
        .then(list => {
          this.conversation.lastMessageId = list.at(-1).id
          nextTick(_ => {
            this.$refs.records.scrollTop = Number.MAX_SAFE_INTEGER
            this.$refs.input.focus()
          })
        })
        .finally(_ => {
          this.loading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.history {
  flex-shrink: 0;
  width: 220px;
  padding: 8px 16px;
  border-right: 1px solid var(--color-plain-2);

  .new {
    width: 100%;
  }

  .list {
    margin-top: 16px;
    font-size: 14px;

    .item {
      display: flex;
      align-items: center;
      width: 100%;
      height: 32px;
      margin-top: 8px;
      padding: 0 8px;
      border-radius: 4px;
      color: var(--color-dark-1);
      transition: color 0.2s ease-in, background 0.2s ease-in;

      span {
        flex: 1;
        padding-left: 6px;
      }

      .close {
        width: 18px;
        height: 18px;
        padding: 3px;
        border-radius: 50%;
        cursor: pointer;
        color: var(--color-blue-a);
        transition: color 0.2s ease-in, background 0.2s ease-in;

        &:hover {
          background: var(--color-red-1);
          color: #fff;
        }
      }

      &.active,
      &:hover {
        color: var(--color-blue-1);
        background: #ecf5ff;
      }
    }
  }
}
</style>
