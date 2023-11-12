<template>
    <div class="testimonies-container">
        <TestimonyComponent :class="{'item':true, 'wide':item.isWide, 'tall':item.isTall}" v-for="item in testimonies" :key="item.id" :customer-name="item.clientName" :testimony-body="item.clientTestimony"></TestimonyComponent>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TestimonyComponent from './TestimonyComponent.vue';

export default defineComponent({
    data() {
        return {
            isWide:true,
            isTall:false,
            testimonies:[
            {
                id: 1,
                imgSrc: '', // No generation here
                clientName: 'John Doe',
                clientTestimony: 'A wonderful experience with amazing pastries!',
                isWide: false,
                isTall: false,
            },
            {
                id: 2,
                imgSrc: '',
                clientName: 'Jane Smith',
                clientTestimony: 'The custom cake was a showstopper! Loved it!',
                isWide: true,
                isTall: false,
            },
            {
                id: 3,
                imgSrc: '',
                clientName: 'Chris Anderson',
                clientTestimony: 'Delicious treats that exceeded expectations.',
                isWide: false,
                isTall: true,
            },
            {
                id: 4,
                imgSrc: '',
                clientName: 'Robert Carter',
                clientTestimony: 'The attention to detail in every pastry is remarkable.',
                isWide: true,
                isTall: false,
            },
            {
                id: 5,
                imgSrc: '',
                clientName: 'Sophie Turner',
                clientTestimony: 'The cupcakes were not only cute but also incredibly tasty!',
                isWide: false,
                isTall: false,
            },
            {
                id: 6,
                imgSrc: '',
                clientName: 'David Miller',
                clientTestimony: 'Exceptional service and a wide variety of mouthwatering treats.',
                isWide: true,
                isTall: true,
            },
            {
                id: 7,
                imgSrc: '',
                clientName: 'Emily Walker',
                clientTestimony: 'I love how they personalize each order. It adds a special touch!',
                isWide: false,
                isTall: false,
            },
            {
                id: 8,
                imgSrc: '',
                clientName: 'Oliver Price',
                clientTestimony: 'The aroma of freshly baked goods is irresistible!',
                isWide: true,
                isTall: false,
            },          
            ]
        };
    },
    components: { TestimonyComponent }
})
</script>

<style scoped>
.testimonies-container{
    display: grid;
    width: 200vw;
    background-color: var(--background-color);
    grid-template-rows: 1fr 1fr; 
    padding-top: 60px;
    padding-bottom: 60px;
    grid-template-columns: 360px;
    gap: 20px;
}

.item:nth-child(odd)
{
    border: 3px solid pink;
    grid-row: 1 / 2;
}
.item:nth-child(even)
{
    border: 3px solid red;
    grid-row: 2 / 3;
}
</style>