
<template>
  <header>
    <img alt="Vue logo" class="logo" src="/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <Hello msg="It works!!!" />

      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </header>

  <router-view />
</template>

<script>
import Hello from './components/hello.vue'

export default {
  components: { Hello }
}
</script>

<style lang="scss">
.app {
  padding: 16px;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
}

a {
  color: var(--color-teal-1);
  transition: 0.2s;
}

a:hover {
  color: var(--color-teal-3);
}

nav {
  margin-top: 32px;
  display: flex;
  justify-content: center;

  a {
    margin: 0 16px;
  }
}

main {
  margin: 32px;
  text-align: center;
}
</style>
  
    
