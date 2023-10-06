<template>
    <div class="hero-container">
        <div class="carousel-image" :style="'background-image:url('+imgCarousel[currentSlide].src+')'">
            <!-- <img :src="imgSrc"/> -->
        </div>
        <div :class="{arrow:true, 'right-arrow':true}" @click="SlideLeft">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>
        </div>
        <div :class="{arrow:true, 'left-arrow':true}" @click="SlideRight">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        return {
            imgCarousel: [
                {id:1, src:require('@/assets/hero-pie-1.jpg'), },
                {id:2, src:require('@/assets/hero-pie-2.jpg'), },
                {id:3, src:require('@/assets/hero-cookie.jpg'), },
                {id:4, src:require('@/assets/hero-bread.jpg'), },           
            ],
            currentSlide:0
        }
    },
    methods:{
        SlideLeft(){
            this.currentSlide--;
            if(this.currentSlide<0)
                this.currentSlide=this.imgCarousel.length-1;
        },
        SlideRight(){
            this.currentSlide++;
            if(this.currentSlide>this.imgCarousel.length-1)
                this.currentSlide = 0;
        }
    }
})
</script>

<style scoped>
.hero-container{
    height: 304px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
}
.carousel{
}
.carousel-image{
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: transform 0.5;
}
.arrow{
    z-index: 5;
    position: absolute;
    width: calc(18px*2);
    height: 100%;
    background-color: rgba(80,80,80,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}
.slide-right{
    transform: translateX(100%);
}
.slide-left{
    transform: translateX(-100%)
}
.left-arrow{
    top:0%;
    left:calc(100% - 18px*2)
}
.right-arrow{
    top:0%;
    left:0%
}
</style>