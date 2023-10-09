<template>
    <div class="testimony-wrapper">
        <div class="testimony">{{ testimonyBody }}</div>
        <div class="author">{{ customerName }}</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        return {}
    },
    props:{
        customerName:{type:String, default:''},
        testimonyBody:{type:String, default:'Nostrud proident sint anim non voluptate cillum veniam esse enim magna fugiat culpa sit.'}
    }
})
</script>

<style scoped>
.testimony-wrapper{
    height: 240px;
    width: 160px;
    background-color: var(--secondary-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.testimony{
    height: 60%;
    width: 80%;
    
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