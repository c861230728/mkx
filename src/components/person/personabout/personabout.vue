<template>
    <div class="worp-about">
       <div class="about-left">
           <p><span>用户名:</span>{{ person.username }}</p>
           <p><span>登陆名:</span>{{ person.loginname }}</p>
           <p><span>性别:</span>{{ person.gender }}</p>
           <p><span>邮箱:</span>{{ person.email }}</p>
           <p><span>地址:</span>{{ person.address }}</p> 

           <p><button>提交</button></p> 
       </div>
       <div class="about-right"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            person:{
                username:'张三',
                loginname:'Ajeo',
                gender:'1',
                email:'23345@QQ.COM',
                address:'东胜神州傲来国花果山水帘洞'
            }
        }
    },
}
</script>
<style lang="css" scope> 
    .worp-about{
        display: flex;
        width: 100%;
        height: 100%;
    }
    .about-left{
        flex: 5;    
        text-align: left;
    }
    .about-left p{
        padding: 15px;
    }
    .about-right{
        flex:5;
    }


</style>