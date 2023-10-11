<template>
    <div>
        <div :class="{'small-card':true, 'pop-in':popIn,}" :style="'background-image:url('+imgSrc+')'">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        popIn:{ type:Boolean,default:false},
        imgSrc:{type:String, default:''},
    },
})
</script>

<style scoped>

    .small-card{
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        border: 0.1em solid;
    }
    .small-card:hover{
        transform: scale(1.05);
    }
    .small-card.pop-in{
        animation-name: anim ;
        animation-duration: 0.75s;
    }
    @keyframes anim{
        0% {opacity: 0;}
        100%{opacity:1;}
        }
</style>