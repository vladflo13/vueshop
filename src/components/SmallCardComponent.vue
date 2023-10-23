<template>
    <div class="sc-wrapper">
        <FlourishComponent class="card-flourish"></FlourishComponent>
        <div class="image-wrapper">
            <div class="card-image" :style="'background-image:url('+ imgObject.src +')'"></div>
        </div>
        <div class="card-text">
            <h1>{{ imgObject.title }}</h1>
            <h3>{{ imgObject.text }}</h3>
        </div>
    </div>
</template>

<script lang="ts">
import { imgObject } from '@/interfaces';
import { defineComponent, PropType } from 'vue'
import FlourishComponent from './FlourishComponent.vue';
export default defineComponent({
    props: {
        imgObject: { type: Object as PropType<imgObject>, default: null },
    },
    components: { FlourishComponent }
})
</script>

<style scoped>
.sc-wrapper{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
}
.card-text{
    position: absolute;
    z-index: 2;
    background-color: rgba(0,0,0,0.4);
    width: 50%;
    left: 50%;
    height: 100%;
}
.card-text > h3{
    margin-left: 10px;
    color: var(--new-color)
}
.card-text > h1{
    text-align: center;
    color: var(--color-a);
}
.image-wrapper{
    position: absolute;
    height: 100%;
    width: 100%;
    overflow: hidden;
}
.card-flourish{
    z-index: 3;
    width: 100%;
    height: 100%;
    color: var(--color-b);
}
.card-image{
    width: 100%;
    height: 100%;
    background-position: center;
    background-size:cover;
}

</style>