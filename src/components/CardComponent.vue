<template>
        <div class="card-wrapper" >
                <div :class="{'text-container':true, 'move-up':isExpanded}" @click="toggleExpand" :style="'background-image:url('+ imgSrc +')'">
                    <div class="small-bottom" v-show="!isExpanded"></div>
                    <div class="text-wrapper">{{ cardText }}</div>
                </div>
                <div class="small-card-container">
                    <SmallCardComponent v-for="image in childImages" :popIn="isExpanded" :key="image.id" :imgSrc="image.src"></SmallCardComponent>
                </div>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SmallCardComponent from './SmallCardComponent.vue';
interface imgObject{
    id:string,
    src:string
}
var children:imgObject;
export default defineComponent({
    data() {
        return {
            isExpanded: false,
            childImages: [
                { id: '1', src: 'https://picsum.photos/id/1025/300/200' },
                { id: '2', src: 'https://picsum.photos/id/237/300/200' },
                { id: '3', src: 'https://picsum.photos/id/237/300/200' },
                { id: '4', src: 'https://picsum.photos/id/1025/300/200' },
                { id: '5', src: 'https://picsum.photos/id/237/300/200' },
                { id: '6', src: 'https://picsum.photos/id/1025/300/200' },
            ] as imgObject[],
        };
    },
    methods: {
        toggleExpand() {
            this.isExpanded = !this.isExpanded;
        }
    },
    props: {
        cardText: { type: String, default: '' },
        imgSrc: { type: String, default: '' }
    },
    components: { SmallCardComponent }
})
</script>

<style scoped>
    .card-wrapper{
        z-index: 1;
        position: relative;
        width: 100%;
        height: 100%;
        border: 0.1em solid;
        overflow: hidden;
        background-color: var(--primary-color);
    }

    .text-container{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: flex-end;
        flex-direction: column-reverse;

        background-position: center;
        background-size: cover;
        transition: transform 0.5s ease;
    }
    .text-container:hover{
        transform: scale(1.05);
    }
    .text-container.move-up{
        transform: translateY(-85%);
    }
    .text-wrapper{

        position: relative;
        width: 100%;
        height: 15%;
        font-size: 2rem;
        text-align: center;
        background-color:var(--primary-halfopacity);
        color: var(--font-color);
    }
    .small-bottom{
        z-index: 0;
        height:5%;
        width: 100%;
    }
    .small-card-container{
        z-index: -1;
        position: absolute;
        top: 15%;
        height:85%;
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

@media (max-width:768px)
{
    .text-wrapper{
        font-size:1rem;
    }
}
</style>