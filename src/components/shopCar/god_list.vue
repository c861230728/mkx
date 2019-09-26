<template>
    <div class="container">
    </div>
</template>

<script>
export default {
  data () {
    return {
      godInfo: []
    }
  },
  methods: {
    isBuySuccess () {
      if (true){
        this.$message({
          showClose: true,
          message: '付款成功！',
          type: 'success'
        })
      }else {
        this.$message({
          showClose: true,
          message: '付款失败！',
          type: 'error'
        })
      }
    },
    getgodsInfo () {
      this.godInfo = JSON.parse(localStorage.getItem('godsInfo'))
    }
  },
  created () {
    this.isBuySuccess()
    this.getgodsInfo()
    console.log(this.godInfo)
  }
}
</script>

<style scoped lang="less">
    .container{
    }

</style>
