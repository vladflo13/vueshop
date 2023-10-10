<template>
    <div class="main">
        <!-- <PaginationComponent></PaginationComponent> -->
        <HeroComponent></HeroComponent>
        <div class="call-to-action">Check out our selection!</div>
        <CardContainer></CardContainer>
        <div class="call-to-action">Our Testimonies and Reviews</div>
        <TestimoniesContainer></TestimoniesContainer>
        <div class="call-to-action">Follow us at @Vu!</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeroComponent from '@/components/HeroComponent.vue'; 
import CardContainer from '@/components/CardContainer.vue';
import TestimoniesContainer from '@/components/TestimoniesContainer.vue';
export default defineComponent({
    setup() {
        return {};
    },
    components: { CardContainer, HeroComponent, TestimoniesContainer,}
})
</script>

<style scoped>

.main{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:10px;

  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
.call-to-action{
  height: 180px;
  font-size:xx-large;
  display: flex;
  align-items: center;
}



</style>