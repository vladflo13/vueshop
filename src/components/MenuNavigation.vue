<template>
        <div class="ghost-nav"></div>
        <div :class="{'button-container':true, 'fixed':isFixed}">
            <div class="button-wrapper" v-for="card in cards" :key="card.id">
                <button @click="handleClick(card.text)">{{card.text}}</button>
            </div>            
        </div>
</template>

<script lang="ts">
import { cardObject } from '@/interfaces';
import { PropType, defineComponent } from 'vue'

export default defineComponent({
    setup () {
        return {
        }
    },
    methods:{
        handleClick(section:string){
            let documentSection = document.getElementById(section);
            documentSection?.scrollIntoView({behavior:'smooth'});
        },
    },
    props:{
        cards: Object as PropType<cardObject[]>,
        isFixed:{
            type:Boolean,
            default:false
        }
    }
})
</script>

<style scoped>
.button-container{
    --font-size: 3rem;
    z-index: 2;
    width: 100%;

    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: var(--font-size);
    gap: var(--font-size);
    background-color: var(--background-color);

    box-sizing:border-box;
    border: 2px solid var(--primary-color);
    padding-top: 5px;
}
.fixed{
    position: fixed;
    top: 0px;
    z-index: 2;
}
.ghost-nav{
  height: var(--navmenu-height);
}
.button-wrapper{
    width: calc(4 * var(--font-size));
    margin-bottom: 10px;
    border-bottom: 2px solid transparent;

}
.button-wrapper:hover{
    border-bottom: 2px solid var(--primary-color)
}
.button-wrapper > button{
    width: 100%;
    font-size:inherit;
    padding: 3px;
}
@media (max-width:768px)
{
    .button-container{
        --font-size: 1.5rem;
    }
    .fixed{
        top:0px;
    }
}
</style>