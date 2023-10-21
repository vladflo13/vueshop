<template>
    <div class="card-container">
        <Transition :key="card.id" v-for="card in Cards">
            <CardComponent  :imgSrc="card.image" :cardText="card.text"></CardComponent>
        </Transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardComponent from './CardComponent.vue';
export default defineComponent({

    data() {
        return {
            Cards:[
                {
                    id:1,
                    image: require('@/assets/bread.jpg'),
                    text : 'Bread',
                },
                {
                    id:2,
                    image: 'https://picsum.photos/id/1080/600/400',
                    text : 'Cookies',
                },
                {
                    id:3,
                    image: 'https://picsum.photos/id/1080/600/400',
                    text : 'Tarts',

                },
                {
                    id:4,
                    image: 'https://picsum.photos/id/1080/600/400',
                    text : 'Quiche'
                }
            ]

        };
    },
    components: { CardComponent }
})
</script>

<style scoped>
    .card-container{
        position: relative;
        width: 100%;
        height: 720px;
        display: grid;
        gap: 0.3em;
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width:768px){
        .card-container{
            grid-template-rows: repeat(4, 1fr);
            grid-template-columns: auto;
        }
    }
</style>