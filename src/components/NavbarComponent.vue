<template>
    <div class="navbar-container">
        <div class="logo" :style="'background-image:url('+ logo +')'"></div>
        <img :src="mag"/>
        <img :src="user"/>
        <img :src="cart"/>
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
    setup () {
        return {
        }
    },
    components: {}
})
</script>

<style scoped>

.navbar-container{
    position:sticky;
    top: 0px;
    z-index: 5;
    width: 100%;
    height: 10%;
    background-color: var(--secondary-color);
    align-items: right;
    display: flex;
    flex-direction: row;
}
.logo{
    width: 25%;
    height: 100%;
    position: sticky;
    background-position: center;
    background-size: cover;
}
.navbar-element{
    position: relative;
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
}


</style>