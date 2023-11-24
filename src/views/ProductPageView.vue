<template lang="">
    <div>
        <div class="product-wrapper">
            <div class = "image" :style="'background-image:url('+ card.src +')'"></div>
            <div class = "information-box">
                <h1>{{card.title}}</h1>
                <div class ="divider"></div>
                <p>{{card.text}}</p>
                <button class="check-nutrtion" @click="RevealNutrition">Check Nutrition</button>
                <button class="add-cart" @click="AddItem">Add to Cart</button>
                <h2>{{'£ '+card.price}}</h2>
            </div>
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
    methods:{
        AddItem(){
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            this.$emit('AddItem', this.card.id)
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
    width: 70vw;
    height: 60vh;
    margin: 50px;
    border: 2px solid var(--primary-color);
    display:flex;
    flex-direction: row-reverse;
    box-shadow: -3px 3px rgba(0,0,0,0.5);
    justify-content: center;
}
.image{
    z-index: 2;
    width: 60%;
    height: 100%;
    transform: translateX(15vw);
    transform: scale(1.1);
    background-position: center;
    background-size: cover;
    border: 2px solid var(--primary-color);
    box-shadow: -3px 3px rgba(0,0,0,0.5);
}
.information-box{
    width: 40%;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.divider{
    border:1px solid var(--primary-color);
    width: 80%;
    margin: 10px;
}
h1, p{
    font-weight: bolder;
}
.check-nutrtion, .add-cart{
    font-size: 1.25rem;
    font-weight: bolder;
    padding: 10px 20px;
    border: 2px solid var(--primary-color);
    margin: 10%;
    width: 200px;
    box-shadow: 3px 3px rgba(0,0,0,0.5);
}
</style>