<template>
  <div id="app">
    <div class="resume">
      <div class="left">
        <Brief></Brief>
        <ContextList></ContextList>
      </div>
      <div class="right">
        <Description :title='title1'>
          <ExpItem :time='time1' :desc='desc1' :place='place1'></ExpItem>
          <ExpItem :time='time2' :desc='desc2' :place='place2'></ExpItem>
          <ExpItem :time='time3' :desc='desc3' :place='place3'></ExpItem>
        </Description>
        <Description :title='title2'>
          <div class="skill">
            <p class="left">
              1、深入理解Vue框架原理，理解依赖收集，响应式原理，Virtual-DOM等原理。曾经看过Vue源码，并写过几篇博客。对Vue全家桶也有一定的理解，例如Vue-Router,Vuex。
              <br>     
              2、英语六级水平，掘金翻译计划成员，为掘金翻译过多篇有关前端的文献，同时也关注外国新技术，浏览stackoverflow等网站。
              <br>
              3、专注于javaScript原生技术，相信原生是一切的基础。熟悉ES6新增语法，同时也密切关注ES7。
              <br>
              4、对HTML5和CSS3有一定的了解 ，并尝试将新特性加入项目中。
              <br>
              5、熟悉常用前端工具，抓包工具Fridder,前端构建工具webpack,项目管理工具git等
              <br>
              6、掘金专栏作者，有3k的关注量，3万的阅读量，热爱分享，热爱技术
              <br>
              7、了解后端Node.js，并使用过其开发框架express,用其做简单的项目
              <br>
              8、基础知识扎实，对计算机网络有关的东西也有过一定的研究
              <br>
              9、严格要求代码质量，并有测试框架Mocha的使用经验
            </p>
            <div class="right">
              <div class="canvas-container">
                <canvas ref="canvas" width="200" height="200"></canvas>
                <div ref="legend"></div>
              </div>
            </div>
          </div>
        </Description>
        <Description :title='title3'>
         <div class="education">
           <span class="school">东北石油大学</span>
           <span class="major">电子科学与技术</span>
           <span class="date">2014.9 ~ 2018.6</span>
         </div>
        </Description>
        <Description :title='title5'>
          <div class="education">
            <span class="school">东北石油大学</span>
            <span class="major">学生会</span>
            <span class="date">2015.6 - 2017.6</span>
          </div>
          <p class="content">
            在学生会学习部中，担任部长，负责督促同学学习，举办提高大学生素质有关的比赛。架起老师与学生沟通的桥梁。
          </p>
          <div class="education">
            <span class="school">东北石油大学</span>
            <span class="major">辩论队</span>
            <span class="date">2015.6 - 2017.6</span>
          </div>
          <p class="content">
            辩论是消遣的一种方式，在辩论队中担任辩手的职责，共同和大家讨论真理，切磋思想。
          </p>
        </Description>
        <Description :title='title4'>
          <p class="content">
            追求编程理想，如今javaScript高速发展，从简单的document.write发展到如今和后端分庭抗礼的局面，这是广大前端程序员的福音。而我
            作为一名前端程序员也必将为这宏伟的建筑添砖加瓦。本人工作刻苦认真，艰苦奋斗，抗压能力强，拥有不达目地誓不罢休的精神。同时也希望
            贵公司能给我一个机会，共同发展，共同进步。
          </p>
        </Description>
      </div>
    </div>
    <button class="button" @click='saveAsImage'>Save As Image</button>
  </div>
</template>

<script>
import Brief from "@/components/brief.vue";
import ContextList from "@/components/context-list.vue";
import Description from "@/components/description.vue";
import PieChart from "@/api/pieChart.js";
import ExpItem from "@/components/exp-item.vue";
import html2canvas from "@/api/html2canvas.js";
import FileSaver from "file-saver";

export default {
  name: "App",
  data: function() {
    return {
      title1: "工作经历",
      title2: "个人技能",
      title3: "教育经历",
      title4: "自我评价",
      title5: "校园经历",
      time1: "2017.9 ~ 2017.11",
      time2: "2017.8 ~ 2017.9",
      time3: "2017.6 ~ 至今",
      piePercent: {
        English: 40,
        Vue: 60,
        HTML5: 40,
        JavaScript: 80
      },
      desc1:
        "和同学一起做过一个仿造饿了么的网络应用，项目人员两个人，前端采用Vue+Webpack+ES6的技术栈，项目结构" +
        "采用如今流行的前后端分离的设计模式，本人负责前端部分，和同学一起商量接口的设计，数据的获取等等",
      place1: "前端",
      desc2:
        "由一个人前端采用Vue全家桶Vue+Vue-Router+Vuex实现数据的获取，数据应用到界面上,后端采用node框架express,实现前后端分离的博客项目",
      place2: "前端",
      desc3:
        "为掘金翻译计划翻译国外优秀的文章，这项工作现在仍然在继续，主要专注于前端部分",
      place3: "翻译",
      colors: ["#fde23e", "#f16e23", "#57d9ff", "#937e88"]
    };
  },
  mounted() {
    const myPieChart = new PieChart({
      canvas: this.$refs.canvas,
      data: this.piePercent,
      colors: this.colors,
      doughnutHoleSize: 0.5,
      legend: this.$refs.legend
    });
    myPieChart.draw();
  },
  methods: {
    saveAsImage: function() {
      let resume = document.querySelector(".resume");
      html2canvas(resume).then(function(canvas) {
        canvas.toBlob(function(blob) {
          FileSaver.saveAs(blob, "Resume.png");
        });
      });
    }
  },
  components: {
    Brief,
    ContextList,
    Description,
    ExpItem
  }
};
</script>

<style lang='less'>
@import url("../node_modules/reset-css/reset.css");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  .resume {
    width: 1247px;
    height: 1754px;
    border: 1px solid #dad8d7;
    background-color: white;
    position: relative;
    overflow: auto;
    .left {
      width: 380px;
      height: 100%;
      box-sizing: border-box;
      float: left;
      background-color: #fdfefe;
    }
    .right {
      box-sizing: border-box;
      width: 867px;
      float: right;
      padding: 0px 40px;
      p {
        font-size: 20px;
        line-height: 32px;
        color: #555;
        text-align: justify;
      }
      .skill {
        display: flex;
        margin-top: 15px;
        justify-content: space-between;
        .left {
          width: 70%;
        }
        .right {
          width: 30%;
          .canvas-container {
            margin-top: 150px;
          }
        }
      }
      .education {
        font-size: 18px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        margin-top: 8px;
        .school {
          width: 40%;
        }
        .major {
          width: 35%;
        }
        .date {
          width: 25%;
          text-align: right;
        }
      }
    }
    .bottom {
      position: absolute;
      bottom: 40px;
      left: 50%;
      transform: translateX(-50%);
      .text {
        font-size: 18px;
      }
    }
  }
  button.button {
    position: absolute;
    top: 40px;
    left: 50%;
    margin-left: 478px;
    background-color: white;
    border: 1px solid #dad8d7;
    cursor: pointer;
    padding: 5px 8px;
    border-radius: 4px;
    &:hover {
      background-color: #f8f8f8;
    }
  }
}
</style>
