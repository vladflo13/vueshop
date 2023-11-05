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
    --navmenu-height: 100px;
    z-index: 2;
    width: 100%;
    height: var(--navmenu-height);
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size);
    gap: var(--font-size);
    background-color: var(--background-color);

    box-sizing:content-box;
    border: 2px solid var(--primary-color);
    border-bottom: 2px solid transparent;

    padding-top: 5px;
}
.fixed{
    position: fixed;
    top: 0px;
    z-index: 2;
    border-bottom: 2px solid var(--primary-color);

}
.ghost-nav{
  height: var(--navmenu-height);
}
.button-wrapper{
    width: calc(4 * var(--font-size));
    height: 100%;
    margin-bottom: 50px;
    border-bottom: 2px solid transparent;
}
.button-wrapper:hover{
    border-bottom: 2px solid var(--primary-color)
}
.button-wrapper > button{
    width: 100%;
    height: 100%;
    font-size:inherit;
    text-align: center;
    padding-top: 40px;
}
@media (max-width:1200px)
{
    .button-container{
        --font-size: 1.75rem;
    }
}
@media (max-width:768px)
{
    .button-container{
        --navmenu-height: 75px;
    }
    .button-container{
        --font-size: 1.5rem;
    }
    .fixed{
        border-top: 0px solid;
        top:var(--navbar-height);
    }
}
</style>