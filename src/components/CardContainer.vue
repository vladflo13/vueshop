<template>
    <div class="card-container">
        <Transition :key="Card.id" v-for="Card in Cards">
            <CardComponent  :imgSrc="Card.image" :cardText="Card.text"></CardComponent>
        </Transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardComponent from './CardComponent.vue';
export default defineComponent({
    setup() {
        return {
            Cards:[
                {
                    id:1,
                    image: require('@/assets/medium.png'),
                    text : 'Bread'
                },
                {
                    id:2,
                    image: require('@/assets/medium.png'),
                    text : 'Cookies',
                },
                {
                    id:3,
                    image: require('@/assets/medium.png'),
                    text : 'Tarts',

                },
                {
                    id:4,
                    image: require('@/assets/medium.png'),
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
        width: 96%;
        height: 720px;
        display: grid;
        gap: 0.3em;
        grid-template-columns: 2fr 2fr;
    }
    @media (max-width:768px){
        .card-container{
            grid-template-rows: repeat(4, 1fr);
            grid-template-columns: auto;
        }
    }
</style>