<template>
    <div class="card-container" v-for="card in cards" :key="card.id">
        <section :id="card.text"></section>
        <CardComponent :card="card" class="item" @addItem="addItem"></CardComponent>
    </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue';
import CardComponent from './CardComponent.vue';
import { bakeryMenu } from '../interfaces';
export default defineComponent({
    props:{
        cards: Object as PropType<bakeryMenu[]>
    },
    methods:{
        addItem(id:number){
            this.$emit('addItem', id);
        }
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

</style>