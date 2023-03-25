
<script>
export default {
  data(){
    return {
      content: '这是关于我们页面'
    }
  }
}
</script>

<template>
  <main>
    <h1>{{content}}</h1>
    <cite>当前vue-live版本: v{{$store.version}}</cite>
  </main>
</template>
    
