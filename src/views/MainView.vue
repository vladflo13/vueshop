<template>
    <div class="main">
      <SectionDividerComponent class="divider" :text="text1"></SectionDividerComponent>
      <div class="menu-section" id="card-container">
        <MenuNavigation :cards="ParentCards" :isFixed="isFixed"></MenuNavigation>
        <CardContainer  :cards="ParentCards"></CardContainer>
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
          lightTheme : true,
          ParentCards:[
                {
                    id:1,
                    src: require('@/assets/bread.jpg'),
                    text : 'Bread',
                    childCards:[
                        {id:1, title:"baguette", text:'', src:require('@/assets/baguette-460x328.jpg')},
                        {id:2, title:"ciabatta", text:'', src:require('@/assets/ciabatta-460x328.jpg')},
                        {id:3, title:"cranberry", text:'', src:require('@/assets/cranberry-460x328.jpg')},
                        {id:4, title:"levain", text:'', src:require('@/assets/levain-460x328.jpg')},
                        {id:5, title:"multigrain", text:'', src:require('@/assets/multigrain-460x328.jpg')},
                        {id:6, title:"olive", text:'', src:require('@/assets/olive-460x328.jpg')},
                        {id:7, title:"rolls", text:'', src:require('@/assets/rolls-460x328.jpg')},
                        {id:8, title:"seigle", text:'', src:require('@/assets/seigle-460x328.jpg')},
                        {id:9, title:"walnut", text:'', src:require('@/assets/walnut-460x328.jpg')},
                    ] as imgObject[],
                    isExpanded: false,
                },
                {
                    id:2,
                    src: 'https://picsum.photos/id/1080/600/400',
                    text : 'Cookies',
                    childCards:[
                        {id:1, image:require('@/assets/baguette-460x328.jpg')},
                        {id:2, image:require('@/assets/ciabatta-460x328.jpg')},
                        {id:3, image:require('@/assets/cranberry-460x328.jpg')},
                        {id:4, image:require('@/assets/levain-460x328.jpg')},
                        {id:5, image:require('@/assets/multigrain-460x328.jpg')},
                        {id:6, image:require('@/assets/olive-460x328.jpg')},
                        {id:7, image:require('@/assets/rolls-460x328.jpg')},
                        {id:8, image:require('@/assets/seigle-460x328.jpg')},
                        {id:9, image:require('@/assets/walnut-460x328.jpg')},
                    ],
                    isExpanded: false,
                    },
                {
                    id:3,
                    src: 'https://picsum.photos/id/1080/600/400',
                    text : 'Tarts',
                    childCards:[
                        {id:1, image:require('@/assets/baguette-460x328.jpg')},
                        {id:2, image:require('@/assets/ciabatta-460x328.jpg')},
                        {id:3, image:require('@/assets/cranberry-460x328.jpg')},
                        {id:4, image:require('@/assets/levain-460x328.jpg')},
                        {id:5, image:require('@/assets/multigrain-460x328.jpg')},
                        {id:6, image:require('@/assets/olive-460x328.jpg')},
                        {id:7, image:require('@/assets/rolls-460x328.jpg')},
                        {id:8, image:require('@/assets/seigle-460x328.jpg')},
                        {id:9, image:require('@/assets/walnut-460x328.jpg')},
                    ],
                    isExpanded: false,
                    },
                {
                    id:4,
                    src: 'https://picsum.photos/id/1080/600/400',
                    text : 'Quiche',
                    childCards:[
                        {id:1, image:require('@/assets/baguette-460x328.jpg')},
                        {id:2, image:require('@/assets/ciabatta-460x328.jpg')},
                        {id:3, image:require('@/assets/cranberry-460x328.jpg')},
                        {id:4, image:require('@/assets/levain-460x328.jpg')},
                        {id:5, image:require('@/assets/multigrain-460x328.jpg')},
                        {id:6, image:require('@/assets/olive-460x328.jpg')},
                        {id:7, image:require('@/assets/rolls-460x328.jpg')},
                        {id:8, image:require('@/assets/seigle-460x328.jpg')},
                        {id:9, image:require('@/assets/walnut-460x328.jpg')},
                        ],
                    isExpanded: false,
                    }
            ] as cardObject[],
          lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam consequuntur provident voluptate? Itaque ipsum excepturi quidem animi provident suscipit aspernatur, perspiciatis autem sapiente doloremque aut voluptate, hic dolores error!",
        };
    },
    created(){
        if(this.ParentCards)
            for (let i = 0; i < this.ParentCards[0].childCards.length;i++)
                  this.ParentCards[0].childCards[i].text = this.lorem
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
  animation-name: fade-in-up;
  animation-duration: 0.75s;
}
@keyframes fade-in-up{
  0%{transform: translateY(-20px);   opacity: 0;}
  100%{transform: translateY(0p); opacity: 1;}
}



</style>