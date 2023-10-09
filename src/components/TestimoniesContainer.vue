<template>
    <div class="testimonies-container">
        <div class ="testimonies-center">
            <TestimonyComponent :customer-name="'Bob'"></TestimonyComponent>
            <TestimonyComponent :customer-name="'Jill'"></TestimonyComponent>
            <TestimonyComponent :customer-name="'James'"></TestimonyComponent>
            <TestimonyComponent :customer-name="'Jane'"></TestimonyComponent>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TestimonyComponent from './TestimonyComponent.vue';

export default defineComponent({
    data() {
        return {};
    },
    components: { TestimonyComponent }
})
</script>

<style scoped>
.testimonies-container{
    height: 320px;
    width: 100%;

    background-color: var(--primary-color);
    display: flex;
    flex-direction: row;
    justify-content: center;
}   
.testimonies-center{
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}
</style>