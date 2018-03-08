<template>
  <div class="description">
    <h2 class="title">{{title}}</h2>
    <slot></slot>
  </div>
</template>

<script>

export default {
  props:{
    title: {
      type: String,
      default: ''
    }
  }
}
</script>


<style lang="less">
  .description{
    margin: 40px 0 20px 0;
    .title{
      font-weight: bold;
      font-size: 1.5em;
      padding-bottom: 10px;
      letter-spacing: 1px;
    }
  }
</style>

