<template>
        <div class="card-wrapper">
                <div :class="{'text-container':true, 'reveal':isExpanded }"  @click="toggleExpand"
                :style="'background-image:url('+ imgSrc +')'">
                    <div class="small-bottom" v-show="!isExpanded"></div>
                    <div class="text-wrapper">
                        <p>{{ cardText }}</p></div>
                </div>
                <div class="small-card-container">
                    <SmallCardComponent :class="{'pop-in':true, 'appear':isExpanded, 'disappear':!isExpanded}"
                    v-for="image in childCards" :key="image.id" :imgSrc="image.src"></SmallCardComponent>
                </div>
        </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import SmallCardComponent from './SmallCardComponent.vue';
import {imgObject} from './imgObject';
export default defineComponent({
    data() {
        return {
            isExpanded: false,
        };
    },
    methods: {
        toggleExpand() {
            this.$emit('childExpanded');
            this.isExpanded = !this.isExpanded;
        }
    },
    props: {
        cardText: { type: String, default: '' },
        imgSrc: { type: String, default: '' },
        childCards: {type: Object as PropType<imgObject[]>, required:true},
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
    font-size: 2rem;

    display: flex;
    align-items: flex-end;
    flex-direction: column-reverse;
    background-position: center;
    background-size: cover;
    background-color: rgba(0,0,0,0.20);
    background-blend-mode: multiply;
    transition: transform 0.5s ease;
}
.text-container:hover{
    transform: scale(1.05);
}
.text-container.reveal{
    font-size: 3rem;
    transform: translateY(-85%);
    transition: transform 0.5s ease;
    transition-delay: var(--expandTiming);
}
.text-wrapper{
    position: relative;
    width: 100%;
    height: 15%;
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:var(--background-halfopacity);
    color: var(--primary-color);
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
    animation-delay: var(--expandTiming);
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
    .text-container{
        font-size:1rem;
    }
    .text-container.reveal{
        font-size:2rem;
    }
}
</style>