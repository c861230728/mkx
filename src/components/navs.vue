<template>
    <div >
        <router-link to="/index/home">home</router-link>
        <router-link to="/index/list">list</router-link>
    </div>
</template>
<script>
    export default{
        props:[
        ],
        data(){
            return {
                list:[],
                hello_msg:'222'
            }
        },
        methods:{
                changeToken(){
                    this.$store.commit('upToken',9)
                }
        }
    }
</script>