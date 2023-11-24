<template lang="">
    <div>
        <div class="product-wrapper">
            <div class ="image-wrapper">
                <Transition name="nutrition-box">
                    <div v-if="isNutritionRevealed" class = "nutrition-box" >
                        <div class="item-box">
                            <div class="item">{{'Calories: '+ nutrition.calories}}</div>
                            <div class="item">{{'Carbohydrates: '+ nutrition.carbohydrates + ' g'}}</div>
                            <div class="item">{{'Fiber: '+ nutrition.fiber + ' g'}}</div>
                            <div class="item">{{'Sugar: '+ nutrition.sugar + ' g'}}</div>
                            <div class="item">{{'Fat: '+ nutrition.fat + ' g'}}</div>
                            <div class="item">{{'Protein: '+ nutrition.protein + ' g'}}</div>
                            <div class="item">{{'Sodium: '+ nutrition.sodium + ' mg'}}</div>
                            <div class="item">{{'Allergens: '+ nutrition.allergens}}</div>
                        </div>
                    </div>
                </Transition>
                <div class = "image" :style="'background-image:url('+ card.src +')'"></div>
            </div>
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
import { PropType, defineComponent } from 'vue';
import { product, nutritionDTO} from '../interfaces';
export default defineComponent({
    data(){
        return{
            isNutritionRevealed:false,
            nutrition: {} as nutritionDTO,
        }
    },
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
        },
        RevealNutrition(){
            this.isNutritionRevealed=!this.isNutritionRevealed;
        },
        async FetchNutrition(){
            let apiLocation ='https://localhost:7018/api/Nutrition/' + (this.card as any).id;
            try{
                const response = await fetch(apiLocation);
                const data = await response.json();
                this.nutrition = data;
            }
            catch(error){
                console.error("Nutrition was not found.")
            }

        }
    },
    async mounted(){
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        await this.FetchNutrition();
    }
})
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
.image-wrapper{
    transform: translateX(15vw);
    transform: scale(1.1);
    width: 60%;
    overflow: hidden;
}
.nutrition-box-enter-from, 
.nutrition-box-leave-to
{
    transform:translateX(-100%);
}
.nutrition-box-enter-active,
.nutrition-box-leave-active {
  transition: all 0.5s;
}
.nutrition-box{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    
}
.item-box{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    animation: fade-in 1s ease;
}
@keyframes fade-in {
    0% {opacity: 0;}
    50%{opacity: 0;}
    100% {opacity: 1s;}
}
.item:nth-child(1),.item:nth-child(2){

    animation-delay: 0.1s;
}
.item:nth-child(3),.item:nth-child(4){
    animation-delay: 0.2s;
}
.item:nth-child(5),.item:nth-child(6){

    animation-delay: 0.3s;
}
.item:nth-child(7),.item:nth-child(8){

    animation-delay: 0.4s;
}
.item{
    font-size: 1.25rem;
    font-weight: bolder;
    flex: 1;
    height: 50px;
    text-align: center;
    background-color: var(--background-color);
    border: 2px solid var(--primary-color);
    box-shadow: 3px 3px rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px;
    animation-name: fade-in;
    animation-duration: 1s;
}
.image{
    z-index: 2;
    width: 100%;
    height: 100%;
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
@media (max-width:768px) {
    .product-wrapper{
        flex-direction: column-reverse;
        margin-bottom: 200px;
    }
    .image-wrapper{
        width: 100%;
        height: 100%;
        transform:translateY(20vh) scale(1.15);

    }
    .information-box{
        width: 100%;
        height: 50%;
    }
    .item{
        font-size: 0.9rem;
        height: 40px;

    }
    .nutrition-box-enter-from, 
    .nutrition-box-leave-to
    {
        transform:translateY(-100%);
    }
}
</style>