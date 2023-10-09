<template>
    <header class="navbar-container">
        <div class="navbar-elements">
            <div class="logo-wrapper" >
                <img class="logo" :src="logo"/>
            </div>
            <div class="main-section">
                <div class="buttons-container">
                    <ButtonComponent v-for="link in Links" :text="link.text" :key="link.id" :isCurrent="navState===link.text"></ButtonComponent>
                </div>
            </div>
            <ul class="icons-container">
                <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="44px" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
            </ul>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonComponent from './ButtonComponent.vue';
export default defineComponent({
    data() {
        return {
            logo: require('@/assets/french-eagle.png'),
            cart: require('@/assets/icons/cart-shopping-solid.svg'),
            user: require('@/assets/icons/user-solid.svg'),
            mag: require('@/assets/icons/magnifying-glass-solid.svg'),
            Links:[{id:1,text:"Home"},
            {id:2,text:"Shop"},
            {id:3,text:"Account"}
        ]
        };
    },
    props:{
        navState:{
            type:String,
            default:'Home',
        }
    },
    components: { ButtonComponent }
})
</script>

<style scoped>

.navbar-container{
    z-index: 5;
    position:fixed;
    top: 0px;
    width: 100%;
    height: var(--navbar-height);
    justify-content: center;
    background-color: var(--background-color);

    display: flex;
    flex-direction: row;
}
.navbar-elements{
    position: relative;
    width: 90%;
    height: 100%;
    display: flex;

}
.logo{
    width: calc(266px/2);
    height: calc(250px/2);
    background-position: center;
    background-size: cover;
}
.icons-container{
    width: 10%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
}
.main-section{
    height: 100%;
    width: 70%;
    display:flex;
}
.buttons-container{
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
}

@media (max-width:768px)
{
.logo{
    --logo-w:266px;
    --logo-h:250px;
    width: calc(var(--logo-w)/4);
    height: calc(var(--logo-h)/4);
    }
}



</style>