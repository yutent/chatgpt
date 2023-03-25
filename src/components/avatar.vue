<template>
  <div v-if="name" class="avatar name">{{ name.slice(-1) }}</div>
  <img v-else class="avatar" src="/img/chatgpt.svg" />
</template>

<script>
export default {
  props: {
    name: ''
  }
}
</script>

<style lang="scss" scoped>
.avatar {
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  padding: 8px;
  border-radius: 50%;
  background: var(--color-dark-1);
  color: #fff;

  &.name {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    font-size: 18px;
    background: var(--color-orange-1);
  }
}
</style>
