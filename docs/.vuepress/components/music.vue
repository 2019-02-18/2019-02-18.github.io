<template>
    <div class="music">
        <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=530 height=86 src="//music.163.com/outchain/player?type=2&id=857896&auto=1&height=66"></iframe></iframe>
    </div>
</template>

<script>
    export default {
        name: "music",
        data(){
            return{

            }
        },
        mounted() {
        },
        methods:{
        }
    }
</script>

<style scoped>
    .music{
        position: fixed;
        bottom: 120px;
        left: 50%;
        transform: translate(-50%);
    }
</style>
