<template>
    <div >
        <navs></navs>
        <router-view/>
    </div>
</template>
<script>
    import navs from './navs.vue'
    export default{
        components:{
            navs
        },
        data(){
            return {
                list:[],
                hello_msg:'222'
            }
        },
        computed:{
            token:function(){
                return this.$store.state.token
            }
        },
        methods:{

        },
        mounted(){
            if(!this.token){
                alert('请先登录')
                this.$router.push({path:'/login'})
            }
        }
    }
</script>