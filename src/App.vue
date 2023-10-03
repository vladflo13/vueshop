 
<template>
  <div class ="app">
    <NavbarComponent></NavbarComponent>
    <HeroComponent></HeroComponent>
    <CardContainer></CardContainer>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import NavbarComponent from './components/NavbarComponent.vue';
import CardContainer from './components/CardContainer.vue';
import HeroComponent from './components/HeroComponent.vue';

export default defineComponent({
    setup() {
      return {
        };
    },
    components: { NavbarComponent, CardContainer, HeroComponent }

})
</script>
<style scoped>
.app{
  width: 100%; 
  height:  100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;
  background-color: var(--background-color);
  /* font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
}
@media (max-width:768px){
  .app{
    height: 1440px;
}
}
</style>