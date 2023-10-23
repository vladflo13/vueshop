<template>
        <div class="card-wrapper">
                <div class="ghost-text"></div>
                <div class="ghost-text"></div>
                <div :class="{'text-container':true, 'reveal':isExpanded }"  @click="toggleExpand"
                :style="'background-image:url('+ card.src +')'">
                    <div class="small-bottom" v-show="!isExpanded"></div>
                    <div class="text-wrapper">
                        <p>{{ card.text }}</p></div>
                </div>
                <div v-for="image in card.childCards" :key="image.id">
                    <SmallCardComponent :class="{'card':true, 'appear':isExpanded, 'disappear':!isExpanded}"
                    :imgObject="image"></SmallCardComponent>
                </div>
        </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import SmallCardComponent from './SmallCardComponent.vue';
import { cardObject } from '../interfaces';
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
        card: {type: Object as PropType<cardObject>, default:null}
    },
    components: { SmallCardComponent }
})
</script>

<style scoped>
.card-wrapper{
    --card-height: 200px;
    --ghost-height: calc(var(--card-height)/2);
    z-index: 1;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid var(--color-b);
    outline: 1px solid var(--primary-color);
    background-color: var(--background-color);
    min-height: 700px;
    margin-bottom: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap:10px
}
.ghost-text{
    width: 100%;
    height: var(--ghost-height);
}
.text-container{
    z-index: 4;
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 3rem;

    display: flex;
    align-items: flex-end;
    flex-direction: column-reverse;
    background-position: center;
    background-size: cover;
    background-color: rgba(0,0,0,0.10);
    background-blend-mode: multiply;
    transition: transform 0.5s ease;
}
.text-container:hover{
    transform: scale(1.05);
}
.text-container.reveal{
    transform: translateY(calc(-100% + var(--ghost-height)));
    transition: transform 0.5s ease;
    transition-delay: var(--expandTiming);
}
.text-wrapper{
    position: relative;
    width: 100%;
    height: var(--ghost-height);
    display:flex;
    justify-content: center;
    align-items: center;
    background-color:var(--background-halfopacity);
    color: var(--color-b);
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
    width: 100%;
}
.card{
    height: var(--card-height);
    margin: 2px;
}
.card.appear{
    animation-name: fadeIn ;
    animation-duration: 0.5s;
    animation-delay: var(--expandTiming);
}
.card.disappear{
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
    .card-wrapper{
        grid-template-columns: 1fr;
    }
    .ghost-text{
        height: calc(var(--card-height)/4);
    }
    .text-container{
        font-size:2rem;
    }
    .text-container.reveal{
        transform: translateY(calc(-100% + var(--card-height) / 2));
        font-size:3rem;
    }
    .text-wrapper{
        height: calc(var(--card-height)/2);
    }
}
</style>