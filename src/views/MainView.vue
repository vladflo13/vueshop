<template>
    <div class="main">
      <SectionDividerComponent class="menu-divider" :text="text1"></SectionDividerComponent>
      <CardContainer></CardContainer>
      <SectionDividerComponent :text="text2"></SectionDividerComponent>
      <HeroComponent></HeroComponent>
      <SectionDividerComponent :text="text3"></SectionDividerComponent>
      <TestimoniesContainer></TestimoniesContainer>
      <SectionDividerComponent :text="text4"></SectionDividerComponent>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeroComponent from '@/components/HeroComponent.vue'; 
import CardContainer from '@/components/CardContainer.vue';
import TestimoniesContainer from '@/components/TestimoniesContainer.vue';
import SectionDividerComponent from '@/components/SectionDividerComponent.vue';
export default defineComponent({
//. University Roman CYR
    data() {
        return {
          text1:"What would you like to eat today?",
          text2:"Who are we ? What do we do ?",
          text3:"Our Testimonies and Reviews",
          text4:"Follow us at @Vu!",
          lightTheme : true,
        };
    },
    methods:{
     
    },
    components: { CardContainer, HeroComponent, TestimoniesContainer, SectionDividerComponent}
})
</script>

<style scoped>

.main{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
}

.menu-divider{
  animation-name: fade-in-up;
  animation-duration: 0.75s;
}
@keyframes fade-in-up{
  0%{transform: translateY(-20px);   opacity: 0;}
  100%{transform: translateY(0p); opacity: 1;}
}



</style>