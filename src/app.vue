<template>
  <Topbar />
  <div class="main">
    <Aside />
    <Chat />
  </div>
</template>

<script>
import Topbar from './views/topbar.vue'
import Aside from './views/aside.vue'
import Chat from './views/chat.vue'

export default {
  components: { Topbar, Aside, Chat }
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
.app {
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
}
</style>
