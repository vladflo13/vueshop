<template>
    <div class="product-container">
        <div class="product-backdrop">
            <div class="order-section">
                <h1>Your Order</h1>
                <div class="order-list">
                    <ProductComponent class="card" v-for="product in order" :key="product.id" :imgObject="product" :onOrder="true" ></ProductComponent>
                </div>
            </div>
            <div class="total">{{'Your total price is: '+ total}}</div>
            <div class="bottom-section">
                <button @click="OrderClosed">Close</button>
                <button>Place Order</button>
            </div>
        </div>
        
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {  orderProduct } from '@/interfaces';
import ProductComponent from './ProductComponent.vue';

export default defineComponent({
    data() {
        return {
            isShrunk:false,
            total:0,
        };
    },
    props:{
        order:{
            type: Array as () => orderProduct[],
            default: null,
        }
    },
    mounted(){
        window.addEventListener('scroll', this.IsScrolling);
        window.addEventListener('scroll', this.HasScrollingStopped);

    },
    beforeUnmount(){
        window.removeEventListener('scroll', this.IsScrolling);
        window.removeEventListener('scroll', this.HasScrollingStopped);
    },
    methods:{
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
        },
        IsScrolling(){
            const element = document.querySelector('.product-container') as HTMLDivElement;
            if(window.innerWidth>768)
            element.style.opacity='0.5';
        },
        HasScrollingStopped(){
            let stopScroll:number;
            stopScroll = setTimeout(this.StopScroll, 200)
        },
        StopScroll(){
            const element = document.querySelector('.product-container') as HTMLDivElement;
            element.style.opacity='1';
        },
        OrderClosed(){
            this.$emit('order-closed');
        }
    },
    components: { ProductComponent }
})
</script>

<style scoped>
.product-container{
    --card-height:400px;
    position: fixed;
    top: 15%;
    left: 10%;
    z-index: 3;
    width: 80vw;
    height: 80vh;
    pointer-events: all;
    scroll-behavior: smooth;
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
    display: flex;
    flex-direction: column;
    align-items: center;
}

.order-section{
    width: 90%;
    height: 80%;
    display: flex;
    flex-direction: column;
    text-align: center;
}
.order-section > h1{
    margin-bottom: 10px;
}
.order-list{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    overflow-y: scroll;

}
.card{
    width: 100%;
    height: var(--card-height);
}
.bottom-section{
    height: 15%;
    width: 100%;
    padding: 20px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
}
.bottom-section > button{
    height: 100%;
    width: 50%;
    font-size: 4rem;
    border: 2px solid var(--color-a);
    outline: 2px solid var(--color-b);
    margin-top: 2px;
    background-color:var(--color-b);
    color: var(--color-a);
    transition: transform 0.5s ease;

}
button:hover{
    transform: scale(1.05);
    transition: transform 0.5s ease;
}
.total{
    width: 100%;
    font-size: 2rem;
    text-align: end;
    margin-right: 200px;
}
@keyframes shrink{
    0% {width: 100%; height: 100%;}
    99%{ width: 20%; height: 33%;}
    100% {width: 0%; height: 0%;}
}
@media (max-width:768px)
{
    .product-container{
        --card-height:400px;
        width: 100vw;
        height: 100vh;
        top:0px;
        left:0px;
    }
    .order-list{
        grid-template-columns: 1fr;
    }
    .bottom-section > button{
        font-size:2rem;
    }

}
</style>