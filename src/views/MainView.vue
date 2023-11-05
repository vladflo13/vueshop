<template>
    <div class="main">
      <SectionDividerComponent class="divider" :text="text1"></SectionDividerComponent>
      <div class="menu-section" id="card-container">
        <MenuNavigation :cards="ParentCards" :isFixed="isFixed"></MenuNavigation>
        <CardContainer  :cards="ParentCards" @addItem="addItem"></CardContainer>
      </div>
      <SectionDividerComponent class="divider" :text="text2"></SectionDividerComponent>
      <HeroComponent></HeroComponent>
      <SectionDividerComponent class="divider" :text="text3"></SectionDividerComponent>
      <TestimoniesContainer></TestimoniesContainer>
      <SectionDividerComponent class="divider" :text="text4"></SectionDividerComponent>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HeroComponent from '@/components/HeroComponent.vue'; 
import CardContainer from '@/components/CardContainer.vue';
import TestimoniesContainer from '@/components/TestimoniesContainer.vue';
import SectionDividerComponent from '@/components/SectionDividerComponent.vue';
import MenuNavigation from '@/components/MenuNavigation.vue';
import { cardObject, imgObject } from '@/interfaces';
export default defineComponent({
//. University Roman CYR
    data() {
        return {
          text1:"Our Menu",
          text2:"Who are we ? What do we do ?",
          text3:"Our Testimonies and Reviews",
          text4:"Follow us at @Vu!",
          cookies:[] as imgObject[],
          bread:[] as imgObject[],
          tarts:[] as imgObject[],
          quiche:[] as imgObject[],
          lightTheme : true,
          ParentCards:[
                {
                    id:1,
                    src: require('@/assets/bread.jpg'),
                    text : 'Bread',
                    childCards:[] as imgObject[],
                    isExpanded: false,
                },
                {
                    id:2,
                    src: 'https://picsum.photos/id/1080/600/400',
                    text : 'Cookies',
                    childCards: [] as imgObject[],
                    isExpanded: false,
                    },
                {
                    id:3,
                    src: 'https://picsum.photos/id/1080/600/400',
                    text : 'Tarts',
                    childCards:[] as imgObject[],

                    isExpanded: false,
                    },
                {
                    id:4,
                    src: 'https://picsum.photos/id/1080/600/400',
                    text : 'Quiche',
                    childCards:[] as imgObject[],

                    isExpanded: false,
                    }
            ] as cardObject[],
          };
    },
    methods:{
      async fetchProductList(){
          const apiLocation = 'https://localhost:7018/api/Product';
          var products;
          try{
            const response = await fetch(apiLocation);
            if(response.ok){
              products = response.json();
            }
            else
              console.error('Failed to fetch products');
            }
          catch (error){
            console.error('Error fetching data', error);
          }
          return products;
      },
      addItem(id:number){
        this.$emit('addItem', id)
      }
    },
    async created(){
      try{
      const products = await this.fetchProductList();
      const path = '@/assets/productImgSrc/'
      for (let i = 0; i < products.length; i++)
      {
        if(i>=0 && i<=9)
        {
          let imgobj:imgObject={
            id:products[i].productId,
            title:products[i].name,
            text:products[i].description,
            src:require('@/assets/productImgSrc/' + products[i].imgSrc)
          };
          this.bread.push(imgobj)
        }
        if(i >= 10 && i<=13){
          let imgobj:imgObject={
            id:products[i].productId,
            title:products[i].name,
            text:products[i].description,
            src:require('@/assets/productImgSrc/' + products[i].imgSrc)
          };
          this.cookies.push(imgobj);
        }
        if(i >= 14 && i<=16){
          let imgobj:imgObject={
            id:products[i].productId,
            title:products[i].name,
            text:products[i].description,
            src:require('@/assets/productImgSrc/' + products[i].imgSrc)
          };
          this.tarts.push(imgobj);
        }
        if(i >= 17 && i<=27){
          let imgobj:imgObject={
            id:products[i].productId,
            title:products[i].name,
            text:products[i].description,
            src:require('@/assets/productImgSrc/' + products[i].imgSrc)
          };
          this.quiche.push(imgobj);
        }
      }
      this.ParentCards[0].childCards = this.bread;
      this.ParentCards[1].childCards = this.cookies;
      this.ParentCards[2].childCards = this.tarts;
      this.ParentCards[3].childCards = this.quiche;
      }
      catch(error){
        console.error('Error fetching Product List');
      }
    },
    props:{
      isFixed:{
        type:Boolean,
        default: false,
      }
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
@keyframes fade-in-up{
  0%{transform: translateY(-20px);   opacity: 0;}
  100%{transform: translateY(0p); opacity: 1;}
}
@media (max-width:768px) {
    .divider{
      height: 50px;
    } 
}


</style>