<template>
    <header :class="{'navbar-container':true, 'scrolled':isScrolled}">
        <MenuComponent style="z-index:2" :isMenuOpened="isMenuOpened"></MenuComponent>
        <MenuButton @click="OpenMenu" :lightTheme="lightTheme" :isScrolled="isScrolled" :isMenuOpened="isMenuOpened"></MenuButton>
        <ThemeButton @click="ChangeTheme" :lightTheme="lightTheme" :isScrolled="isScrolled"></ThemeButton>
        <div class="navbar-grid">
            <div class="navbar-section-left">
                <ButtonComponent v-for="link in LeftLinks" :text="link.text" :key="link.id" :isCurrent="navState===link.text"></ButtonComponent>
            </div>
            <div class="logo-wrapper">
                <div class="logo" :style="'background:url('+logo+')'"></div>
            </div>
            <div class="navbar-section-right">
                <ButtonComponent v-for="link in RightLinks" :text="link.text" :key="link.id" :isCurrent="navState===link.text"></ButtonComponent>
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonComponent from './ButtonComponent.vue';
import MenuComponent from './MenuComponent.vue';
import ThemeButton from './ThemeButton.vue';
import MenuButton from './MenuButton.vue';
export default defineComponent({
    data() {
        return {
            logo: require('@/assets/VuLogo.png'),
            LeftLinks:[{id:1,text:"Menu"},
            {id:2,text:"Delivery"}],
            RightLinks:[{id:3,text:"About us"},
            {id:4,text:"Locations"},],
            isScrolled: false,
            lightTheme: true,
            isMenuOpened: false,
        };
    },  
    mounted(){
        window.addEventListener('scroll', this.HandleScroll);
    },
    beforeUnmount(){
        window.removeEventListener('scroll',this.HandleScroll);
    },
    props:{
        navState:{
            type:String,
            default:'Home',
        }
    },
    methods:{
        HandleScroll(){
            if(window.scrollY>100)
                this.isScrolled = true;
            else
                this.isScrolled = false;
        },
        ChangeTheme(){
            this.lightTheme = !this.lightTheme;
            this.$emit('themeChanged');

        },
        OpenMenu(){
            this.isMenuOpened = !this.isMenuOpened;
        }
    },
    components: { ButtonComponent, MenuComponent, ThemeButton, MenuButton }
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
    transition: background-color 0.5s ease;

}
.navbar-container.scrolled
{
    transition: background-color 0.5s ease;
    background-color: var(--primary-color);
    color: var(--background-color);
}


.navbar-grid{
    position: relative;
    width: 60%;
    height: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    align-items: center;
}
.logo-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
}
.logo{
    background-position: center;
    background-size: 100% 50px;
    background-repeat: no-repeat;
}
.navbar-section-right{
    display:flex;
    flex-direction: row;
    gap: 50px;
}
.navbar-section-left{
    display: flex;
    flex-direction:row;
    justify-content: flex-end;
    gap: 50px;

}

@media (max-width:768px)
{
    [class*='navbar-section']{
        width: 0px;
        font-size:0px;
    }
}



</style>