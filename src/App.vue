 
<template>
  <div class ="app">
    <div class="ghost-navbar"></div>
    <NavbarComponent :navState="navState" @themeChanged="changeTheme"></NavbarComponent>
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
    data() {
      return {
        navState: 'Home',
        lightTheme: true,
        };
    },
    methods:{
      changeTheme(){
        const element = document.querySelector(':root') as HTMLElement;
            this.lightTheme = !this.lightTheme;
            if(this.lightTheme){
                element.style.setProperty('--background-color',"rgb(241, 252, 162)")
                element.style.setProperty('--primary-color',"#000f0b")
                element.style.setProperty('--primary-font-color', "#000f0b");
                element.style.setProperty('--primary-halfopacity',"rgba(241, 252, 162, 0.5)");
            }
            else{
                element.style.setProperty('--background-color',"#000f0b");
                element.style.setProperty('--primary-color',"rgb(241, 252, 162)");
                element.style.setProperty('--primary-font-color', "rgb(241, 252, 162)");
                element.style.setProperty('--primary-halfopacity',"rgba(0, 15, 11, 0.5)");
            }
      }
    },
    components:{ MainView, NavbarComponent, FooterComponent }
})
</script>
<style scoped>
.app{
  display: flex;
  flex-direction: column;
  --navbar-height:144px;
  background-color: var(--background-color);
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