<template>
  <div class="goods_handle">
    <div class="date-time"></div>
    <div class="table-handle">
      <button>Edit</button>
      <button>import</button>
      <button>Add</button>
    </div>
    <div class="goods-table">
      <template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="user_account" label="账号" width="180"></el-table-column>
          <el-table-column prop="real_name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="insert" label="地址"></el-table-column>
          <el-table-column prop="email" label="邮箱"></el-table-column>
          <el-table-column prop="create_time" label="创建时间"></el-table-column>
        </el-table>
      </template>
    </div>
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      tableData: [
        {
          user_id:1,
          user_account: "",
          pw:"",
          nick_name: "",
          real_name:"",
          sex: 1,
          email: "1111@qq.com",
          insert: "",
          user_type:1,
          credit: "88.0",
          qq:"",
          create_time:"",
          last_login_time:""
        }
      ]
    }
  },
  created(){
    this.getuserlist();
  },
  methods:{
    getuserlist(){
      this.http.service.post('/user/allUserInfo',{
        
      }).then(
                (res)=>{
                    console.log(res.data);
                    this.tableData = res.data;
                }
            )
            .catch(
                (res)=>{
                    console.log(res)
                }
            )
    }
  }
  
}
</script>


<style lang="scss" scoped>
.date-time {
  height: 80px;

  width: 100%;
  background: #fff;
  box-shadow: 0 0 5px #fff;
}
.table-handle {
  margin: 30px 0 30px 0;
  text-align: left;
  button {
    margin-right: 15px;
    background: #fff;
    border: none;
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    border-radius: 2px;
    box-shadow: 0 0 2px #ccc;
    outline: none;
    cursor: pointer;
    color: #356af6;
    font-size: 14px;
  }
}
.page{
  margin-top:15px;
  float: right;
}
</style>