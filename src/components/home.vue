<template>
  <div id="home">
    <div class="nav-top"></div>
    <!--搜索板块-->
    <div class="cephalosome">
      <div class="log">
        <img src="../../static/images/logo.png" alt />
      </div>

      <div class="classify">
        <span class="classify-title">{{topTitle}}</span>
        <div class="classify-box">
          <span class="classify-box-content">{{classifyLable}}</span>
          <ul class="classify-content-list">
            <li
              v-for=" (classifyItem , index) in classify"
              :key="index"
              @click="typeItem(index)"
            >{{classifyItem}}</li>
          </ul>
        </div>
      </div>

      <div class="search-box">
        <div>
          <input type="search" placeholder="请输入内容...." v-model="searchVla" />
          <div class="search-btn">搜索</div>
        </div>
        <ul class="hotSearch">
          <li v-for=" (hotItem ,i) in hotSearch" :key="i" :class="{'active':i == 0}">{{hotItem}}</li>
        </ul>
      </div>

      <div class="shoppingtrolley">
        购物车
        <ul class="shoppingList">
          <li v-if="shoppingtrolley.length == 0" class="vacancy">请添加商品</li>
        </ul>
      </div>
    </div>
    <!--banner区域和内容-->
    <div class="content-box">
      <div class="content-top">
        <span class="content-top-title">{{topTitle}}</span>
        <ul class="content-top-list">
          <li v-for=" (listItem , index) in topList" :key="index">{{listItem.title}}</li>
        </ul>
      </div>
      <!--左侧分类和右侧轮播 -->
      <div class="content">
        <div class="le">
          <section v-for=" (item ,index) in list" :key="index">
            <span>
              <i class="iconfont" :class="item.icon"></i>
              {{item.class}}
            </span>
            <ul>
              <li v-for=" (item2 , index2) in item.childern" :key="index2">{{item2}}</li>
            </ul>
          </section>
        </div>
        <div class="rg">
          <!--轮播-->
          <section class="block">
            <el-carousel :interval="3000" height="400px">
              <el-carousel-item v-for="(item, j ) in slideshow " :key="j">
                <img :src="item.imgSrc" :alt="item.title" />
              </el-carousel-item>
            </el-carousel>
          </section>
          <!--推荐-->
          <section class="featured">
            <ul>
              <li v-for=" (item,index) in featured" :key="index">
                <img :src="item.imgSrc" alt />
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { log, error } from "util";
export default {
  props: [],
  data() {
    return {
      list: [
        {
          class: "电视",
          icon: "icon-dianshi",
          childern: ["平板电视", "家庭影音"]
        },
        {
          class: "冰箱洗衣机",
          icon: "icon-bingxiang",
          childern: ["平板电视", "家庭影音"]
        },
        {
          class: "空调",
          icon: "icon-kongtiao",
          childern: ["挂壁式空调", "立柜式空调"]
        },
        {
          class: "厨卫电器",
          icon: "icon-youyanji",
          childern: ["平板电视", "家庭影音"]
        },
        {
          class: "厨房小电",
          icon: "icon-dianfanbao-",
          childern: ["平板电视", "家庭影音"]
        },
        {
          class: "生活电器",
          icon: "icon-dianchuifeng",
          childern: ["平板电视", "家庭影音"]
        },
        {
          class: "个体健康",
          icon: "icon-dianchuifeng",
          childern: ["平板电视", "家庭影音"]
        }
      ],
      hello_msg: "222",
      topTitle: "家用电器",
      topList: [
        { title: "智能生活" },
        { title: "乡村专卖" },
        { title: "企业购" },
        { title: "京东金融" }
      ],
      hotSearch: ["热搜1", "热搜2", "热搜3", "热搜4", "热搜5", "热搜6"],
      classifyLable: "全都分类",
      classify: ["类型1", "类型2", "类型3", "类型4", "类型5", "类型6", "类型7"],
      //购物车列表
      shoppingtrolley: [],
      //轮播图数据
      slideshow: [
        { title: "图1", imgSrc: "../../static/images/t1.jpg" },
        { title: "图2", imgSrc: "../../static/images/t2.jpg" },
        { title: "图3", imgSrc: "../../static/images/t3.jpg" },
        { title: "图4", imgSrc: "../../static/images/t4.jpg" }
      ],
      //推荐位数据
      featured: [
        { title: "推荐1", imgSrc: "../../static/images/t1.jpg" },
        { title: "推荐2", imgSrc: "../../static/images/t2.jpg" },
        { title: "推荐3", imgSrc: "../../static/images/t3.jpg" },
        { title: "推荐4", imgSrc: "../../static/images/t4.jpg" }
      ],
      searchVla: ""
    };
  },
  methods: {
    typeItem(i) {
      this.classifyLable = this.classify[i];
    },
    listData() {
      this.$axios({
        method: arguments[0].method,
        url: arguments[0].url,
        data: arguments[0].data
      }).then(response => {
          console.log(response);
          // this.list = response.data;
          this.current(1);
        })
        .catch(error => {
          console.log("error" + error);
        });
    }
  },
   mounted() {
      this.listData({
        url: "http://luoyuequan.cn/goodType/listAllInfo",
        method: "post",
        data: {}
      });
    }
};
</script>
<style lang="scss" scoped>
@import "../../static/font/iconfont.css";
#home {
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    list-style: none;
  }
}

.content-box {
  width: 100%;
  height: auto;
  background-color: #f0efef;
  li {
    cursor: pointer;
  }
  .content-top {
    width: 1200px;
    height: 50px;
    margin: 0 auto;
    line-height: 50px;
    display: flex;
    justify-content: space-between;
    > span {
      display: inline-block;
      width: 20%;
      background-color: rgb(221, 69, 69);
      text-align: center;
      color: #fff;
    }
    > ul {
      width: 80%;
      height: 100%;
      background-color: #fff;
      margin: 0;
      padding: 0;
      display: flex;

      overflow: hidden;
      > li {
        width: 100px;
        height: 100%;
        font-size: 14px;
        transition: all 0.5s;
        position: relative;
        &:not(:first-child)::before {
          position: absolute;
          display: block;
          content: "";
          width: 1px;
          height: 50%;
          top: 50%;
          transform: translateY(-50%);
          background-color: #bfc2c5;
        }
        &:hover {
          color: red;
        }
      }
    }
  }
  .content {
    width: 1200px;
    height: 620px;
    margin: 0 auto;
    position: relative;

    > div {
      position: absolute;
      box-sizing: border-box;
    }
    > .le {
      left: 0;
      width: 20%;
      height: 614px;
      background-color: #fff;
      display: flex;
      flex-direction: column;
      padding: 8px;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 2px;
        height: 2px;
        background-color: #fff;
      }
      /*定义滚动条轨道 内阴影+圆角*/
      &::-webkit-scrollbar-track {
        border-radius: 10px;
      }
      /*定义滑块 内阴影+圆角*/
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
      }

      > section {
        padding: 8px;
        flex: 1;
        > span {
          display: block;
          width: 100%;
          text-align: left;
          > i {
            font-size: 1.5em;
            vertical-align: middle;
          }
        }
        ul {
          margin: 0;
          padding: 0;
          text-align: left;
          li {
            display: inline-block;
            padding: 8px;
            &:hover {
              color: red;
              text-decoration: underline;
            }
          }
        }
      }
    }
    > .rg {
      right: 0;
      width: 80%;
      padding: 1%;
      box-sizing: border-box;
      > .featured {
        width: 100%;
        height: 195px;
        margin-top: 5px;
        overflow: hidden;
        img {
          width: 100%;
          height: 195px;
        }
        > ul {
          display: flex;
          justify-content: space-around;
          margin: 0;
          padding: 0;
          > li {
            width: 100%;
            height: 100%;
            line-height: 195px;
            margin: 0 2px;
            text-align: center;
            display: inline-block;
          }
        }
      }
      > .block {
        width: 100%;
        height: 400px;
        img {
          width: 100%;
          height: auto;
        }
        .el-carousel__item h3 {
          color: #475669;
          font-size: 100px;
          opacity: 0.75;
          line-height: 400px;
          margin: 0;
        }

        .el-carousel__item:nth-child(2n) {
          background-color: #99a9bf;
        }

        .el-carousel__item:nth-child(2n + 1) {
          background-color: #d3dce6;
        }
      }
    }
  }
}
.nav-top {
  width: 100%;
  height: 50px;
  background-color: #99a9bf;
  margin-bottom: 50px;
}

.cephalosome {
  width: 1200px;
  height: 100px;
  margin: 50px auto;
  line-height: 100px;
  display: flex;

  //搜索框
  .search-box {
    width: 500px;
    height: auto;
    margin-left: 80px;
    > div {
      width: 100%;
      height: 40px;
      box-sizing: border-box;
      border: 2px solid red;
      display: flex;
      > input[type="search"] {
        border: 0;
        width: 85%;
        height: 100%;
        outline: none;
        text-indent: 1em;
      }
      > .search-btn {
        line-height: 40px;
        text-align: center;
        width: 16%;
        cursor: pointer;
        background-color: rgb(221, 69, 69);
        font-size: 1.2em;
        color: #fff;
        &:hover {
          box-shadow: inset 0px 0px 5px #dddddd;
        }
      }
    }
    .hotSearch {
      width: 100%;
      height: 30px;
      line-height: 30px;
      display: flex;
      align-items: center;

      > li {
        height: 100%;
        padding-right: 15px;
        padding-top: 5px;
        font-size: 0.8em;
        color: #bcbfc4;
        cursor: pointer;
        transition: all 0.5s;
        &:hover:not(.active) {
          color: red;
        }
      }
      > .active {
        color: red;
      }
    }
  }

  //购物车样式
  .shoppingtrolley {
    width: 150px;
    height: 40px;
    background-color: rgb(175, 170, 170);
    margin-left: 80px;
    line-height: 40px;
    color: #fff;
    font-size: 1.2em;
    cursor: pointer;
    transition: all 0.5s;

    position: relative;
    &:hover {
      background-color: rgb(221, 69, 69);
    }
    &:hover > .shoppingList {
      display: block;
    }

    > .shoppingList {
      display: none;
      position: absolute;
      width: 250px;
      top: 100%;
      left: -66%;
      min-height: 200px;
      background-color: #efefef;
      z-index: 99;
      padding: 8px;
      color: black;
      box-sizing: border-box;
      > .vacancy {
        font-size: 1.5em;
        line-height: 200px;
      }
    }
  }

  //log
  .log {
    width: 140px;
    height: 40px;
    line-height: 40px;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  //分类
  .classify {
    width: 180px;
    height: 40px;
    line-height: 40px;
    margin-left: 50px;
    display: flex;
    justify-content: space-between;
    padding: 0 2px;

    .classify-box {
      box-sizing: border-box;
      width: 50%;
      border: 1px solid #939793;

      position: relative;
      font-size: 0.9em;
      text-align: left;
      padding: 0 10px;
      cursor: pointer;
      .classify-content-list {
        visibility: hidden;
        box-sizing: border-box;
        position: absolute;
        width: 200px;
        left: -1px;
        top: 100%;
        height: auto;
        background-color: #fff;
        border: 1px solid #939793;
        z-index: 99;
        display: flex;
        flex-wrap: wrap;
        li {
          padding: 5px 10px;
          cursor: pointer;
          &:hover {
            color: red;
            text-decoration: underline;
          }
        }
      }
      &:hover::before {
        position: absolute;
        content: "";
        top: 100%;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: #fff;
        z-index: 100;
      }
      &:hover {
        .classify-content-list {
          visibility: visible;
        }
      }

      &::after {
        position: absolute;
        right: 5px;
        top: 60%;
        transform: translateY(-50%);
        content: "";
        display: block;
        width: 0;
        height: 0;
        border: 8px solid;
        border-color: #505050 transparent transparent;
      }
    }
  }
}
</style>