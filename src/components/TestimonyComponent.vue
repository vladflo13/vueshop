<template>
    <div class="testimony-wrapper">
        <div class="testimony">{{ testimonyBody }}</div>
        <div class="author">{{ customerName }}</div>
        <div></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        return {}
    },
    props:{
        customerName:{type:String, default:'Lorem, ipsum.'},
        testimonyBody:{type:String, default:'Nostrud proident sint anim non voluptate cillum veniam esse enim magna fugiat culpa sit.'}
    }
})
</script>

<style scoped>
.testimony-wrapper{
    width: 100%;
    height: 300px;
    background-color: var(--color-b);
    color: var(--color-a);
}
.testimony{
    font-size: small;
    text-align: center;
}
.author{
    text-align:center;
    margin: 10px;
    height: 20%;
    width: 80%;
}
</style>