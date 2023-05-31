<template>
  <main class="noselect topbar">
    <section class="btns"><i></i><i></i><i></i></section>
    <div class="option" @click="openPanel">•••</div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      content: '这是关于我们页面'
    }
  },
  methods: {
    openPanel() {
      this.$root.openPreferencesPanel()
    }
  }
}
</script>

<style lang="scss" scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border-bottom: 1px solid var(--color-plain-2);
}
.btns {
  display: flex;
  align-items: center;
  i {
    display: block;
    width: 12px;
    height: 12px;
    margin-right: 6px;
    border-radius: 50%;
    background: var(--color-red-1);
    &:nth-child(2) {
      background: var(--color-orange-1);
    }
    &:nth-child(3) {
      background: var(--color-green-1);
    }
  }
}
.option {
  font-size: 22px;
  cursor: pointer;
}
</style>
