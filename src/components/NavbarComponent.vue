<template>
    <div class="navbar-container">
        <div class="logo-wrapper" >
            <img class="logo" :src="logo"/>
        </div>
        <div class="buttons-container"></div>
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
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    data(){
        return{
            logo:require('@/assets/french-eagle.png'),
            cart:require('@/assets/icons/cart-shopping-solid.svg'),
            user:require('@/assets/icons/user-solid.svg'),
            mag:require('@/assets/icons/magnifying-glass-solid.svg')
        }
    },
})
</script>

<style scoped>

.navbar-container{
    position:sticky;
    top: 0px;
    z-index: 5;
    width: 100%;
    height: 5em;
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
    top: 0.3em;
    left: 1em;
    width: calc(266px/2);
    height: calc(250px/2);
    background-position: center;
    background-size: cover;
}
@media (max-width:768px)
{
    .logo{
        top: 1.5em;
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
}

</style>