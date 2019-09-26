<template>
    <div class="worp">
      <div class="personinfo-title">
        <router-link to="/personcenter/personinfo/personabout" tag="a">基本信息</router-link>
        <router-link to="/personcenter/personinfo/personimage" tag="a">头像照片</router-link>
        <router-link to="/personcenter/personinfo/personedit"  tag="a">修改个人信息</router-link>
      </div>
      <div class="personinfo-body">
        <router-view></router-view>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="css" scope>
    .worp{
        width: 100%;
        height: 100%;
    }
    .personinfo-title{
        text-align: left;
        padding: 15px
    }
    .personinfo-title a{
        padding: 10px;
        text-decoration: none;
    }
</style>