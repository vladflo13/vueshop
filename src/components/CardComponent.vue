<template>
        <div class="card-wrapper" >
                <div :class="{'text-container':true, 'move-up':isExpanded}" @click="toggleExpand" :style="'background-image:url('+ imgSrc +')'">
                    <div class="small-bottom" v-show="!isExpanded"></div>
                    <div class="text-wrapper">{{ cardText }}</div>
                </div>
                <div class="small-card-container">
                    <div :class="{'small-card':true, 'pop-in':isExpanded,}" v-for="image in childImages" :key="image.id" :style="'background-image:url('+image.src+')'">{{ image.id }}</div>
                </div>
                <img src="https://picsum.photos/id/237/600/400" alt="">
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
interface imgObject{
    id:string,
    src:string
}
var children:imgObject;
export default defineComponent({
    data(){
        return{
            isExpanded:false,
            path:'https://picsum.photos/id/1025/600/400',
            childImages: [
                { id: '1', src: 'https://picsum.photos/id/1025/600/400' },
                { id: '2', src: 'https://picsum.photos/id/237/600/400' },
                { id: '3', src: 'https://picsum.photos/id/237/600/400' },
                { id: '4', src: 'https://picsum.photos/id/1025/600/400' },
                { id: '5', src: 'https://picsum.photos/id/237/600/400' },
                { id: '6', src: 'https://picsum.photos/id/1025/600/400' },
            ] as imgObject[],
        }
    },
    methods: {
        toggleExpand(){
            this.isExpanded = !this.isExpanded
        }
    },
    props: {
        cardText: {type:String, default:''},
        imgSrc: {type:String, default:''}
    }
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
        font-size: 3em;
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
        display: grid;
        grid-template-columns: 2fr 2fr 2fr;
        
    }
    .small-card{
        background-position: center;
        background-size: cover;
        border: 0.1em solid;
        margin: 0.1em;
    }
    .small-card:hover{
        transform: scale(1.05);
    }
    .small-card.pop-in{
        animation-name: anim ;
        animation-duration: 0.5s;
    }
    @keyframes anim{
        0% {opacity: 0;}
        50%{opacity:1;}
        75%{transform: scale(1.05);}
        100%{transform:scale(1);}
}
</style>