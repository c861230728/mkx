<template>
    <div class="edit-container">
        <p>用户名:&nbsp;<input type="text"  v-model="person.realName"></p>
        <p>登陆名:&nbsp;<input type="text"  v-model="person.nickName"></p>     
        <p>邮箱&nbsp;&nbsp;&nbsp;:&nbsp;<input type="text" v-model="person.email"></p> 
        <p>地址&nbsp;&nbsp;&nbsp;:&nbsp;<input type="text" v-model="person.credit"></p> 
        <p>密码&nbsp;&nbsp;&nbsp;:&nbsp;<input type="text" v-model="pw"></p> 
        <P><button @click="edit">确认修改</button></P>
    </div>
</template>
<script>
export default {
    data() {
        return {
            person:[{
                realName: "",
                nickName: "",
                sex: 1,
                email: "1111@qq.com",
                insert: "",
                credit: "88.0",
                userType: 1,
                img_url:''
            }],
            userId:'1',
            token:'', 
            pw:''    
        }
    },
    methods:{
       edit(){
           this.http.service('/user/updateUserInfo',{
                userId:this.userId,
                realName: this.person.realName,
                nickName: this.person.nickName,
                email: this.person.email,
                insert: this.person.insert,
                credit: this.person.credit,
               })
           .then((res)=>{
               console.log(res);
           })
           .catch((res)=>{
               console.log(res);
           })
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