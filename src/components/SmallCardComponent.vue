<template>
    <div class="small-card" :style="'background-image:url('+imgSrc+')'">
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
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
</style>