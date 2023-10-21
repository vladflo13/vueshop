<template>
    <div class="card-container">
        <CardComponent v-for="card in ParentCards" :key="card.id" 
        :card="card"
        :class="{'item':true,'expanded-item': card.isExpanded}"
        @childExpanded="expandChild(card.id - 1)"></CardComponent>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardComponent from './CardComponent.vue';
import { imgObject, cardObject } from '../interfaces';
export default defineComponent({
    data() {
        return {
            lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam veniam consequuntur provident voluptate? Itaque ipsum excepturi quidem animi provident suscipit aspernatur, perspiciatis autem sapiente doloremque aut voluptate, hic dolores error!",
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
        };
    },
    created(){
        for (let i = 0; i < this.ParentCards[0].childCards.length;i++)
            this.ParentCards[0].childCards[i].text = this.lorem;
    },
    methods:{
        expandChild(id:number){
            this.ParentCards[id].isExpanded = !this.ParentCards[id].isExpanded;
        }
    },
    components: { CardComponent }
})
</script>

<style scoped>
.card-container{
    --expandTiming: 0.5s;
    --elementHeight: 400px;
    --elementWidth: 600px;
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;

}

.item{
    height: var(--elementHeight);
    transition: height var(--expandTiming) ease;
}
.expanded-item{
    height: calc(var(--elementHeight) * 2);
    transition: height var(--expandTiming) ease;
}
@media (max-width:768px){
    .card-container{
        --elementHeight: 200px;
        grid-template-columns: 1fr;
    }

}
</style>