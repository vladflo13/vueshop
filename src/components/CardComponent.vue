<template>
        <div class="card-wrapper" >
                <div :class="{'text-container':true, 'move-up':isExpanded}" @click="toggleExpand" :style="'background-image:url('+ imgSrc +')'">
                    <div class="small-bottom" v-show="!isExpanded"></div>
                    <div class="text-wrapper">{{ cardText }}</div>
                </div>
                <div class="small-card-container">
                    <SmallCardComponent :class="{'pop-in':true, 'appear':isExpanded, 'disappear':!isExpanded}"
                    v-for="image in childImages" :key="image.id" :imgSrc="image.src"></SmallCardComponent>
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
                { id: '1', src: 'https://picsum.photos/id/1025/600/400' },
                { id: '2', src: 'https://picsum.photos/id/237/600/400' },
                { id: '3', src: 'https://picsum.photos/id/237/600/400' },
                { id: '4', src: 'https://picsum.photos/id/1025/600/400' },
                { id: '5', src: 'https://picsum.photos/id/237/600/400' },
                { id: '6', src: 'https://picsum.photos/id/1025/600/400' },
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
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    border: 0.1em solid;
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
    gap: 2px;
    top: 15%;
    height:85%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
}

.pop-in.appear{
    animation-name: fadeIn ;
    animation-duration: 0.5s;
}
.pop-in.disappear{
    animation-name: fadeOut ;
    animation-duration: 0.75s;
}
@keyframes fadeIn{
    0% {opacity: 0;}
    100% {opacity: 1;}
}
@keyframes fadeOut{
    0% {opacity: 1;}
    100% {opacity: 0;}
}
@media (max-width:768px)
{
    .text-wrapper{
        font-size:1rem;
    }
}
</style>