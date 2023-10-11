 
<template>
  <div class ="app">
    <div class="ghost-navbar"></div>
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
  display: flex;
  flex-direction: column;
  --navbar-height:144px;

}
.ghost-navbar{
  width: 100%;
  height: var(--navbar-height);
}
@media (max-width:768px){
  .app{
    --navbar-height:72px;
  }
  .ghost-navbar{
  width: 100%;
}
}
</style>