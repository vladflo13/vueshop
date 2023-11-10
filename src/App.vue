 
<template>
  <div class ="app">
    <div class="ghost-navbar"></div>
    <NavbarComponent :navState="navState" @changeOrderOpen="ChangeOrderItem" :numberItems="numberItems" @themeChanged="ChangeTheme" :isFixed="menuNavIsFixed"></NavbarComponent>
    <Transition name="fade-in">
      <OrderComponent v-if="orderOpened" @closed-item="CloseProduct" @new-input="ChangeInput" :propTotal="total" @order-closed="CloseOrder" :order="order"></OrderComponent>
    </Transition>
    <MainView v-if="navState==='Home'" :isFixed="menuNavIsFixed" @addItem="addItem"></MainView>
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
import OrderComponent from './components/OrderComponent.vue';

import { imgObject, orderProduct } from './interfaces';
export default defineComponent({
    data() {
      return {
        navState: 'Home',
        lightTheme: true,
        menuNavIsFixed: false,
        numberItems:0,
        order: [] as orderProduct[],
        orderOpened: false,
        hasOpenedOnce: false,
        total:0,
        };
    },
    methods:{
      HandleScroll(){
        let cardContainer= document.getElementById('card-container');
        let domRect = cardContainer?.getBoundingClientRect();
        if(domRect)
        {
          if(domRect.top < 0 && -domRect.top < domRect.height) //726 is the height of one element
              this.menuNavIsFixed=true;
          else
            this.menuNavIsFixed=false;
        }
        
      },
      ChangeTheme(){
        const element = document.querySelector(':root') as HTMLElement;
            this.lightTheme = !this.lightTheme;
            if(this.lightTheme){
                element.style.setProperty('--background-color',"#f0d7a7")
                element.style.setProperty('--primary-color',"#894e3f")
                element.style.setProperty('--primary-font-color', "#894e3f");
                element.style.setProperty('--primary-halfopacity',"#894e3f80");
            }
            else{
                element.style.setProperty('--background-color',"#894e3f");
                element.style.setProperty('--primary-color',"#f0d7a7");
                element.style.setProperty('--primary-font-color', "#f0d7a7");
                element.style.setProperty('--primary-halfopacity',"#f0d7a780");
            }
      },
      addItem(order:orderProduct[]){
        this.order = order;
        this.numberItems = 0;
        this.order.forEach(element => {
          this.numberItems+=element.numberProducts;
        });
        if(!this.hasOpenedOnce)
        {
          this.hasOpenedOnce = true;
          this.orderOpened = true;
        }
        this.AddTotal();
      },
      ChangeOrderItem(){
        this.orderOpened = !this.orderOpened;
      },
      CloseOrder(){
        this.orderOpened=false;
      },
      AddTotal(){
        this.total = 0;
        this.order.forEach(element => {
            element.price? this.total+=element.price * element.numberProducts: null;
        });
    },
    ChangeInput(inputValue:number, id:number)
    {     
      this.order.forEach(
            element=>{
                if(element.id == id)
                  element.numberProducts=Number(inputValue);
              }
        )
    },
    CloseProduct(id: number){
      const indexRemove = this.order.findIndex(item=> item.id == id)
      if(indexRemove !=-1)
        this.order.splice(indexRemove,1);
      else
        console.log('item not found');  
    }
  },
    
    mounted(){
      window.addEventListener('scroll', this.HandleScroll);
    },
    beforeUnmount(){
      window.removeEventListener('scroll', this.HandleScroll);
    },
    components:{ MainView, NavbarComponent, FooterComponent, OrderComponent }
})
</script>
<style scoped>
.app{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  --navbar-height:120px;
  background-color: var(--background-color);
}
.ghost-navbar{
  width: 100%;
  height: var(--navbar-height);
  pointer-events: none;
}
.fade-in-enter-to, .fade-in-leave-from{
  transition: opacity 0.3s ease;
}
.fade-in-enter-from, .fade-in-leave-to{
  opacity: 0;
  transition: opacity 0.3s ease;
}
@media (max-width:768px){
  .app{
    --navbar-height:50px;
  }
  .ghost-navbar{
  width: 100%;
}
}
</style>