<template>
    <div class="main">
      <SectionDividerComponent class="divider" :text="text1"></SectionDividerComponent>
      <div class="menu-section" id="card-container">
        <MenuNavigation :ParentCards="ParentCards" :isFixed="isFixed"></MenuNavigation>
        <CardContainer :cards="ParentCards" @addItem="AddItem"></CardContainer>
      </div>
      <SectionDividerComponent class="divider" :text="text2"></SectionDividerComponent>
      <HeroComponent class="hero"></HeroComponent>
      <SectionDividerComponent class="divider" :text="text3"></SectionDividerComponent>
      <div class="testimony-storage">
        <TestimoniesContainer class="testimony-1"></TestimoniesContainer>
        <TestimoniesContainer class="testimony-2"></TestimoniesContainer>
      </div>
      <SectionDividerComponent class="divider" :text="text4"></SectionDividerComponent>
    </div>
</template>

<script lang="ts">
import {defineComponent } from 'vue'
import HeroComponent from '@/components/HeroComponent.vue'; 
import CardContainer from '@/components/CardContainer.vue';
import TestimoniesContainer from '@/components/TestimoniesContainer.vue';
import SectionDividerComponent from '@/components/SectionDividerComponent.vue';
import MenuNavigation from '@/components/MenuNavigation.vue';
import { bakeryMenu, orderProduct } from '@/interfaces';
export default defineComponent({
//. University Roman CYR
    data() {
        return {
          text1:"Our Menu.",
          text2:"Who we are.",
          text3:"Our Testimonies and Reviews.",
          text4:"Follow us at @Vu!",
          isFixed: false,
          lightTheme : true,
          };
    },
    methods:{
      AddItem(id:number){
        this.$emit('AddItem', id);
      },
      HandleScroll(){
          let cardContainer= document.getElementById('card-container');
          let domRect = cardContainer?.getBoundingClientRect();
          if(domRect)
          {
            if(domRect.top < 0 && -domRect.top < domRect.height) //726 is the height of one element
                this.isFixed=true;
            else
              this.isFixed=false;
          }
        },
      },
    mounted(){
      window.addEventListener('scroll', this.HandleScroll);

    },
    beforeUnmount(){
      window.removeEventListener('scroll', this.HandleScroll);
    },
    props:{
      previousOrder:{
        type: Array as () => orderProduct[],
        default: null,
      },
      ParentCards: {
        type: Array as () => bakeryMenu[],
        required:true,
        default: null,
      },
    },
    components: { CardContainer, HeroComponent, TestimoniesContainer, SectionDividerComponent, MenuNavigation }
})
</script>

<style scoped>

.main{
  width: 96%;
  position:relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  /* font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */
}
.menu-section{
  --navmenu-height: 100px;
  width:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.divider{
  height: 100px;
  margin-top: 25px;
  margin-bottom: 25px;

  animation-name: fade-in-up;
  animation-duration: 0.75s;
}
.hero{
  border: 2px solid var(--background-color);
  outline: 2px solid var(--primary-color)
}
.testimony-storage{
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  --slide-duration: 60s
}
.testimony-1{
  z-index: 2;
  animation-name: move-right-1;
  animation-duration: var(--slide-duration);
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
.testimony-2{
  animation-name: move-right-2;
  animation-duration: var(--slide-duration);
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
@keyframes move-right-1{
  0%, 100% {transform:translateX(0px)}
  75% {transform: translateX(4800px);opacity: 1;}
  75.01% {opacity: 0;}
  75.02% {transform: translate(-1600px);}
  75.03% {opacity: 1;}

  /*
  50.1% {transform: translateX(-100vw);}
  100%{transform:translateX(0px)} */
}

@keyframes move-right-2{
   0% {transform:translateX(0px)}
  25% {transform: translateX(1600px); opacity: 1;}
  25.01% {opacity: 0;}
  25.02% {transform: translate(-4800px);}
  25.03% {opacity: 1;}

  /*
  100%{transform:translateX(0px)} */

}
@keyframes fade-in-up{
  0%{transform: translateY(-20px);   opacity: 0;}
  100%{transform: translateY(0px); opacity: 1;}
}
@media (max-width:768px) {
    .divider{
      height: 50px;
    } 
    .hero{
      margin-top: 30px;
    }
  }


</style>