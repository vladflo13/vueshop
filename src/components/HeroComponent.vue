<template>
    <div class="hero-container">
        <div class="carousel-wrapper">
            <CarouselComponent></CarouselComponent>
        </div>
        <div class="call-to-action">
                <div class="h1-wrapper">
                    <h1>Our wonderful bread!</h1>
                </div>
                <div class="h2-wrapper">
                    <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                </div>
                <div class="p-wrapper">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium recusandae porro, quo sequi soluta fugiat quae harum vitae cupiditate necessitatibus tenetur quas commodi voluptatum tempora debitis ipsum voluptates impedit eaque?</p>
                </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CarouselComponent from './CarouselComponent.vue';

export default defineComponent({
    components: { CarouselComponent }
})
</script>

<style scoped>
.hero-container{
    height: 80vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
}
.carousel-wrapper{
    position: relative;
    width: 67%;
}
.call-to-action{
    position:relative; 
    z-index: 2;
    width: 33%;
    height: 100%;

    background-color: var(--background-color);
}

/* 
    50% 
    26% 
*/
.h1-wrapper{
    position:absolute;
    z-index: 3;
    top: 33%;
    left: 12%;
    padding-top:2%;
    padding-bottom:2%;
    padding-left:5px;
    width: 66%;
    background-color: var(--primary-color);
    color:var(--primary-font-color);

}
.h2-wrapper{
    
    position: absolute;
    z-index: 2;
    top:38%;
    left:24%;
    padding-top:4%;
    padding-left:5px;
    width: 66%;

    background-color: var(--secondary-color);
    color:var(--primary-font-color);

}
.p-wrapper{
    position: absolute;
    z-index:1;

    top:48%;
    left:33%;
    padding-top:4%;
    padding-left:5px;
    width: 66%;
    height:40%;
}
@media (max-height: 768px)
{
    .hero-container{
        height: 160vh;
        flex-direction: column;
    }
    .call-to-action{
        width: 100%;
        height: 50%;
    }
    .carousel-wrapper{
        width: 100%;
        height: 50%;
    }
}
</style>