<template>
    <div class="pagination-container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        

        return {}
    },
    props:{
        numberOfPages:{
            type: Number,
            default:0
        },
        currentPage:{
            type:Number,
            default:1
        }

    }
})
</script>

<style scoped>
.pagination-container{
    display: flex;
    flex-direction: row;
    gap: 2px;
}
.dot{
    background-color: var(--primary-color);
    height: 1em;
    width: 1em;
    border: 0.1em solid;
    border-radius: 50%;
}
</style>