<template>
    <div class="worp-about">
       <div class="about-left">
           <p><span>用户名:&nbsp;&nbsp;</span>{{ person.username }}</p>
           <p><span>登陆名:&nbsp;&nbsp;</span>{{ person.loginname }}</p>
           <p><span>性别:&nbsp;&nbsp;</span>{{ person.gender | aboutuser }}</p>
           <p><span>邮箱:&nbsp;&nbsp;</span>{{ person.email }}</p>
           <p><span>地址:&nbsp;&nbsp;</span>{{ person.address }}</p> 
       </div>
       <div class="about-right">
            <div class="about-image">
                <div class="img-header">
                    <img :src="person.img_url" alt="">
                </div>
                 <div class="img-content">
                     <p><span>用户名:&nbsp;&nbsp;</span>{{ person.username }}</p>
                     <p><span>性别:&nbsp;&nbsp;</span>{{ person.gender | aboutuser }}</p>
                     <p><span>用户类型:&nbsp;&nbsp;</span>{{ person.usertype}}</p>
                </div>
            </div>       
       </div>
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
    created(){
        this.getUserInfo();
    },
    methods:{
        getUserInfo(){
            let _this = this;
            this.axios
            .post('/user/baseInfo',{
                params:{
                    userId:'1'
                }
            })
            .then((res)=>{
                console.log(res.data);
            })
            .catch((res)=>{
                console.log(res);
            })
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