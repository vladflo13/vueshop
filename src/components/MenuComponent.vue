<template>
    <div>
        <Transition name="slide">
            <div v-if="isMenuOpened" class="menu-container">
                <div class="menu-ghost-space"></div>
                <div class="button-container">
                    <div class="button-wrapper" v-for="link in Links" :key="link.id">
                        <ButtonComponent  :text="link.text"></ButtonComponent>
                        <div class="button-line"></div>
                    </div>
                </div>
                <ThemeButton :isPartOfMenu="true" :lightTheme="lightTheme" class ="theme-button" @click="ChangeTheme"></ThemeButton>
            </div>
            </Transition>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonComponent from './ButtonComponent.vue';
import ThemeButton from './ThemeButton.vue';

export default defineComponent({
    data() {
        return {
            Links: [
                { id: 1, text: "Menu" },
                { id: 2, text: "Delivery" },
                { id: 3, text: "About us" },
                { id: 4, text: "Locations" }
            ],
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
        ChangeTheme(){
            this.$emit('themeChanged')
        }
    },
    components: { ButtonComponent, ThemeButton }
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
    left: 100px;
    top: 85%;
}
</style>