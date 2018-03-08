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
              1、阅读过Vue源码，并写过相应的源码分析文章，并用vue做过一些项目 
              <br>     
              2、英语六级水平，掘金翻译计划成员，无障碍阅读英语文献.
              <br>
              3、专注于javaScript原生技术，相信原生是一切的基础。对新标准ES6都有一定的了解。
              <br>
              4、对HTML5和CSS3有一定的了解 
              <br>
              5、了解nodeJS，并且能够独立完成简单的项目 
              <br>
              6、了解前端构建工具webpack,项目管理工具git 
              <br>
              7、掘金专栏作者，有3k的关注量
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
        <Description :title='title4'>
          <p class="content">
            对待工作认真负责，吃苦耐劳。追求新技术，追求自我突破，乐意接受新技术，并进行学习，如今前端技术日新月异，更需要
            时时刻刻的提高自己，警醒自己。个人有看书的习惯，市场上基本所有的关于前端的书基本都看过一遍。在未来的工作中，我将
            以充沛的精力，刻苦专研，努力工作，与企业共同发展
          </p>
        </Description>
      </div>
      <div class="bottom">
        <p class="text">此简历由vue进行构建，项目地址</p>
      </div>
      <button class="button" @click='saveAsImage'>Save As Image</button>
    </div>
    <router-view/>
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
      title1: "Working Experience",
      title2: "Skill",
      title3: "Education",
      title4: "Self Evaluation",
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
        "参与学校创新大赛，网站用于制作问卷调查，我负责前端的部分，采用的是vue技术栈，在比赛中获得了" +
        "优秀作品奖",
      place1: "前端",
      desc2:
        "关于网络答题的网站制作，我的职责是负责html, css, javaScript的部分，仍然采用的是vue技术栈",
      place2: "前端",
      desc3:
        "为掘金翻译计划，翻译国外优秀的文章，这项工作现在仍然在继续，国外优秀文章确实很多，需要我们学习",
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
            margin-top: -45px;
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
