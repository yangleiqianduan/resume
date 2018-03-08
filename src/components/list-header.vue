<template>
  <div class="list-header">
    <img :src="imgSrc" class="img">
    <span class="title">{{title}}</span>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less">
  .list-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f6f7f7;
    padding: 20px 0;
    .img{
      margin: 0 10px 0 50px;
    }
    .title{
      font-weight: bold;
      font-size: 1.5em;
      margin: 0 150px 0 20px;
    }
  }
</style>
