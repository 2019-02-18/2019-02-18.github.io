<template>
    <div>
        <vue-particles
                color="#e33e33"
                :particleOpacity="0.7"
                :particlesNumber="100"
                shapeType="circle"
                :particleSize="4"
                linesColor="#e33e33"
                :linesWidth="1"
                :lineLinked="true"
                :lineOpacity="0.4"
                :linesDistance="150"
                :moveSpeed="3"
                :hoverEffect="true"
                hoverMode="grab"
                :clickEffect="true"
                clickMode="push"
                class="cash"
        >
        </vue-particles>
    </div>
</template>

<script>
    import Vue from 'vue'
    Vue.use(VueParticles)
    import VueParticles from 'vue-particles'
    export default {
        name: "particles",
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

</style>
