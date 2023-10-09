<template>
    <div class="hero-container">
        <ul class="carousel">
            <li 
             v-for="image in imgCarousel" 
            :key="image.id"
            :class="{ 'carousel-slide': true, 
            'neutral':(currentSlide===image.id && direction===0),
            'selected-slide-right':(currentSlide===image.id && direction===1),
            'prev-slide':(prevSlide===image.id && direction===1),
            'selected-slide-left': (currentSlide===image.id && direction===-1),
            'next-slide':(prevSlide===image.id && direction===-1),
}">
                <img :src="image.src"/> 
            </li>
        </ul>
        <button :class="{arrow:true, 'right-arrow':true}" @click="SlideLeft">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160zm352-160l-160 160c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L301.3 256 438.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0z"/></svg>
        </button>
        <button :class="{arrow:true, 'left-arrow':true}" @click="SlideRight">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M470.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 256 265.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160zm-352 160l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L210.7 256 73.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0z"/></svg>
        </button>
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
            currentSlide:1,
            prevSlide: 0,
            direction: 0, // 0 neutral 1 right to left -1 left to right
        }
    },
    methods:{
        SlideLeft(){
            this.prevSlide = this.currentSlide;
            this.currentSlide--;
            if(this.currentSlide <= 0)
                this.currentSlide=this.imgCarousel.length;
            this.direction = 1;
            },
        SlideRight(){
            this.prevSlide = this.currentSlide;
            this.currentSlide++;
            if(this.currentSlide>this.imgCarousel.length)
                this.currentSlide = 1;
            this.direction = -1;
        }
    }
})
</script>

<style scoped>
.hero-container{
    --arrow-width:64px;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
}
.carousel{
    height: 70vh;
    display: flex;
    flex-direction: row;
}
.carousel-slide{
    position: absolute;
    height: 100%;
    width: 0;
}
.neutral{
    width: 100vw;
}
.selected-slide-left{
    z-index: 2;
    width: 100vw;
    animation-name: slide-left-curr;
    animation-duration: 1s;
}
.selected-slide-right{
    z-index: 2;
    width: 100vw;
    animation-name: slide-right-curr;
    animation-duration: 1s;
}
.prev-slide{
    z-index: 1;
    width: 100vw;
    animation-name:slide-left-prev;
    animation-duration: 1s;
}
/* .next-slide{
    z-index: 1;
    width: 100vw;
    animation-name:slide-right-prev;
    animation-duration: 1s;
} */
@keyframes slide-left-prev{
    0% {transform:translateX(0)}
    100% {transform:translateX(-100vw);}
}
/* @keyframes slide-right-prev{
    0%{transform:translateX(0)}
    100% {transform:translateX(100vw)}
} */
@keyframes slide-left-curr{
    0% {transform:translateX(100vw);}
    100% {transform:translateX(0vw);}
}
/* @keyframes slide-right-curr{
    0% {transform:translateX(-100vw);}
    100% {transform:translateX(0vw)}
} */

.carousel-slide > img{
    object-fit:cover;
    height: 100%;
    width: 100%;
}
.arrow{
    position: absolute;
    top: calc(50% - var(--arrow-width));
    z-index: 3;
    width:var(--arrow-width);
    background-color: rgba(0,0,0,0.4);
    border:0px;
}
.arrow:hover{
    background-color: rgba(20,20,20,0.5);
}
.arrow > svg{
    cursor: pointer;
}
.left-arrow{
    left:calc(100% - var(--arrow-width));
}
.right-arrow{
    left:0%;
}
</style>