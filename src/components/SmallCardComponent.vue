<template>
    <div class="sc-wrapper">
        <div class="image-wrapper">
            <div class="card-image" :style="'background-image:url('+ imgObject.src +')'"></div>
        </div>
        <div class="card-text">
            <h2>{{ imgObject.title }}</h2>
            <h3>{{ imgObject.text }}</h3>
        </div>
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
    --card-width:100px;
    --card-height:100px;
    display: flex;
    flex-direction: column;
}
.card-text{
    height: calc(var(--card-height) / 4);
    width: var(--card-width);
    background-color: white;
    overflow: hidden;
}
.card-text > h2{
    text-align: center;
}
.image-wrapper{
    width: var(--card-height);
    height: var(--card-width);
    overflow: hidden;
}
.card-image{
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    border: 0.1em solid green;
}
.card-image:hover{
    transform: scale(1.05);   
}
</style>