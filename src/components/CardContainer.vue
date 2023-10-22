<template>
    <div class="card-container" v-for="card in cards" :key="card.id">
        <section :id="card.text"></section>
        <CardComponent :card="card" class="item"></CardComponent>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import CardComponent from './CardComponent.vue';
import { imgObject, cardObject } from '../interfaces';
export default defineComponent({
    props:{
        cards: Object as PropType<cardObject[]>
    },
    components: { CardComponent }
})
</script>   

<style scoped>
.card-container{
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;

}
@media (max-width:768px){
   

}
</style>