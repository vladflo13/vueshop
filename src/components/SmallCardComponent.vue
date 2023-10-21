<template>
    <div class="small-card" >
        <img :src="imgSrc"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
//:style="'background-image:url('+imgSrc+')'"
export default defineComponent({
    props:{
        imgSrc:{type:String, default:''},
    },
})
</script>

<style scoped>
.small-card{
    width: 100%;
    height: 360px;
    background-position: center;
    background-size: cover;
    border: 0.1em solid;
}
.small-card:hover{
    transform: scale(1.05);   
}
</style>