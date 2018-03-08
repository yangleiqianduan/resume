<template>
  <div class="context-list">
    <div class="list-connection">
      <ListHeader :imgSrc="require('@/assets/title-contact.png')"
        :title='title1'></ListHeader>
      <ul class="list">
        <ListItem :iconSrc="require('@/assets/contact-phone.png')"
          :conMsg='conMsg1'
        ></ListItem>
        <ListItem :iconSrc="require('@/assets/contact-mail.png')"
          :conMsg='conMsg2' 
        ></ListItem>
        <ListItem :iconSrc="require('@/assets/social-wechat.png')" 
          :conMsg='conMsg3'
        ></ListItem>
        <ListItem :iconSrc="require('@/assets/social-qq.png')" 
          :conMsg='conMsg4'
        ></ListItem>
      </ul>
    </div>
    <div class="social-connect">
      <ListHeader :imgSrc="require('@/assets/title-contact.png')"
        :title='title2'></ListHeader>
      <ul class="list">
        <ListItem :iconSrc="require('@/assets/social-github.png')"
          :conMsg='conMsg5'
        ></ListItem>
        <ListItem :iconSrc="require('@/assets/juejin.png')"
          :conMsg='conMsg5' 
        ></ListItem>
      </ul>
    </div>
  </div>
</template>

<script>
import ListItem from "@/components/list-item";
import ListHeader from "@/components/list-header.vue";
export default {
  data: function() {
    return {
      conMsg1: "18223306087",
      conMsg2: "18223306087@163.com",
      conMsg3: "ssdwbobo",
      conMsg4: '1032135482',
      conMsg5: 'skychenbo',
      title1: "CONTACT",
      title2: "SOCIAL"
    };
  },
  components: {
    ListItem,
    ListHeader
  }
};
</script>


<style lang="less">
.context-list {
  width: 100%;
  margin-bottom: 30px;
}
</style>
