<template>
  <div id="admin">
    <el-container>
      <el-aside width="200px">
        <div class="title">maxs MS</div>
        <ul class="left-nav">
          <li
            v-for="(item,index) in navData"
            :key="index"
            @click="clickItem(index,item.path)"
            :class="isActive==index?'current':''"
          >{{item.name}}</li>
        </ul>
      </el-aside>
      <el-main>
        <div class="head">
          <div class="head-left">
            <i class="icon el-icon-search" @click="search"></i>
            <input type="text" placeholder="Search..." />
          </div>
          <div class="head-right">
            <div class="tips">
              <i class="el-icon-bell"></i>
            </div>
            <div class="per-info">
              <div class="avatar"></div>
              <div class="name">
                <span>banana</span>
                <i class="el-icon-caret-bottom"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="view">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>



<script>
export default {
  data() {
    return {
      isActive: 0,
      navData: [
        {
          name: "首页",
          path: "/admin"
        },
        {
          name: "商品上下架",
          path: "/admin/goodsHandle"
        },
        {
          name: "订单管理",
          path: "/admin/goodsHandle"
        },
        {
          name: "用户管理",
          path: "/admin/goodsHandle"
        }
      ]
    };
  },
  methods: {
    clickItem(itemIndex, path) {
      this.isActive = itemIndex;
      this.$router.push(path);
    },
    search() {
      console.log("232323");
    }
  }
};
</script>


<style lang="scss" scoped>
#admin,
.el-container {
  height: 100%;
}
.el-aside {
  background-color: #fff;
  color: #3568ff;
  border-right: 1px solid #f6f7fc;
  box-shadow: 2px 0 0 red;
  .left-nav {
    font-size: 14px;
    li {
      height: 60px;
      line-height: 60px;
      cursor: pointer;
      text-align: center;
    }
    .current {
      background: #366af4;
      color: #fff;
      border-left: 4px solid #adb9f8;
    }
  }
}
.view {
  box-sizing: border-box;
  padding: 40px 20px 0 40px;
}
.title {
  height: 80px;
  line-height: 80px;
  text-align: center;
  background: #fff;
  color: #3568ff;
  border-bottom: 1px solid #f6f7fc;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 0;
  .head {
    height: 80px;
    background: #fff;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding-top: 20px;
    padding-right: 20px;
    .head-left {
      margin-left: 40px;
      position: relative;
      .icon {
        position: absolute;
        left: 2px;
        top: 6px;
        cursor: pointer;
      }
      input {
        outline: none;
        border-radius: 10px;
        border: none;
        background: #f8f9fe;
        height: 30px;
        line-height: 30px;
        box-sizing: border-box;
        padding-left: 20px;
        font-size: 12px;
      }
    }
    .head-right {
      display: flex;
      flex-direction: row;
      .tips{
        margin-right: 20px;
      }
      i {
        color: #3568ff;
        line-height: 30px;
      }
      .per-info {
        display: flex;
        flex-direction: row;
        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid #ccc;
          margin-right: 20px;
        }
        .name {
          font-weight: 500;
          line-height: 30px;
        }
      }
    }
  }
}
.el-icon-caret-bottom{
  cursor: pointer;
}
</style>