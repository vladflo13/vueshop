<template>
    <div class="sc-wrapper">
        <FlourishComponent class="card-flourish"></FlourishComponent>
        <div v-if="!onOrder" class="cart-container">
            <button class="cart-wrapper" @click="EmitAdd">
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.28869 2.76279C1.41968 2.36983 1.84442 2.15746 2.23737 2.28845L2.50229 2.37675C2.51549 2.38115 2.52864 2.38554 2.54176 2.38991C3.16813 2.59867 3.69746 2.7751 4.11369 2.96873C4.55613 3.17456 4.94002 3.42965 5.23112 3.83352C5.52221 4.2374 5.64282 4.68226 5.69817 5.16708C5.75025 5.62318 5.75023 6.18114 5.7502 6.84139L5.7502 9.49996C5.7502 10.9354 5.7518 11.9365 5.85335 12.6918C5.952 13.4256 6.13245 13.8142 6.40921 14.091C6.68598 14.3677 7.07455 14.5482 7.80832 14.6468C8.56367 14.7484 9.56479 14.75 11.0002 14.75H18.0002C18.4144 14.75 18.7502 15.0857 18.7502 15.5C18.7502 15.9142 18.4144 16.25 18.0002 16.25H10.9453C9.57774 16.25 8.47542 16.25 7.60845 16.1334C6.70834 16.0124 5.95047 15.7535 5.34855 15.1516C4.74664 14.5497 4.48774 13.7918 4.36673 12.8917C4.25017 12.0247 4.25018 10.9224 4.2502 9.55484L4.2502 6.883C4.2502 6.17 4.24907 5.69823 4.20785 5.33722C4.16883 4.99538 4.10068 4.83049 4.01426 4.71059C3.92784 4.59069 3.79296 4.47389 3.481 4.32877C3.15155 4.17551 2.70435 4.02524 2.02794 3.79978L1.76303 3.71147C1.37008 3.58049 1.15771 3.15575 1.28869 2.76279Z" fill="#1C274C"/>
                    <path opacity="0.5" d="M5.74512 6C5.75008 6.25912 5.75008 6.53957 5.75007 6.8414L5.75006 9.5C5.75006 10.9354 5.75166 11.9365 5.85321 12.6919C5.86803 12.8021 5.8847 12.9046 5.90326 13H16.0221C16.9815 13 17.4612 13 17.8369 12.7523C18.2126 12.5045 18.4016 12.0636 18.7795 11.1818L19.2081 10.1818C20.0176 8.29294 20.4223 7.34853 19.9777 6.67426C19.5331 6 18.5056 6 16.4507 6H5.74512Z" fill="#1C274C"/>
                    <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill="#1C274C"/>
                    <path d="M18 19.5001C18 18.6716 17.3284 18.0001 16.5 18.0001C15.6716 18.0001 15 18.6716 15 19.5001C15 20.3285 15.6716 21.0001 16.5 21.0001C17.3284 21.0001 18 20.3285 18 19.5001Z" fill="#1C274C"/>
                </svg>          
                <h3>Add to cart</h3>
            </button>
        </div>
        <div :class="{'image-wrapper':true, 'on-order':onOrder}">
            <div class="card-image" :style="'background-image:url('+ imgObject.src +')'"></div>
        </div>
        <div :class ="{'bottom-section':true, 'on-order':onOrder} ">
            <div class="card-text">    
                <h2>{{ imgObject.title }}</h2>
                <div class="title-line"></div>
                <h4>{{ imgObject.text }}</h4>
            </div>
        </div>
        <div class="pricing-container">
            <div class="price"><h2>{{imgObject.price + ' €	'}}</h2></div>
            <div v-if="imgObject.numberProducts" class="number-products">
                <button class="editing-container" v-if="!isEditing" @click="ChangeEditing">
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="25px" height="25px"><path d="M 43.125 2 C 41.878906 2 40.636719 2.488281 39.6875 3.4375 L 38.875 4.25 L 45.75 11.125 C 45.746094 11.128906 46.5625 10.3125 46.5625 10.3125 C 48.464844 8.410156 48.460938 5.335938 46.5625 3.4375 C 45.609375 2.488281 44.371094 2 43.125 2 Z M 37.34375 6.03125 C 37.117188 6.0625 36.90625 6.175781 36.75 6.34375 L 4.3125 38.8125 C 4.183594 38.929688 4.085938 39.082031 4.03125 39.25 L 2.03125 46.75 C 1.941406 47.09375 2.042969 47.457031 2.292969 47.707031 C 2.542969 47.957031 2.90625 48.058594 3.25 47.96875 L 10.75 45.96875 C 10.917969 45.914063 11.070313 45.816406 11.1875 45.6875 L 43.65625 13.25 C 44.054688 12.863281 44.058594 12.226563 43.671875 11.828125 C 43.285156 11.429688 42.648438 11.425781 42.25 11.8125 L 9.96875 44.09375 L 5.90625 40.03125 L 38.1875 7.75 C 38.488281 7.460938 38.578125 7.011719 38.410156 6.628906 C 38.242188 6.246094 37.855469 6.007813 37.4375 6.03125 C 37.40625 6.03125 37.375 6.03125 37.34375 6.03125 Z"/></svg>
                    <div  >{{ imgObject.numberProducts + '   x ' }}</div>
                </button>
                <input @blur="InputDone" v-show="isEditing" :id="'numberProducts'+imgObject.id">
            </div>
        </div>
        <button v-if="onOrder" class="close-product" @click="CloseProduct">X</button>
    </div>
</template>

<script lang="ts">
import { imgObject, orderProduct } from '@/interfaces';
import { defineComponent, PropType } from 'vue'
import FlourishComponent from './FlourishComponent.vue';
export default defineComponent({
    data(){
        return{
            isEditing:false,
        }
    },
    props: {
        imgObject: { type: Object as PropType<orderProduct>, default: null },
        onOrder:{type: Boolean, default:false},
    },
    update()
    {
        if (this.isEditing) {
            const input = document.getElementById('numberProducts' + this.imgObject.id) as HTMLInputElement;
            if (input) {
                input.select();
            }
        }
    },
    methods:{
        EmitAdd(){
            this.$emit('added-item');
        },
        CloseProduct(){
            this.$emit('closed-item',this.imgObject.id);
        },
        ChangeEditing(){
            this.isEditing=true;
            const input = document.getElementById('numberProducts'+this.imgObject.id) as HTMLInputElement;
            input.value = (this.imgObject.numberProducts).toString();
        },
        InputDone(){
            this.isEditing=false;
            const input = document.getElementById('numberProducts'+this.imgObject.id) as HTMLInputElement;
            if(Number(input.value) < 1 || Number.isNaN(Number(input.value)))
                input.value=String(1);
            if(Number(input.value)>100)
                input.value=String(99);
            input.value = String(Math.floor(Number(input.value)))
            this.$emit('new-input', input.value, this.imgObject.id)
        }
    },
    components: { FlourishComponent }
})
</script>

<style scoped>
.sc-wrapper{
    position: relative;
    width: 100%;
}
.bottom-section{
    z-index: 3;
    height: 27%;
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
    overflow: hidden;
}
.pricing-container{
    position: relative ;
    z-index: 4;
}
.price{
    height:8%;
    text-align :center;
}
.number-products{
    position: absolute;
    z-index: 5;
    pointer-events: all;
    top:0px;
    left: 30%;
    height: 30px;
    
}
.number-products > *{
    color:var(--color-a);
    font-weight: bold;
    font-size: 1.5rem;
}
.number-products > input{

    position: absolute;
    display:flex;
    flex-direction: row;
    left: -50px;
    height: 27px;
    width: 80px;
    background-color:var(--color-b);
}

.editing-container{
    position: absolute;
    display:flex;
    flex-direction: row;
    left: -50px;
    height: 27px;
    width: 80px;
    background-color: var(--color-b);

    border: 1px solid var(--color-a);
    outline: 1px solid var(--color-b);
}
.editing-container > svg{
    margin-right: 10px;
    border-radius: 20%;
    padding: 5px;
    background-color: var(--color-a);
    fill: var(--color-b);
    margin: 2px;
    height: 90%;
}
.editing-container > div{
    background-color: var(--color-b);
    height: 25px;
    width: 60px;
}
.card-text{
    z-index: 3;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.card-text > h4{
    margin-left: 25px;
    margin-right: 25px;

    color: color-mix(in srgb, var(--primary-color) 100%, white 50%);
}
.card-text > h2{
    text-align: center;
    font-weight: bold;

    color: var(--primary-color);
}
.title-line{
    width: 80%;
    margin-top: 5px;
    border: 1px solid var(--primary-color);
}
.cart-container{
    z-index: 5;
    position: absolute;
    top:0px;
    right: 10%;
    width: 20%;
    height: 65%;
    background-color: rgba(0,0,0,0.5);
    color:var(--color-a);
    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
}
.cart-wrapper{    
    width: 100%;
    pointer-events: all;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(0,0,0,0.3);
}
.cart-wrapper:hover{
    transition: transform 0.2s ease;
    transform: scale(1.1);
}
.cart-wrapper > h3{
    text-align: center;
}
.cart-wrapper svg path{
    fill: var(--color-a)
}

.image-wrapper{
    height: 65%;
    width: 100%;
}

.card-flourish{
    z-index: 2;
    width: 100%;
    height: 100%;

}
.card-image{
    width: 100%;
    height: 100%;
    background-position: center;
    background-size:cover;
}
.close-product{
    z-index: 5;

    position: absolute;
    font-size: 2rem;
    width: 2.5rem;
    height: 2.5rem;
    top:5%;
    left:5%;
    color: var(--color-a);
    background-color: var(--color-b);
    border: 1px solid var(--color-a);
    outline: 1px solid var(--color-b);
    border-radius: 50%;
    pointer-events: all;
    transition: all 0.5s ease;

}
.close-product:hover{
    color: var(--color-b);
    background-color: var(--color-a);
    transition: all 0.5s ease;
}


@media (max-width:768px)
{
    .number-products{
        left:20%;
    }
}
</style>