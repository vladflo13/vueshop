<template>
    <div class="hero-container">
        <ul class="carousel">
            <li 
             v-for="image in imgCarousel" 
            :key="image.id"
            :class="{ 'carousel-slide': true, 
            'selected-slide':(currentSlide===image.id)}">
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
            slides:['Slide 1', 'Slide 2', 'Slide 3', 'Slide 4'],
            currentSlide:1,
            prevSlide: 4,
            nextSlide:2,
            slidingDir:0,
        }
    },
    methods:{
        SlideLeft(){
            this.currentSlide--;
            if(this.currentSlide <= 0)
                this.currentSlide=this.imgCarousel.length;
            console.log(this.currentSlide);
        },
        SlideRight(){
            this.currentSlide++;
            if(this.currentSlide>this.imgCarousel.length)
                this.currentSlide = 1;
            console.log(this.currentSlide);
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
}
.carousel{
    height: 70vh;
    display: flex;
    flex-direction: row;
}
.carousel-slide{
    height: 100%;
    width: 0;
    transition: width 1s ease;
}
.selected-slide{
    width: 100vw;
    transition: width 1s ease;
}
.carousel-slide > img{
    object-fit:cover;
    height: 100%;
    width: 100%;
}
.arrow{
    position: absolute;
    top: calc(50% - var(--arrow-width));
    z-index: 1;
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
.slide-right{
    transform: translateX(100%);
}
.slide-left{
    transform: translateX(-100%);
}
</style>