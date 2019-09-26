<template >
    <div class="img-container">
        <div class="image-left">
             <img :src="person.img_url" alt="">
        </div>
        <div class="image-right">
            <button class="edit">修改</button>        
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
    }
}

</script>
<style lang="css" scope>
    .img-container{
        width: 100%;
        height: 100%;
        display: flex;
    }
    .image-left{
        flex: 6;
        margin-top: 12px;
    }
    .image-left img{
        width: 90%;
        height: 100%;
        
    }
    .image-right{
        flex: 4;
        margin-top:12px; 
    }
    .image-right button{
        width: 90%;
        border: none;
        color: #fff;
        padding: 5px;
        background-color: red;
        border-radius: 5px;
    }

</style>