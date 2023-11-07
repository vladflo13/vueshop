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
                        <th>Name</th>
                        <th>Price(1)</th>
                        <th>Number</th>
                        <th>Total Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in order" class="order-list" :key="product.id">
                        <td class="table-product-image" :style="'background-image:url('+ product.src +')'" ></td>
                        <td>{{ product.title }}</td>
                        <td>{{ product.price + ' €'}}</td>
                        <td>{{ product.numberProducts }}</td>
                        <td>{{ product.price? (product.price * product.numberProducts).toFixed(2) + ' €': null}}</td>
                        <button class="nutrition-button" @click="CheckNutrition(product.id)"> Check Nutrition</button>
                    </tr>
                </tbody>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { imgObject, orderProduct, productDTO } from '@/interfaces';
import OrderItem from './OrderItem.vue';

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
    },
    methods:{
        Shrink(){
            this.isShrunk = !this.isShrunk;
        },
        CheckNutrition(id:number){
            console.log(id)
        }
    },
    components: { }
})
</script>

<style scoped>
.product-container{
    --column-width:90px;
    --column-height:40px;
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
    width: 0%;
    height: 0%;
}
.top-left-section{
    position: absolute;
    z-index: 4;
    top:0px;
    left:0px;
    width: 20%;
    height: 33%;
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
    left: 20%;
    top: 0%;
    width: 80%;
    height: 100%;
    outline: 2px solid black;
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

    text-align: center;
    overflow: hidden;
    background-position: center;
    background-size: cover;
}

.table-product-image{
    border: 1px solid var(--primary-color);
    margin-bottom: 5px;
}
.nutrition-button{
    text-align: top;
}
.order-list{
    margin-left:5px;
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