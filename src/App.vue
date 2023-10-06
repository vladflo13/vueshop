 
<template>
  <div class ="app">
    <NavbarComponent></NavbarComponent>
    <!-- <PaginationComponent></PaginationComponent> -->
    <HeroComponent></HeroComponent>
    <CardContainer></CardContainer>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import NavbarComponent from './components/NavbarComponent.vue';
import CardContainer from './components/CardContainer.vue';
import HeroComponent from './components/HeroComponent.vue';
import PaginationComponent from './components/PaginationComponent.vue';

export default defineComponent({
    setup() {
      return {
        };
    },//PaginationComponent
    components: { NavbarComponent, CardContainer, HeroComponent,  }

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
@media (max-width:768px){
  .app{
    height: 1440px;
}
}
</style>