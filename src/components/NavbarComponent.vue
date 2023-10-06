<template>
    <header class="navbar-container">
        <div class="logo-wrapper" >
            <img class="logo" :src="logo"/>
        </div>
        <div class="buttons-container">
            <ButtonComponent :text="'Home'"></ButtonComponent>
            <ButtonComponent :text="'Shop'"></ButtonComponent>
            <ButtonComponent :text="'Account'"></ButtonComponent>
        </div>
        <ul class="icons-container">
            <li class="icon">
                <img :src="cart"/>
            </li>
            <li class="icon">
                <img :src="user"/>
            </li>            
            <li class="icon">
                <img :src="mag"/>
            </li>
        </ul>
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
            mag: require('@/assets/icons/magnifying-glass-solid.svg')
        };
    },
    components: { ButtonComponent }
})
</script>

<style scoped>

.navbar-container{
    position:fixed;
    top: 0px;
    z-index: 5;
    width: 100%;
    height: 76px;
    background-color: var(--secondary-color);
    display: flex;
    flex-direction: row;
}
.logo-wrapper{
    width: 20%;
    height: 100%;
}
.logo{
    position: absolute;
    top: 50%;
    left: 1em;
    width: calc(266px/2);
    height: calc(250px/2);
    background-position: center;
    background-size: cover;
}
@media (max-width:768px)
{
    .logo{
    top: 50%;
    left: 1em;
    width: calc(266px/4);
    height: calc(250px/4);
    }
}
.icon{
    position: relative;
    width: 24px;
    height: 24px;
    background-position: center;
    background-size: center;
    background-repeat: none;
}
.icons-container{
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: row-reverse;
    list-style-type: none;
    justify-content: center;
    align-items: center;
}
.navbar-element{
    position: relative;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
}
.buttons-container{
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
}

</style>