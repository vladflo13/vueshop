<template>
    <div class="sc-wrapper">
        <div class="small-card" :style="'background-image:url('+ imgObject.src +')'">{{ imgObject.text }}</div>
    </div>
</template>

<script lang="ts">
import { imgObject } from '@/interfaces';
import { defineComponent, PropType } from 'vue'
//:style="'background-image:url('+imgSrc+')'"
export default defineComponent({
    props:{
        imgObject: { type:Object as PropType<imgObject>, default: null},
    },
})
</script>

<style scoped>
.sc-wrapper{
    overflow: hidden;
}
.small-card{
    width: 200px;
    height: 200px;
    background-position: center;
    background-size: cover;
    border: 0.1em solid;
}
.small-card:hover{
    transform: scale(1.05);   
}
</style>