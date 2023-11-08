<template>
    <div class="product-container">
        <div class="top-left-section">
            <button v-if="!isShrunk" ref="shrink" @click="Shrink" class="shrink-me">
                <h1>Click to shrink</h1>                
            </button>
            <button v-if="isShrunk" ref="shrink" @click="Shrink" class="shrink-me">
                <h1>Click to expand</h1>                
            </button>
        </div>
        <div :class="{'product-backdrop':true, 'shrink':isShrunk}">
            <div class="right-section">
                <h1>Your Order</h1>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th class="table-name">Name</th>
                        <th>Price(1)</th>
                        <th class="table-numberProducts">Quantity</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in order" :key="product.id" >
                        <div class="order-list" v-if="product.numberProducts > 0 && !isShrunk">
                            <td class="table-product-image" :style="'background-image:url('+ product.src +')'" ></td>
                            <td class="table-name">{{ product.title }}</td>
                            <td>{{ product.price + ' €'}}</td>
                            <td class="table-numberProducts">
                                <button class="product-modify-button" @click="IncreaseProductNumber(product.id)">+</button>
                                <input class="number-product-input" :id="'input-'+ product.id" :value="product.numberProducts">
                                <button class="product-modify-button" @click="DecreaseProductNumber(product.id)">-</button>
                            </td>
                            <td>{{ product.price? (product.price * product.numberProducts).toFixed(2) + ' €': null}}</td>
                            <td class="last-item">                        
                                <button class="nutrition-button" @click="CheckNutrition(product.id)">Check Nutrition</button>
                            </td>
                        </div>
                    </tr>
                </tbody>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { orderProduct } from '@/interfaces';

export default defineComponent({
    data() {
        return {
            isShrunk:false,
        };
    },
    props:{
        order:{
            type: Array as () => orderProduct[],
            default: null,
        }
    },
    mounted(){
        const shrink = this.$refs.shrink as HTMLButtonElement;
        shrink.focus();
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input =>{
            input.addEventListener('change', this.HandleInputChange)
        })
    },
    beforeUnmount(){
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input =>{
            input.removeEventListener('change', this.HandleInputChange)
        })
    },
    methods:{
        Shrink(){
            this.isShrunk = !this.isShrunk;
        },
        CheckNutrition(id:number){
            console.log(id)
        },
        IncreaseProductNumber(id:number){
            const productNumberInput = document.getElementById('input-'+id) as HTMLInputElement;
            productNumberInput.value ? productNumberInput.value = (parseInt(productNumberInput.value) + 1).toString(): null;
        },
        DecreaseProductNumber(id:number){            
            const productNumberInput = document.getElementById('input-'+id) as HTMLInputElement;
            productNumberInput.value ? productNumberInput.value = (parseInt(productNumberInput.value) - 1).toString() : null;
        },
        HandleInputChange(event:Event){
            console.log('change');
            if(event.target)
                console.log(event.target);
        }
    },
    components: { }
})
</script>

<style scoped>
.product-container{
    --column-width:90px;
    --column-height:40px;
    --shrink-height: 33%;
    --shrink-width: 20%;
    --shrink-top: 25%;
    --shrink-left: -10%;
    position: fixed;
    top: 15%;
    left: 10%;
    z-index: 3;
    width: 80vw;
    height: 78vh;
    pointer-events: none;
}
.product-backdrop{
    position: absolute;
    width: 100%;
    height: 100%;
    top:0px;
    left:0px;
    background-color: color-mix(in lch,var(--background-color) 100%, transparent 5%);
    border: 2px solid var(--primary-color);
    transition: all 0.5s ease;
    pointer-events: all;
}
.shrink{
    animation-name: shrink;
    animation-duration: 0.5s;
    pointer-events: none;
    font-size: 0px;
    top:var(--shrink-top);
    left:var(--shrink-left);
    width: var(--shrink-width);
    height: var(--shrink-height);
}
.top-left-section{
    position: absolute;
    z-index: 4;
    top:var(--shrink-top);
    left:var(--shrink-left);
    width: var(--shrink-width);
    height: var(--shrink-height);
    border: 2px solid var(--primary-color); 
    background-color: color-mix(in lch,var(--background-color) 100%, transparent 5%);
    pointer-events: all;

}

.shrink-me{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.shrink-me > h1{
    width: 50%;
}

.right-section{
    position: absolute;
    left: 10%;
    top: 0%;
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
}
.right-section > h1{
    margin: 5px;
}

tr{
    display: flex;
    flex-direction: row;
    gap: 5px;
}
th{
    width: var(--column-width);
    height: var(--column-height);
    margin-bottom: 10px;
}
td{
    width: var(--column-width);
    height: var(--column-height);
    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    background-position: center;
    background-size: cover;
}

.table-name{
    width: calc(var(--column-width)*2);
}
.table-numberProducts{
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
}
.product-modify-button{
    width: 50px;
    height: 50px;
    border: 2px solid var(--primary-color);
    border-radius: 20%;
}
.number-product-input{
    width: 50px;
    height: 50px;
    color: var(--primary-color);
    background-color: var(--background-color);
    border: 2px solid var(--primary-color);
}
.last-item{
    flex-grow: 2;
    display: flex;
    flex-direction: row-reverse;
}
.table-product-image{
    border: 1px solid var(--primary-color);
    margin-bottom: 5px;
}
.nutrition-button{
    width: var(--column-width);
    height: 100%;
    border: 2px solid var(--primary-color);
    margin-right: 10px;
}
.order-list{
    width: 100%;
    margin-left:5px;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
}
@keyframes shrink{
    0% {width: 100%; height: 100%;}
    99%{ width: 20%; height: 33%;}
    100% {width: 0%; height: 0%;}
}
@media (max-width:768px)
{
    .product-container{
        top: 10%
    }
}
</style>