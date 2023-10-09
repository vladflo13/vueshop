 
<template>
  <div class ="app">
    <NavbarComponent :navState="navState"></NavbarComponent>
    <MainView v-if="navState==='Home'"></MainView>
    <!-- <ShopView v-if="navState==='Shop'"></ShopView> -->
    <!-- <AccountView v-if="navState==='Home'"></AccountView> -->

    <FooterComponent></FooterComponent>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import MainView from './views/MainView.vue';
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
export default defineComponent({
    setup() {
      return {
        navState: 'Home',
        };
    },
    components:{ MainView, NavbarComponent, FooterComponent }
})
</script>
<style scoped>
.app{
  position: relative;
  display: flex;
  flex-direction: row;

  --navbar-height:144px;

}
@media (max-width:768px){
  .app{
    height: 1440px;
    --navbar-height:72px;
}
}
</style>