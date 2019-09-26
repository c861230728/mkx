<template>
    <div>
       login
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

        },
        mounted(){
            this.$store.commit('upToken',5)
        }
    }
</script>