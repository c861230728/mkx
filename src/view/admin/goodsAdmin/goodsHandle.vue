<template>
  <div class="goods_handle">
    <div class="date-time"></div>
    <div class="table-handle">
      <button>Delete</button>
      <button>Edit</button>
      <button>import</button>
      <button>Add</button>
    </div>
    <div class="goods-table">
      <template>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
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
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
};
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
</style>