<template>
    <div class="container">
        <header class="nav">
            <span class="userName">{{userName}}</span>
        </header>
        <div class="wrap">
            <section class="logo">
                <div class="logo-box">
                    <img src="../../assets/logo.png" width="100%"/></div>
                <div class="select-box">
                        <input placeholder="请输入内容"  class="input" v-model="search" />
                    <el-button type="danger"  @click="searchGod">搜索</el-button>
                </div>
            </section>
            <section class="list-header">
                <div class="left">
                    <span class="god-txt">全部商品:{{godsNums}}</span>
                </div>
                <div class="right">
                    <span>配送至:
                         <el-select v-model="value" placeholder="请选择" size="small">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                         </el-select>
                    </span>
                </div>
            </section>
            <section class="table-header">
                <div class="table1">  <el-button type="info" size="small" @click="chooseAllGods" plain>全选</el-button></div>
                <div class="table2">商品</div>
                <div class="table3">单价</div>
                <div class="table4">数量</div>
                <div class="table5">小计</div>
                <div class="table6">操作</div>
            </section>
        <section class="gods-list" v-for="item in godsList" :key="item.id">
            <div class="table1">
                <el-switch
                        v-model="item.selected"
                        active-color="#409EFF"
                        inactive-color="#909399"
                        @change="isTrue">
                </el-switch>

            </div>
            <div class="table2">
                <img src="../../assets/logo.png" height="200" width="200"/>
                <span class="title">{{item.productName}}</span>
            </div>
            <div class="table3">
                <div class="sale">
                    <span class="old-sale">{{item.oldSale}} ￥</span> <span class="new-sale">{{item.newSale}} ￥</span>
                </div>
            </div>
            <div class="table4">
                <el-input-number v-model="item.godsNumber"
                                 @change="handleChange(item)" size="small"
                                 :min="1" :max="item.stock" label="描述文字"></el-input-number>
            </div>
            <div class="table5">
                <span>{{item.godsNumber * item.newSale}} ￥</span>
            </div>
            <div class="table6">
                <a @click="buyOneGod(item)" class="buy">点击付款</a>
                <br>
                <a @click="delGod(item)" class="del">删除</a>
            </div>
        </section>
            <div class="footer">
                <div class="left">
                    <ul>
                        <li><a @click="chooseAllGods">全选</a></li>
                        <li><a @click="dialogVisible = true">删除</a></li>
                        <li><a>清除失效</a></li>
                        <li><a>分享</a></li>
                    </ul>
                </div>
                <div class="right">
                        <p>已选商品 <span class="num">{{godsNums}}</span> 件</p>
                        <p>合计(不含运费) ：<span class="icon">￥</span><span class="sale">{{godsSale}}</span></p>
                    <el-button :type="godsNums > 0?'danger':'info'" ref="btnOfBuy" @click="buyMoreGods" :disabled="godsNums > 0?false:true">点击购买</el-button>
                </div>
            </div>
    </div>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
               >
            <span>确认删除吗</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="userChooseYes">确 定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
  data () {
    return {
      options: [{
        value: '选项1',
        label: '成都高新'
      }, {
        value: '选项2',
        label: '成都双流'
      }, {
        value: '选项3',
        label: '成都郫县'
      }, {
        value: '选项4',
        label: '成都武侯'
      }, {
        value: '选项5',
        label: '成都金牛'
      }],
      value: '',
      godsList: [
        {id: 1, userName: 'Oxygen', productName: 'Mta10', godID: 20190925001, oldSale: '1501', newSale: '998', godsNumber: 1, stock: 10, godsImg: '', selected: false},
        {id: 2, userName: '1451', productName: '苹果10', godID: 20190925002, oldSale: '2200', newSale: '998', godsNumber: 5, stock: 5, godsImg: '', selected: false},
        {id: 3, userName: 'dsa4', productName: '小米Pro', godID: 20190925003, oldSale: '7850', newSale: '998', godsNumber: 1, stock: 10, godsImg: '', selected: false},
        {id: 4, userName: 'Oxygen', productName: 'iPad', godID: 20190925004, oldSale: '8800', newSale: '998', godsNumber: 1, stock: 10, godsImg: '', selected: false},
        {id: 5, userName: 'ss1', productName: 'iPad', godID: 20190925005, oldSale: '12000', newSale: '998', godsNumber: 1, stock: 10, godsImg: '', selected: false},
        {id: 6, userName: 'Oxygen', productName: '三星', godID: 20190925006, oldSale: '7900', newSale: '998', godsNumber: 1, stock: 10, godsImg: '', selected: false},
        {id: 7, userName: 'ss1', productName: 'iPad', godID: 20190925007, oldSale: '5650', newSale: '998', godsNumber: 1, stock: 0, godsImg: '', selected: false}
      ],
      userName: '',
      godsSale: 0,
      godsNums: 0,
      dialogVisible: false,
      search: ''
    }
  },
  created () {
    // 获取用户姓名
    this.userName = this.$route.params.userName
  },
  methods: {
    handleChange (data) {
      this.godsList.forEach(item => {
        if (data.godID == item.godID) {
          item.godsNumber = data.godsNumber
        }
      })
      this.countSale()
    },
    // 搜索
    searchGod () {
     let name = this.search;
     let newArry = [];
     this.godsList.forEach(item=>{
         if(item.productName.indexOf(name) > -1){
             newArry.push(item)
         }
     })
        this.godsList = newArry;
    },
    isTrue () {
      this.countSale()
    },
    countSale () {
      let num = 0, godSale = 0
      this.godsList.forEach(item => {
        if (item.selected == true) {
          num += parseInt(item.godsNumber)
          godSale += parseInt(item.godsNumber) * parseInt(item.newSale)
        }
      })
      this.godsSale = godSale
      this.godsNums = num
    },

    delGod (data) {
      let newArry = []
      this.godsList.forEach(item => {
        if (item.godID == data.godID) {
        } else {
          newArry.push(item)
        }
      })
      this.godsList = newArry
    },
    // 全选
    chooseAllGods () {
      this.godsList.forEach(item => {
        item.selected = true
      })
      this.countSale()
    },
    userChooseYes () {
      let newArry = []
      this.godsList.forEach(item => {
        if (item.selected == true) {
        } else {
          newArry.push(item)
        }
      })
      this.godsList = newArry
      this.countSale()
      this.dialogVisible = false
    },
    buyMoreGods () {
      let godIDs = []
      this.godsList.forEach(item => {
        if (item.selected == true) {
          godIDs.push(item)
        }
      })
      let godsInfo = JSON.stringify(godIDs)
      localStorage.setItem('godsInfo', godsInfo)
      this.$router.push(
        {path: '/shop_car/god_list'}
      )
    },
    buyOneGod (data) {
      let godsInfo = JSON.stringify(data)
      localStorage.setItem('godsInfo', godsInfo)
      this.$router.push({path: '/shop_car/god_list'})
    }
  },
  watch: {
  }
}
</script>

<style scoped lang="scss">
    .container{
        .wrap{
            width: 1200px;
            margin: 100px auto 0;
        }
        .logo{
            display:flex;
            justify-content: space-between;
            .logo-box{
                width: 150px;
                height: 50px;
                border: 1px #eee solid;
                overflow: hidden;
                img{
                    width: 100%;
                }
            }
            .select-box{
                display: flex;
                padding-top: 10px;
                .input{
                    height: 38px;
                    line-height: 38px;
                    border: 1px solid red;
                    padding-left: 5px;
                    width:250px;
                }
            }
        }
        .list-header{
            margin-top: 20px;
            display: flex;
            justify-content: space-between;
            height: 35px;
            span{
                line-height: 30px;
            }
            .left{
                height: 30px;
                .god-txt{
                    font-size: 24px;
                    color: #E42328;
                }
            }
            .right{
                height: 30px;
                span{
                    font-size: 16px;
                    color: #232323;
                }
            }
        }
        .table-header{
            display: flex;
            height: 50px;
            background: #F3F3F3;
            border: 1px silver solid;
            margin-bottom: 5px;
            justify-content: space-between;
            div{
                line-height: 50px;
                font-size: 16px;
                color: #1B2E38;
                text-align: center;
            }
            .table1{flex: 1;text-align: left;padding-left: 10px} .table2{flex: 1;text-align: left} .table3{flex: 3;} .table4{flex: 1;} .table5{flex: 1;} .table6{flex: 1;}
        }
        .nav{
            position: fixed;
            height: 70px;
            top: 0;
            width: 100%;
            background: lightblue;
            z-index: 10;
            .userName{
                font-size: 16px;
            }
        }
        .gods-list{
            display: flex;
            justify-content: space-between;
            height: 150px;
            align-items: center;
            background: #eee;
            margin-bottom: 20px;
            padding: 0 20px;
            border: 1px slategray solid;
            .table1{
                flex: 1;
                display: flex;

                .el-switch{
                    flex: 1;
                }
            }
            .table2{
                flex: 2;
                display: flex;
                align-items: center;
                img{
                    flex: 2;
                    width: 100px;
                    height: 100px;
                }
                .title{
                    flex: 4;
                }
            }
            .table3{
                flex: 4;
               text-align: center;
                .sale{
                    display: flex;
                    flex-direction: column;
                    .old-sale{font-size: 12px;color: #999;text-decoration: line-through}
                    .new-sale{font-size: 16px;color: red}
                }

            }
            .table4{
                flex: 2;
                text-align: right;
            }
            .table5{
                flex: 2;
                text-align: center;
                span{
                 font-size: 16px;
                 color: red;
            }
            }
            .table6{
                flex: 1;
                text-align: right;
                display: flex;
                flex-direction: column;
                .buy{
                    font-size: 16px;
                    text-align: center;
                    color: #67C23A;
                }
                .buy:hover,.del:hover{
                    text-decoration: underline;
                    cursor: pointer;
                }
                .del{
                    font-size: 16px;
                    text-align: center;
                    color: #F56C6C;
                }
            }
        }
        .footer{
            height: 70px;
            width: 100%;
            background: #E5E5E5;
            display: flex;
            font-size: 16px;
            justify-content: space-around;
            .left{
                flex: 1;
                text-align: left;padding-left: 20px;
                ul{
                    display: flex;
                    width: 360px;
                    li{
                        flex: 1;
                        line-height: 70px;
                        a{color: #3C3C3C;}
                    }
                    li a:hover{
                        cursor: pointer;
                    }
                }
            }
            .right{
                display: flex;
                p{
                    line-height: 70px;
                    color:#3c3c3c;
                    .num{
                        color: #FF4400;
                        font-size: 20px;
                    }
                    .icon{
                        color: #FD4349;
                    }
                    .sale{
                        color: #FF4400;
                        font-size: 24px;
                        font-weight: bold;
                    }
                }
            }
        }
    }
</style>
