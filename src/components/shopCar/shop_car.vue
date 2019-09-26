<template>
    <div class="">
        <el-row>
            <el-button class="jion-godCar" type="danger" plain @click="toGodsCar(userName)">购物车</el-button>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>购物车</span>
                    <el-button style="float: right; padding: 3px 0" @click='delGodsCar' type="text">清空</el-button>
                </div>
                <div v-for="item in godsList" :key="item.id" class="text item">
                    <router-link :to="'/shop_car/god_car_list/' + item.userName" tag="span">{{item.productName}}</router-link>
                </div>
            </el-card>
        </el-row>
        <el-dialog
                title="您还没有登录，请登录！"
                :visible.sync="dialogVisible"
                width="30%"
                center="center"
              >
            <el-input v-model="userName" placeholder="账号"></el-input>
            <br>
            <br>
            <el-input v-model="userPassword" placeholder="密码"></el-input>
            <br>
            <br>
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="isUserTrue">确 定</el-button>
        </el-dialog>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      godsList: [
        {id: 1, userName: 'Oxygen', productName: 'Mta10', godsNumber: 1, stock: 10, godsImg: '', selected: false},
        {id: 2, userName: '1451', productName: '苹果10', godsNumber: 1, stock: 10, godsImg: '', selected: false},
        {id: 3, userName: 'dsa4', productName: '小米Pro', godsNumber: 1, stock: 10, godsImg: '', selected: false},
        {id: 4, userName: 'ss1', productName: 'iPad', godsNumber: 1, stock: 10, godsImg: '', selected: false}
      ],
      userName: 'Oxygen',
      dialogVisible: false,
      userPassword: ''
    }
  },
  methods: {
    delGodsCar () {
      this.godsList = []
    },
    toGodsCar (data) {
      let isLogin = false
      if (isLogin) {
        this.$router.push(
          {path: '/shop_car/god_car_list/' + data}
        )
      } else {
        this.dialogVisible = true
      }
    },
    isUserTrue () {
      if (this.userName == '111' && this.userPassword == '111') {
        this.$router.push(
          {path: '/shop_car/god_car_list/' + this.userName}
        )
        this.dialogVisible = false
      } else {
        this.$message.error('用户账号或者密码错误')
      }
    }
    // 弹出登录框
  }
}
</script>

<style scoped lang="less">
    .el-row{
        position: relative;
        display: inline-block;
        .jion-godCar{
        }
        .box-card{
            display: none;
            width: 300px;
            position: absolute;
            margin-left: -215px;
        }
    }
    .el-row:hover .box-card{
        display: block;
    }
    .text {
        font-size: 14px;
    }

    .item {
        margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }
    .clearfix:after {
        clear: both
    }

    .box-card {
        width: 480px;
    }
</style>
