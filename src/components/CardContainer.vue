<template>
    <div class="card-container">
        <CardComponent :class="{'item':true,'expanded-item':isExpanded && card.id === expandId}" :key="card.id" 
        v-for="(card, index) in ParentCards" :imgSrc="card.image" 
        :cardText="card.text" :childCards="(card.ChildCards as imgObject[])" @childExpanded="expandChild(index)"></CardComponent>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardComponent from './CardComponent.vue';
import { imgObject } from './imgObject';
export default defineComponent({
    data() {
        return {
            ParentCards:[
                {
                    id:1,
                    image: require('@/assets/bread.jpg'),
                    text : 'Bread',
                    ChildCards:[//-460x328.jpg
                        {id:1, src:require('@/assets/baguette-460x328.jpg')},
                        {id:2, src:require('@/assets/ciabatta-460x328.jpg')},
                        {id:3, src:require('@/assets/cranberry-460x328.jpg')},
                        {id:4, src:require('@/assets/levain-460x328.jpg')},
                        {id:5, src:require('@/assets/multigrain-460x328.jpg')},
                        {id:6, src:require('@/assets/olive-460x328.jpg')},
                        {id:7, src:require('@/assets/rolls-460x328.jpg')},
                        {id:8, src:require('@/assets/seigle-460x328.jpg')},
                        {id:9, src:require('@/assets/walnut-460x328.jpg')},
                    ] as imgObject[],
                    isExpanded: false,
                },
                {
                    id:2,
                    image: 'https://picsum.photos/id/1080/600/400',
                    text : 'Cookies',
                    ChildCards:[//-460x328.jpg
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
                    image: 'https://picsum.photos/id/1080/600/400',
                    text : 'Tarts',
                    ChildCards:[//-460x328.jpg
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
                    image: 'https://picsum.photos/id/1080/600/400',
                    text : 'Quiche',
                    ChildCards:[//-460x328.jpg
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
            ],
            isExpanded:false,
            expandId:-1,
        };
    },
    methods:{
        expandChild(id:number){
            this.ParentCards[id].isExpanded = !this.ParentCards[id].isExpanded;
            id++;
            if(!this.isExpanded){
            this.isExpanded=true;
            this.expandId = id;
            }
            else{
                if(this.expandId === id)
                {this.isExpanded = false;
                this.expandId = -1;}
                else
                {
                    this.expandId = id;
                }
            }
        }
    },
    components: { CardComponent }
})
</script>

<style scoped>
.card-container{
    --expandTiming: 0.5s;
    --elementHeight: 320px;
    position: relative;
    width: 100%;
    display: grid;
    gap: 4px;
    grid-template-columns: 1fr 1fr;
}

.item{
    height: var(--elementHeight);
    transition: height var(--expandTiming) ease;
}
.expanded-item{
    grid-column: span 2;
    height: calc(var(--elementHeight)*2);
    transition: height var(--expandTiming) ease;
}
.card-container div:nth-child(2).expanded-item{
    grid-row: 1 / 3;
}
.card-container div:nth-child(4).expanded-item{
    grid-row: 2 / 4;
}
@media (max-width:768px){
    .card-container{
        --elementHeight: 200px;
        grid-template-columns: 1fr;
    }

}
</style>