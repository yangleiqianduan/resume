<template>
<div class="list-item">
  <img :src="iconSrc" class="img">
  <span class="msg">{{conMsg}}</span>
</div>
</template>

<script>
export default {
  props:{
    iconSrc: {
      type: String,
      default: ''
    },
    conMsg: {
      type: String,
      default: ''
    }
  }
}
</script>


<style lang="less">
  .list-item{
    display: flex;
    align-items: center;
    border-bottom: 1px solid #e9e8e8;
    height: 80px;
    .img{
      margin: 0 20px 0 50px;
      width: 36px;
      height: 36px;
    }
    .msg{
      font-size: 20px;
      color: #555;
    }
  }
</style>
