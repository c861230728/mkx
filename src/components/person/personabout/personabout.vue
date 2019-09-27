<template>
    <div class="worp-about">
       <div class="about-left">
           <p><span>用户名:&nbsp;&nbsp;</span>{{ person.userAccount }}</p>
           <p><span>登陆名:&nbsp;&nbsp;</span>{{ person.nickName }}</p>
           <p><span>性别:&nbsp;&nbsp;</span>{{ person.sex | aboutuser }}</p>
           <p><span>邮箱:&nbsp;&nbsp;</span>{{ person.email }}</p>
           <p><span>地址:&nbsp;&nbsp;</span>{{ person.insert }}</p> 
           <p><span>地址:&nbsp;&nbsp;</span>{{ person.userType | abouttype }}</p> 
       </div>
       <div class="about-right">
            <div class="about-image">
                <div class="img-header">
                    <img :src="person.img_url" alt="">
                </div>
                 <div class="img-content">
                     <p><span>用户名:&nbsp;&nbsp;</span>{{ person.nickName }}</p>
                     <p><span>性别:&nbsp;&nbsp;</span>{{ person.sex | aboutuser }}</p>
                     <p><span>用户类型:&nbsp;&nbsp;</span>{{ person.usertype | abouttype}}</p>
                </div>
            </div>       
       </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            person:[{
                userAccount: "",
                nickName: "",
                sex: 1,
                email: "1111@qq.com",
                insert: "",
                credit: "88.0",
                userType: 1,
                img_url:''
            }],
            userId:'',
            token:'',
        }
    },
    filters:{
        aboutuser(sex){
           if(sex == 1){
               return "男";
           }else {
               return "女";
           }
        },
        abouttype(usertype){
            if(usertype == 1){
                return '初级会员'
            }else {
                return '高级会员'
            }
        }
    },
    created(){
        this.getUserInfo();
    },
    methods:{
        getUserInfo(){
            this.userId = localStorage.getItem('userID');
            this.token = localStorage.getItem('token')
            this.http.service.post('/user/baseInfo',{'userId':this.userId,'token':this.token}).then(
                (res)=>{
                    console.log(res.data);
                    this.person = res.data;
                }
            )
            .catch(
                (res)=>{
                    console.log(res)
                }
            )
        },
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
        text-indent: 20px;
    }
    .about-left p{
        padding: 15px;
        font-size: 15px;
    }
    .about-left p button{
        width: 100%;
        padding: 5px;
        border: none;
        border-radius: 3px;
        background-color: rgb(255, 57, 57);
        color: #fff;
        font-size: 15px;
    }
    .about-right{
        flex:5;
    }
    .about-image{
        width: 90%;
        height: 15vh;
        background-color: #eee;
        display: flex;
        box-shadow: 2px 2px 4px 2px rgb(163, 162, 162);
    }
    .img-header{
        flex: 3;
        height: 12vh;
        overflow: hidden;
        border-radius: 20vw;
        margin:1vh 2vh; 
    }
    .img-header img{
        width: 100%;
        height: 100%;
    }
    .img-content{
        flex: 8;
        height: 15vh;
    }
    .img-content p{
        margin: 1vh;
        text-align: left;
        text-indent: 1vw;
        font-size: 15px;
    }
</style>