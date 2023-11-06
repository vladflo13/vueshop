<template>
    <div class="product-container">
        <SmallCardComponent></SmallCardComponent>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SmallCardComponent from './SmallCardComponent.vue';
import { imgObject } from '@/interfaces';

export default defineComponent({
    data() {
        return {
        };
    },
    prop:{
        order:{
            type: Array as () => imgObject[],
            default: null,
        }
    },
    components: { SmallCardComponent }
})
</script>

<style scoped>
.product-container{
    position: fixed;
    top: 0px;
    z-index: 10;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
}
</style>