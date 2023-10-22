<template>
    <header class="navbar-container">
        <MenuComponent style="z-index:2" @themeChanged="ChangeTheme" :lightTheme="lightTheme" :isMenuOpened="isMenuOpened"></MenuComponent>
        <MenuButton @click="OpenMenu" :lightTheme="lightTheme" :isScrolled="isScrolled" :isMenuOpened="isMenuOpened"></MenuButton>
        <ThemeButton :class="{'theme':true, 'scrolled':isScrolled}" @click="ChangeTheme" :lightTheme="lightTheme" :isScrolled="isScrolled"></ThemeButton>
        <div :class="{'navbar-grid':true, 'scrolled':isScrolled}">
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
import { defineComponent} from 'vue'
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
            isMenuOpened: false,
            lightTheme: true,
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
        },
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
    display: flex;
    flex-direction: row;
    pointer-events: none;

}
.navbar-grid{
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 3fr 1fr 3fr;
    align-items: center;
    border-bottom: 2px solid var(--primary-color);
    background-color: var(--background-color);
    transition: transform 0.5s ease;

}
.navbar-grid.scrolled
{
    transition: transform 0.5s ease;
    transform: translateY(-100%);
}
.theme{
    position: absolute;
    top:5px;
    transition: transform 0.5s ease;
}
.theme.scrolled{
    transition: transform 0.5s ease;
    transform: translateY(-100%);
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
[class*= 'navbar-section-']{
    display:flex;
    flex-direction: row;
    gap: 50px;

}
.navbar-section-left{
    justify-content: flex-end;
}

@media (max-width:768px)
{
    [class*='navbar-section-']{
        width: 0px;
        font-size:0px;
    }
}



</style>