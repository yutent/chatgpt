<template>
  <Topbar />
  <div class="main">
    <Aside />
    <Chat />
  </div>
  <wc-layer ref="preferences" mask>
    <Preferences />
    <wc-icon class="close" name="close" @click="$refs.preferences.close()" />
  </wc-layer>
</template>

<script>
import Topbar from './views/topbar.vue'
import Aside from './views/aside.vue'
import Chat from './views/chat.vue'
import Preferences from './views/preferences.vue'

export default {
  components: { Topbar, Aside, Chat, Preferences },
  mounted() {
    this.openPreferencesPanel()
  },
  methods: {
    openPreferencesPanel() {
      this.$refs.preferences.show()
    }
  }
}
</script>

<style lang="scss">
body {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 32px;
  font-size: 14px;
  color: var(--color-dark-1);
}
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  height: 100%;
  border-radius: 4px;
  background: #fff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.15);
}

.main {
  flex: 1;
  display: flex;
  height: calc(100% - 48px);
}
</style>
<style lang="scss" scoped>
.close {
  position: absolute;
  right: 16px;
  top: 12px;
  --size: 16px;
  cursor: pointer;

  &:hover {
    color: var(--color-red-1);
  }
}
</style>
