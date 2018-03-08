<template>
  <div class="exp-item">
    <div class="exp-header">
      <span class="time">{{time}}</span>
      <span class="place">{{place}}</span>
    </div>
    <div class="desc">
      {{desc}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: String,
      default: ""
    },
    place: {
      type: String,
      default: ""
    },
    desc: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="less">
.exp-item {
  font-size: 20px;
  line-height: 32px;
  color: #555;
  text-align: justify;
  .exp-header {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    .place{
      margin-right: 50px;
    }
  }
}
</style>


