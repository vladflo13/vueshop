<template lang="">
    <div>
        <div class="product-wrapper">
        </div>
    </div>
</template>
<script lang="ts">
import { PropType } from 'vue';
import { product} from '../interfaces';
export default {
    props:{
        card:{
            type:() => Object as PropType<product>,
            default: () => ({}) as product,
        }
    },
    async mounted(){
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        let apiLocation ='https://localhost:7018/api/Nutrition/' + (this.card as any).id;
    }
}
</script>
<style scoped>
    .product-wrapper{

    }
</style>