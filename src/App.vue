 
<template>
  <div class ="app">
    <NavbarComponent></NavbarComponent>
    <!-- <PaginationComponent></PaginationComponent> -->
    <div class="break-space"></div>
    <HeroComponent></HeroComponent>
    <div class="call-to-action">Check out our selection!</div>
    <CardContainer></CardContainer>
    <div class="call-to-action">Our Testimonies and Reviews</div>
    <TestimoniesContainer></TestimoniesContainer>
    <div class="call-to-action">Follow us at @Vu!</div>
    <FooterComponent></FooterComponent>

  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import NavbarComponent from './components/NavbarComponent.vue';
import CardContainer from './components/CardContainer.vue';
import HeroComponent from './components/HeroComponent.vue';
import PaginationComponent from './components/PaginationComponent.vue';
import TestimoniesContainer from './components/TestimoniesContainer.vue';
import FooterComponent from './components/FooterComponent.vue';

export default defineComponent({
    setup() {
      return {
        };
    },//PaginationComponent
    components: { NavbarComponent, CardContainer, HeroComponent, TestimoniesContainer, FooterComponent }

})
</script>
<style scoped>
.app{
  position: absolute;
  top: 76px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap:10px;

  background-color: var(--background-color);
  /* font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
}
.call-to-action{
  height: 180px;
  font-size:xx-large;
  display: flex;
  align-items: center;
}
@media (max-width:768px){
  .app{
    height: 1440px;
}
}
</style>