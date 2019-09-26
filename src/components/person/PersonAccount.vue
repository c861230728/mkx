<template>
    <div class="bind-container">
        账号绑定
        <div class="bind-account" v-for="(item, index) in bindlist" :key="index">
           <div class="bind-account-left" >
               <span>{{ index+1 }}.</span> <span>{{ item.type }}</span> <span>{{ item.value }} </span>
           </div>
           <button class="bind-account-right" >
                绑定
           </button>
       </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           bindlist:[
               {id:1,type:'qq',value:'未绑定'},
               {id:2,type:'wechat',value:'已绑定'},
               {id:3,type:'phone',value:'已绑定'},
               {id:4,type:'email',value:'未绑定'}
           ]
        }
    },
}
</script>
<style lang="css" scope>
    .bind-container{
        text-align: left;
        text-indent: 20px;
        margin-top: 12px;
    }
    .bind-account{
        display: flex;
        margin:5vh;
        box-shadow: 2px 2px 4px #333;
        width: 40%;
        padding: 30px;
       
    }
    .bind-account-left{
        flex: 8;
    }
    .bind-account-left span{
        width: 3;
        align-items:center; 
        font-size:15px; 
        margin: 12px 0px;
    }
    .bind-account-right{
        flex: 2;
        padding: 2px;
        box-shadow: 2px 2px 4px #333;
        background-color: red;
        color: #fff;
        border: none;
        
    }
</style>