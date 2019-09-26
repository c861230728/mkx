<template>
    <div class="container">
        <div class="main">
            <div class="left">
                <span  class="left-heade">设置</span>
                <router-link class="left-person"  to="/personcenter/personinfo">个人中心</router-link>
                <router-link class="left-account" to="/personcenter/personaccount">账号绑定</router-link>
            </div>
            <div class="right">
                <router-view></router-view>
            </div>           
        </div>
    </div>
   
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .container{
        position: relative;
        width: 100vw;
        height: 100vh;
        background-color: #eee;
        overflow: hidden;
    }
    .main{
        position: absolute;
        background-color: #fff;
        top:50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        width: 70%;
        box-shadow: 10px 10px 5px 5px #bbb3b3;
    }
    .left{
        flex: 1.5;
        height: 70vh;
        background-color: #e6e0e0;
    }
   .right{
       flex: 8.5;
       height: 70vh;
       overflow-y: scroll;
       overflow-x: hidden;       
   }
    .right::-webkit-scrollbar{
        display: none;
    }
    .left-heade{
        display: block;
        padding: 5px;
        padding-top:15px; 
        font-size: 15px;
        color: #333;
        text-align: left;
        text-indent: 10px;
        font-weight: 600;
        overflow: hidden;        
    }
    .left-heade:hover{
        color: red;
    }
    .left-person{
        display: block;
        padding: 5px;
        font-size: 15px;
        text-align: center;
        overflow: hidden;
    }
    .left-person:hover{
        color: red;
    }
    .left-account{
        display: block;
        padding: 5px;
        font-size: 15px;
        text-align: center;
        overflow: hidden;
    }
    .left-account:hover{
        color: red;
    }
   
</style>