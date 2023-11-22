<template>
        <div class="ghost-nav"></div>
        <div :class="{'button-container':true, 'fixed':isFixed}">
            <div class="button-wrapper" v-for="card in ParentCards" :key="card.id">
                <button @click="handleClick(card.text)">{{card.text}}</button>
            </div>            
        </div>
</template>

<script lang="ts">
import { bakeryMenu } from '@/interfaces';
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
        ParentCards: {
            type: Array as () => bakeryMenu[],
            default: null,
        },
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
    position: absolute;

    width: 100%;
    height: var(--navmenu-height);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    font-size: var(--font-size);
    gap: var(--font-size);
    background-color: var(--background-color);

    box-sizing:content-box;
    border: 2px solid var(--primary-color);

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