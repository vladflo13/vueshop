 
<template>
  <div class="app">
    <div class="ghost-navbar"></div>
    <NavbarComponent :previousOrder="order" @changeOrderOpen="ChangeOrderItem" :numberItems="numberItems" @themeChanged="ChangeTheme" :isFixed="menuNavIsFixed"></NavbarComponent>
    <Transition name="fade-in">
      <OrderComponent v-if="orderOpened" @current-order="UpdateOrder" @closed-item="CloseProduct" @new-input="ChangeInput" :propTotal="total" @order-closed="CloseOrder" :order="order"></OrderComponent>
    </Transition>
    <router-view @AddItem="AddItem" :ParentCards="ParentCards" :card="GetCard()"></router-view>
    <!-- <ProductPageView v-if="$route.params.id"></ProductPageView> -->

    <FooterComponent></FooterComponent>
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import OrderComponent from './components/OrderComponent.vue';

import {orderProduct, product, productDTO, bakeryMenu } from './interfaces';
export default defineComponent({
    data() {
      return {
        lightTheme: true,
        menuNavIsFixed: false,
        numberItems:0,
        total:0,

        orderOpened: false,
        hasOrderOpenedOnce: false,

        fetchedProducts:[] as productDTO[],
        bread:[] as product[],
        cookies:[] as product[],
        tarts:[] as product[],
        quiche:[] as product[],

        ParentCards:[] as bakeryMenu[],
        ProductList:[] as product[],
        order: [] as orderProduct[],
        };
    },
    async created(){
      try{
        const products = await this.fetchProductList();
        for (let i = 0; i < products.length; i++)
        {
          if(i>=0 && i<=8)
          {
            let product:product={
              id:products[i].productId,
              title:products[i].name,
              text:products[i].description,
              src:require('@/assets/productImgSrc/' + products[i].imgSrc),
              price:products[i].price,
            };
            this.bread.push(product)
          }
          if(i >= 9 && i<=13){
            let product:product={
              id:products[i].productId,
              title:products[i].name,
              text:products[i].description,
              src:require('@/assets/productImgSrc/' + products[i].imgSrc),
              price:products[i].price,

            };
            this.cookies.push(product);
          }
          if(i >= 14 && i<=16){
            let product:product={
              id:products[i].productId,
              title:products[i].name,
              text:products[i].description,
              src:require('@/assets/productImgSrc/' + products[i].imgSrc),
              price:products[i].price,
            };
            this.tarts.push(product);
          }
          if(i >= 17 && i<=26){
            let product:product={
              id:products[i].productId,
              title:products[i].name,
              text:products[i].description,
              src:require('@/assets/productImgSrc/' + products[i].imgSrc),
              price:products[i].price,
            };
            this.quiche.push(product);
          }
        }
        this.ParentCards = [
          {
            id:1,
            text:'Bread',
            src:'@/assets/bread.jpg',
            childCards:this.bread,
          },
          {
            id:2,
            text:'Cookies',
            src:'@/assets/cookies.jpg',
            childCards:this.cookies,
          },
          {
            id:4,
            text:'Quiche',
            src:'@/assets/quiche.webp',
            childCards:this.quiche,
          },
          {
            id:3,
            text:'Tarts',
            src:'@/assets/tarts.webp',
            childCards:this.tarts,
          }
        ]
          this.ProductList.push(...this.bread);
          this.ProductList.push(...this.cookies);
          this.ProductList.push(...this.quiche);
          this.ProductList.push(...this.tarts);
        }
      catch(error){
        console.error('Error fetching Product List');
      }
    },
    methods:{
      async fetchProductList(){
          const apiLocation = 'https://localhost:7018/api/Product';
          try{
            const response = await fetch(apiLocation);
            if(response.ok){
              this.fetchedProducts = await response.json();
            }
            else
              console.error('Failed to fetch products');
            }
          catch (error){
            console.error('Error fetching data', error);
          }

          return this.fetchedProducts;
      },
      ChangeTheme(){
        const element = document.querySelector(':root') as HTMLElement;
            this.lightTheme = !this.lightTheme;
            if(this.lightTheme){
                element.style.setProperty('--background-color',"#f0d7a7");
                element.style.setProperty('--primary-color',"#894e3f");
            }
            else{
                element.style.setProperty('--background-color',"#894e3f");
                element.style.setProperty('--primary-color',"#f0d7a7");
            }
      },
      AddItem(id: number){
        var _id = id - 1;

        const orderItem : orderProduct = {
          id:this.fetchedProducts[_id].productId,
          title:this.fetchedProducts[_id].name,
          price:this.fetchedProducts[_id].price,
          text:this.fetchedProducts[_id].description,
          src:require('@/assets/productImgSrc/' + this.fetchedProducts[_id].imgSrc),
          numberProducts: 1,
        };

        const foundIndex = this.order.findIndex(item=> item.id===orderItem.id);
        if(foundIndex != -1)
            this.order[foundIndex].numberProducts++;
        else
          this.order.push(orderItem);

        this.numberItems = 0;
        this.order.forEach(element => {
          this.numberItems += element.numberProducts;
        });

        if(!this.hasOrderOpenedOnce)
        {
          this.hasOrderOpenedOnce = true;
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
      UpdateOrder(order:orderProduct[]){
        this.order = order;
        this.AddTotal();
        this.numberItems = 0;
        order.forEach(element => {
          this.numberItems+=element.numberProducts;
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
          this.order.splice(indexRemove, 1);
        else
          console.error('Item not found');
        this.numberItems = 0;
        this.order.forEach(element => {
          this.numberItems+=element.numberProducts;
        }); 
      },
      GetCard(){
        let id = (Number) (this.$route.params.id);
        let index = this.ProductList.findIndex( i => i.id === id)
        return this.ProductList[index];
        }
    
  },
    components:{ NavbarComponent, FooterComponent, OrderComponent }
})
</script>
<style>
.app{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  --navbar-height:120px;
  background-color: var(--background-color);
}
:root{

--primary-color:#894e3f;    
--background-color: #f0d7a7;
--color-a:#f0d7a7;
--color-b: #894e3f	;

color:var(--primary-color);


}
@font-face {
font-family: 'garamond';
src: url('../src/assets//fonts/CormorantGaramond-Regular.ttf');
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  box-sizing:border-box;
}

.app{

color:var(--primary-font-color);
box-sizing: border-box;
font-family: 'garamond', sans-serif;
}
  .app button{
  border: 0px;
  background-color: transparent;
  cursor: pointer;
  font: inherit;

  color:var(--primary-font-color);

}
ul {
list-style: none;
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