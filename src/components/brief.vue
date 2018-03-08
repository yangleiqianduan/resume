<template>
  <div class="brief">
    <div class="avatar">
        <img src="@/assets/logo_name.png" class="img" width="212" height="212">
        <div class="name">陈波</div>
        <div class="job">前端</div>
        <div class="location">
          <img src="@/assets/location.png">
          <div class="location-name">重庆</div>
        </div>   
    </div>
    <div class="info">
      <ul>
        <li>
          <div class="value">男</div>
          <div class="key">SEX</div>
        </li>
        <li>
          <div class="value">22</div>
          <div class="key">AGE</div>
        </li>
        <li>
          <div class="value">本科</div>
          <div class="key">DEGREE</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less">
.brief {
  height: 630px;
  background-color: #f6f7f7;
  .avatar {
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .img{
      border-radius: 101px;
      margin-bottom: 45px;
    }
    .name {
      font-size: 32px;
      margin-bottom: 25px;
      letter-spacing: 10px;
    }
    .job {
      font-size: 24px;
      color: #555;
      margin-bottom: 25px;
      letter-spacing: 3px;
    }
    .location {
      display: flex;
      margin-left: -12px;
      align-items: center;
      .location-name {
        font-size: 20px;
        font-weight: bold;
        margin-left: 10px;
      }
    }
  }
  .info{
      height: 128px;
      ul{
        height: 100%;
        display: flex;
        border-top: 1px solid #dad8d7;
        border-bottom: 1px solid #dad8d7;
        li:not(:last-child){
          border-right: 1px solid #dad8d7;
        }
        li{
          width: 33.3333333%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          .value{
            margin-bottom: 10px;
            font-size: 24px;
            font-weight: bold;
          }
          .key{
            font-size: 16px;
            font-weight: bold;
            color: #555;
          }
        }
      }
    }
}
</style>


