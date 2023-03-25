
<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      你已经成功运行了一个项目, 项目基于
      <a href="//github.com/bytedo/vue-live" target="_blank">Vue-live</a> +
      <a href="//vuejs.org" target="_blank">Vue 3</a>.
    </h3>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  }
}
</script>

<style>
h1 {
  font-size: 52px;
}

h3 {
  font-size: 1.2rem;
  font-weight: normal;
}

.green {
  font-family: 'Courier New', Courier, monospace;
  color: var(--color-blue-1);
}

.greetings {
  text-align: center;
}
</style>
   
