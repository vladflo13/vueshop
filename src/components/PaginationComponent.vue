<template>
    <div class="pagination-container">
        <div v-for="page in numberOfPages" :key="page" :class="{'dot':true, 'selected':currentPage===page}"></div>
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
    height: 10px;
    width: 10px;
    border: 0.1em solid var(--background-color);
    border-radius: 50%;
}
.selected{
    background-color: var(--background-color);
}
</style>