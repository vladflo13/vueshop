<template>
    <div class="hero-container">
        <div class="carousel-wrapper">
            <CarouselComponent></CarouselComponent>
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
    height: 70vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: row;
    overflow-x: hidden;
}
.carousel-wrapper{
    width: 66%;
}
</style>