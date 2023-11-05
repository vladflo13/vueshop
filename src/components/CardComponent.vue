<template>
        <div class="card-wrapper">
                <div :class="{'text-container':true,}">
                    <div :class="{'text-wrapper':true, 'go-up':true}">
                    <h2>{{ card.text }}</h2></div>
                </div>
                <SmallCardComponent v-for="smallCard in card.childCards" class="card" @added-item="addItem(smallCard.id)"
                    :imgObject="smallCard" :key="smallCard.id">
                </SmallCardComponent>
        </div>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import SmallCardComponent from './SmallCardComponent.vue';
import { cardObject } from '../interfaces';
export default defineComponent({
    data() {
        return {
            isExpanded: false,
        };
    },
    methods: {
        toggleExpand() {
            this.$emit('childExpanded');
            this.isExpanded = !this.isExpanded;
        },
        addItem(id:number){
            this.$emit('addItem', id)
        }
    },
    props: {
        card: {type: Object as PropType<cardObject>, default:null}
    },
    components: { SmallCardComponent }
})
</script>

<style scoped>
.card-wrapper{
    --card-height: 400px;
    --card-width: 100%;
    --ghost-height: calc(var(--card-height)/4);

    z-index: 1;
    overflow: hidden;
    position: relative;
    height: 100%;
    width: 100%;
    border: 1px solid var(--color-b);
    outline: 1px solid var(--primary-color);
    background-color: var(--background-color);
    margin-bottom: 20px;
    padding-top: var(--ghost-height);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:10px;
    padding-left: 5px;
    padding-right: 5px;

}
.text-container{
    z-index: 4;
    position: absolute;
    width: 100%;
    height: 100%;
    font-size: 3rem;
}


.text-wrapper{
    position: absolute;
    width: 100%;
    height: var(--ghost-height);
    top: 0px;
    color: var(--primary-color);
    display: flex;
    justify-content: center;
}

.small-card-container{
    z-index: -1;
    position: absolute;
    top: 15%;
    width: 100%;
    height: 100%;
}
.card{
    height: var(--card-height);
    width: var(--card-width);
}
@media (max-width:768px)
{
    .bg-image{
        transform: translateY(calc(-100% + var(--ghost-height)));
        transition: transform 0.5s ease;
        transition-delay: var(--expandTiming);
    }
    .card-wrapper{
        grid-template-columns: 1fr;
    }
    .text-container{
        
        font-size:3rem;
    }
    .text-wrapper{
        top: 0px;
    }
    .card.appear{
        animation-duration: 0s;
    }
    .card.disappear{
        animation-duration: 0s;
    }
}
</style>