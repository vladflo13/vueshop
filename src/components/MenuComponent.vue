<template>
    <div>
        <Transition name="slide">
            <div v-if="isMenuOpened" class="menu-container">
                <div class="menu-ghost-space"></div>
                <div class="button-container">
                    <router-link to="/">    
                        <ButtonComponent  class="button-wrapper" :text="'Menu'"></ButtonComponent>
                    </router-link>
                    <div class="button-line"></div>
                    <router-link to="/delivery">    
                        <ButtonComponent  class="button-wrapper" :text="'Search'"></ButtonComponent>
                    </router-link>
                    <div class="button-line"></div>
                    <router-link to="/account">    
                        <ButtonComponent  class="button-wrapper" :text="'Account'"></ButtonComponent>
                    </router-link>
                    <div class="button-line"></div>
                    <router-link to="/locations">    
                        <ButtonComponent  class="button-wrapper" :text="'Locations'"></ButtonComponent>
                    </router-link>
                </div>
            </div>
            </Transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonComponent from './ButtonComponent.vue';

export default defineComponent({
    data() {
        return {
        };
    },
    props: {
        lightTheme: {
            type:Boolean,
            default:true
        },
        isMenuOpened: {
            type: Boolean,
            default: false,
        }
    },
    methods:{
    },
    components: { ButtonComponent }
})
</script>

<style scoped>
.menu-container{
    outline: 4px solid var(--color-b);
    color: var(--color-b);
    background-color: var(--color-a);
    left: 0px;
    position: absolute;
    width: 300px;
    height: 100vh;
    display: flex;
    flex-direction: column;
}
.menu-ghost-space{
    height: 20%;
}
.button-container{
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.button-wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.button-line{
    width: 100px;
    margin:20px;
    border: 1px solid black;
}
.slide-enter-from, .slide-leave-to{
    transform: translateX(-100%);
}
.slide-enter-active, .slide-leave-active{
    transition: transform 0.5s ease;
}
.theme-button{
    position: absolute;
    left: 108px; /* icon width 65px, nav-menu width 150px*/
    top: 65%;
}
</style>