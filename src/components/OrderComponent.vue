<template>
    <div ref="orderComponent" class="product-container">
        <div class="product-backdrop">
            <div class="order-section">
                <h1>Your Order</h1>
                <div class="order-list">
                    <ProductComponent class="card" @new-input="ChangeInput" @closed-item="CloseProduct" v-for="product in order" :key="product.id" :imgObject="product" :onOrder="true" ></ProductComponent>
                </div>
            </div>
            <div class="total-wrapper">
                <div>{{'Your total price is:'}}</div>
                <p>{{ '£ '+ total.toFixed(2)  }}</p>
            </div>
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
        },
        propTotal:{
            type:Number,
            default:0,
        }
    },
    mounted(){
        window.addEventListener('scroll', this.IsScrolling);
        window.addEventListener('scroll', this.HasScrollingStopped);
        this.total=this.propTotal;
    },
    beforeUnmount(){
        window.removeEventListener('scroll', this.IsScrolling);
        window.removeEventListener('scroll', this.HasScrollingStopped);
        this.$emit('current-order',this.order, this.propTotal)
    },
    methods:{
        CheckNutrition(id:number){
            console.log(id)
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
        },
        AddTotal(){
            this.total=0;
            this.order.forEach(element => {
                element.price? this.total+=element.price * element.numberProducts: null;
            });
        },
        ChangeInput(inputValue:number, id:number){
            this.$emit('new-input', inputValue, id)

        },
        CloseProduct(id: number){
            this.$emit('closed-item', id);
        },
    },
    watch:{
      'order': {handler(newVal, oldVal){
        this.AddTotal();
      },
      deep: true
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
    z-index: 6;
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
    width: 100%;
    height: 80%;
    padding-left: 20px;
    padding-right: 20px;

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
.total-wrapper{
    display: flex;
    flex-direction: row;
    text-align: end;
    margin-left: 20%;
    border: 2px solid var(--primary-color);
    padding-left: 10%;
    padding-right: 10%;
    margin-top: 10px;
    font-size: 2.5rem;
}
.total-wrapper > p{
    margin-left: 10px;
    font-weight: bolder;
}
::-webkit-scrollbar{
    width: 3px;
}
::-webkit-scrollbar-thumb{
    background-color: var(--primary-color);
    border-radius: 20px;
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
    .bottom-section{
        position: absolute;
        bottom: 0px;
    }
    .bottom-section > button{
        font-size:2rem;
    }
    .total-wrapper{
        position: absolute;
        bottom: 80px;
        font-size: 1.25rem;
        margin: 0px;
        margin-bottom: 5px;
    }
}
</style>