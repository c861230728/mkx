<template>
    <div class="edit-container">
        <p>用户名:&nbsp;<input type="text" :value="person.username"></p>
        <p>登陆名:&nbsp;<input type="text" :value="person.loginname"></p>     
        <p>邮箱&nbsp;&nbsp;&nbsp;:&nbsp;<input type="text" :value="person.email"></p> 
        <p>地址&nbsp;&nbsp;&nbsp;:&nbsp;<input type="text" :value="person.address"></p> 

        <P><button @click="edit">确认修改</button></P>
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
                address:'东胜神州傲来国花果山水帘洞',
                img_url:'http://img4.cache.netease.com/photo/0001/2010-04-17/64EFS71V05RQ0001.jpg',
                usertype:'个人用户'
            }
        }
    },
    filters:{
        aboutuser(gender){
           if(gender == 1){
               return "男";
           }else {
               return "女";
           }
        }
    },
    methods:{
        edit(){

        }
    }
}
</script>
<style lang="css" scoped>
    .edit-container{
        width: 90%;
        margin-top:12px;
    }
     .edit-container p{
         text-align: center;
         padding: 8px;
         font-size: 15px;
         text-indent: 2vw;
         
     }
     .edit-container p input{
         text-indent: 2px;
         padding: 5px;
         border:1px solid #333;
     }
    .edit-container p button{
        width: 40%;
        padding: 5px;
        border: none;
        color: #fff;
        background-color: red;
        border-radius:5px; 
        margin-top:10vh;
    }
</style>