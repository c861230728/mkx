<template>
  <div id="list">
    <div class="condition">
      <section v-for=" (item,index1) in  condition" :key="index1">
        <span>{{item.genre}}</span>
        <ul>
          <li
            v-for="(itemSub ,index2) in item.children "
            :key="index2"
            @click="under(index1,index2)"
          >{{itemSub.lable}}</li>
        </ul>
        <section class="price-module" v-show="item.module">
          <input type="number" v-model="price1" />元 ——
          <input type="number" v-model="price2" />元
          <input
            type="button"
            value="确定"
            :disabled="disabled"
            :class="{'active': !disabled}"
            @click="Custom"
          />
        </section>
      </section>
      <section class="conditionShow">
        <span>筛选条件</span>
        <section v-for="(item ,index3) in conditionS" :key="index3" @click="del(index3)">
          {{item.lable}}
          <ul>
            <li v-for=" (item2,index4) in item.child" :key="index4">{{item2}}</li>
          </ul>
        </section>
      </section>
    </div>
    <div class="exhibition-box">
      <ul class="goods-list-box">
        <li v-for="(item,index5) in currentList" :key="index5" @click="particulars(index5)">
          <span class="goods-name">{{item.goodName}}</span>
          <span class="goods-price">{{item.price}}&nbsp;&#165;</span>
        </li>
      </ul>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="list.length"
        :page-size="pageNuber"
        :hide-on-single-page="value"
        @current-change="current"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
import { log } from "util";
export default {
  props: [],
  data() {
    return {
      condition: [
        {
          genre: "品牌",
          children: [
            { lable: "华为", val: "华为" },
            { lable: "小米", val: "小米" },
            { lable: "vivo", val: "vivo" },
            { lable: "三星", val: "三星" },
            { lable: "魅族", val: "魅族" }
          ],
          module: false
        },
        {
          genre: "尺寸",
          children: [
            { lable: "4.5英寸以下", val: "4.5" },
            { lable: "4.5-5.0英寸", val: "4.5-5.0" },
            { lable: "5.0-5.5英寸", val: "5.0-5.5" },
            { lable: "5.5英寸以上", val: "5.5" }
          ],
          module: false
        },
        {
          genre: "价格",
          children: [
            { lable: "1000元以下", val: "1000" },
            { lable: "1000-1500元", val: "1000-1500" },
            { lable: "1500-2500元", val: "1500-2500" },
            { lable: "2500元以上", val: "2500" }
          ],
          module: true
        },
        {
          genre: "颜色",
          children: [
            { lable: "黑色", val: "黑色" },
            { lable: "白色", val: "白色" },
            { lable: "蓝色", val: "蓝色" },
            { lable: "粉色", val: "粉色" }
          ],
          module: false
        }
      ], //筛选条件

      hello_msg: "222",
      price1: "",
      price2: "",
      disabled: true, //是否确定激活按钮,
      conditionS: [],
      //列表数据
      list: [],
      currentList: [],
      value: false,
      pageNuber: 15
    };
  },
  methods: {
    under(i, j) {
      let A = {
        lable: this.condition[i].genre,
        child: [this.condition[i].children[j].lable]
      };
      let flg = 0;
      let flg2 = 0;
      if (this.conditionS.length != 0 && this.conditionS.length <= 6) {
        for (var j = 0; j < this.conditionS.length; j++) {
          // if (this.conditionS[j].lable == "颜色") {
          //   flg = 1;
          //   flg2 = 1;
          //   this.conditionS[j].child.map((item, index) => {
          //     if (item == A.child[0]) {
          //       console.log("已经存在！");
          //       flg2 = 1;
          //     }else{
          //       flg2 = 0;
          //     }
          //   });
          //   if (flg2 == 0 ) {
          //     this.conditionS[j].child.push(A.child[0]);
          //   }
          // }else
          if (this.conditionS[j].lable == A.lable) {
            flg = 1;
            this.conditionS[j].child[0] = A.child[0];
          }
        }
        if (flg == 0) {
          this.conditionS.push(A);
        }
      } else {
        if (this.conditionS.length == 0) {
          this.conditionS.push(A);
        }
      }
      this.$forceUpdate();
    },

    Custom() {
      let str = "";
      let val = "";
      if (this.price1 == "") {
        val = this.price2;
        str = "元以下";
      }
      if (this.price2 == "") {
        val = this.price1;
        str = "元以上";
      }
      let newprice = {
        lable: "价格",
        child: [val + str]
      };
      if (this.conditionS.length != 0) {
        this.conditionS.map((item, index) => {
          if (item.lable == "价格") {
            this.conditionS[i].child[0] = newprice.child[0];
          }
        });
      } else {
        this.conditionS.push(newprice);
      }
    },
    //获取数据
    listDate() {
      if (arguments[0].method == "get") {
       
        this.$axios
          .get(arguments[0].url)
          .then(response => {
            console.log(response);
            this.list = response.data;
            this.current(1);
          })
          .catch(error => {
            console.log("error" + error);
          });
      }
    },
    //跳转详情页
    particulars(i) {
      let str = {
        goodsId: this.list[i].goodID
      };
      // this.$router.push({name:"",params: str})
    },
    //分页数据
    current(i) {
      this.currentList = this.list.slice(
        this.pageNuber * (i - 1),
        this.pageNuber * i
      );
    },
    //删除条件
    del(j) {
      this.conditionS.splice(j, 1);
    }
  },
  mounted() {
    this.listDate({ url: "http://luoyuequan.cn/good/list", method: "get" });
  },
  watch: {
    price1() {
      if (this.price1 != "") {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    price2() {
      if (this.price2 != "") {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
#list {
  > div {
    width: 1200px;
    margin: 25px auto;
  }
  .condition {
    height: auto;
    > section {
      width: 100%;
      height: 50px;
      overflow: hidden;
      display: flex;
      align-items: center;
      margin: 5px 0;
      > span {
        display: block;
        width: 80px;
        height: 50px;
        line-height: 50px;
        background-color: darkgrey;
      }
      ul {
        padding: 0;
        margin-left: 20px;
        text-align: left;
        height: auto;
      }
      li {
        list-style: none;
        display: inline-block;
        padding: 5px 10px;
        font-size: 0.9em;
        cursor: pointer;
        position: relative;
        &:not(:first-child)::before {
          position: absolute;
          display: block;
          content: "";
          width: 1px;
          height: 50%;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
          background-color: darkgrey;
        }
        &:hover {
          color: red;
          text-decoration: underline;
        }
      }
      > .price-module {
        font-size: 0.8em;
        > input[type="number"] {
          width: 60px;
          outline: none;
        }
        input[type="number"]::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
          -webkit-appearance: none;
          appearance: none;
          margin: 0;
        }
        > input {
          margin: 0 5px;
        }
        > input[type="button"] {
          border: none;
          padding: 3px 10px;
          cursor: pointer;
          border-radius: 3px;
          outline: none;
          font-size: 0.8em;
        }
        .active {
          background-color: red;
          color: #fff;
        }
      }
    }
    > .conditionShow {
      box-sizing: border-box;
      width: 100%;
      overflow: hidden;
      height: 50px;

      > section {
        font-size: 0.8em;
        padding: 0 10px;
        border: 1px solid black;
        margin: 0 5px;
        font-weight: 600;
      }
      ul {
        padding: 0;
        margin: 0;
        display: inline-block;
        font-weight: normal;
      }
    }
  }
  .exhibition-box {
    height: 600px;
    margin: 25px auto;
    text-align: left;
    > .goods-list-box {
      box-sizing: border-box;

      width: 100%;
      height: 80%;
      display: flex;
      padding: 25px;
      > li {
        width: 250px;
        height: 200px;
        margin: 5px;
        list-style: none;
        padding: 15px;
        box-sizing: border-box;
        cursor: pointer;
        &:hover {
          box-shadow: 0px 0px 20px #cac4c4;
        }
        > span {
          display: block;
          margin: 5px 0;
        }
        > .goods-price {
          color: red;
          letter-spacing: 1px;
        }
        > .goods-name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>