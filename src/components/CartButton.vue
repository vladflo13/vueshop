<template>
    <button :class="{'cart-wrapper':true, 'dark-theme':!lightTheme}">
        <div class="cart-image">
            <svg width="var(--cart-size)" height="var(--cart-size)" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.28869 2.76279C1.41968 2.36983 1.84442 2.15746 2.23737 2.28845L2.50229 2.37675C2.51549 2.38115 2.52864 2.38554 2.54176 2.38991C3.16813 2.59867 3.69746 2.7751 4.11369 2.96873C4.55613 3.17456 4.94002 3.42965 5.23112 3.83352C5.52221 4.2374 5.64282 4.68226 5.69817 5.16708C5.75025 5.62318 5.75023 6.18114 5.7502 6.84139L5.7502 9.49996C5.7502 10.9354 5.7518 11.9365 5.85335 12.6918C5.952 13.4256 6.13245 13.8142 6.40921 14.091C6.68598 14.3677 7.07455 14.5482 7.80832 14.6468C8.56367 14.7484 9.56479 14.75 11.0002 14.75H18.0002C18.4144 14.75 18.7502 15.0857 18.7502 15.5C18.7502 15.9142 18.4144 16.25 18.0002 16.25H10.9453C9.57774 16.25 8.47542 16.25 7.60845 16.1334C6.70834 16.0124 5.95047 15.7535 5.34855 15.1516C4.74664 14.5497 4.48774 13.7918 4.36673 12.8917C4.25017 12.0247 4.25018 10.9224 4.2502 9.55484L4.2502 6.883C4.2502 6.17 4.24907 5.69823 4.20785 5.33722C4.16883 4.99538 4.10068 4.83049 4.01426 4.71059C3.92784 4.59069 3.79296 4.47389 3.481 4.32877C3.15155 4.17551 2.70435 4.02524 2.02794 3.79978L1.76303 3.71147C1.37008 3.58049 1.15771 3.15575 1.28869 2.76279Z" fill="var(--cart-color-a)"/>
                <path opacity="0.5" d="M5.74512 6C5.75008 6.25912 5.75008 6.53957 5.75007 6.8414L5.75006 9.5C5.75006 10.9354 5.75166 11.9365 5.85321 12.6919C5.86803 12.8021 5.8847 12.9046 5.90326 13H16.0221C16.9815 13 17.4612 13 17.8369 12.7523C18.2126 12.5045 18.4016 12.0636 18.7795 11.1818L19.2081 10.1818C20.0176 8.29294 20.4223 7.34853 19.9777 6.67426C19.5331 6 18.5056 6 16.4507 6H5.74512Z" fill="var(--cart-color-a)"/>
                <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" fill="var(--cart-color-a)"/>
                <path d="M18 19.5001C18 18.6716 17.3284 18.0001 16.5 18.0001C15.6716 18.0001 15 18.6716 15 19.5001C15 20.3285 15.6716 21.0001 16.5 21.0001C17.3284 21.0001 18 20.3285 18 19.5001Z" fill="var(--cart-color-a)"/>
            </svg>
        </div>
        <div class="new-item"></div>
        <div class="counter" v-if="CheckChange()"><h2>{{ numberItems }}</h2></div>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        return {
            pastItems:0
        }
    },
    props:{
        numberItems:{
            type:Number,
            default: 0
        },
        lightTheme:{
            type:Boolean,
            default:true
        }
    },
    methods:{
        CheckChange(){
            if(this.pastItems!=this.numberItems)
            {
                if(this.numberItems>this.pastItems)
                    this.StateAdd();
                else
                    this.StateRemove();
                this.pastItems=this.numberItems;

            }
            return this.numberItems>0;
        },
        StateAdd(){
            const element = document.querySelector('.new-item');
            element?.classList.add('animate-add');
            element?.addEventListener('animationend',()=>{
                element.classList.remove('animate-add');
            });
        },
        StateRemove(){
            const element = document.querySelector('.new-item');
            element?.classList.add('animate-remove');
            element?.addEventListener('animationend',()=>{
                element.classList.remove('animate-remove');
            });
        }
    }
})
</script>

<style scoped>
.cart-wrapper{
    --cart-size:64px;
    width: var(--cart-size);
    height: var(--cart-size);
    cursor: pointer;

    --cart-color-a: #1C274C;
}
.dark-theme{
    --cart-color-a: var(--color-a)
}
.new-item{
    z-index: 2;
    position: absolute;
    border-radius: 50%;
    width: 20%;
    height: 20%;
    opacity: 0;
    background-color: var(--cart-color-a);
    left: 15%;
    top: 30%;
}
.animate-add{
    animation-name: drop-in-fade;
    animation-duration: 0.5s;
}
.animate-remove{
    animation-name: drop-out-fade;
    animation-duration: 0.5s;
}
.counter{
    z-index: 3;
    position: absolute;

    border-radius: 50%;
    width: 20%;
    height: 20%;
    background-color: var(--cart-color-a);
    left: 15%;
    top: 30%;

    text-align: center;
    color: var(--background-color);
    margin-bottom: 10px;
    animation-name: drop-in;
    animation-duration: 0.5s;

}
@keyframes drop-in {
    0% {transform: translateY(-100%);}
    100% {transform: translateY(0%);}
}
@keyframes drop-in-fade{

    0% {transform: translateY(-100%); opacity:1;}
    100% {transform: translateY(0%); opacity: 0;}
}
@keyframes drop-out-fade{

    0% {transform: translateY(0%); opacity:1;}
    100% {opacity: 0; transform: translateY(-100%);}
}
@media (max-width: 768px) {
    .cart-wrapper{
        --cart-size:32px;
    }
    .counter, .new-item{
        left:40%;
        width: 20%;
        height: 40%;
    }
}
</style>