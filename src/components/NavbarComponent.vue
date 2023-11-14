<template>
    <nav class="navbar-container">
        <MenuComponent style="z-index:2" @themeChanged="ChangeTheme" :lightTheme="lightTheme" :isMenuOpened="isMenuOpened"></MenuComponent>
        <MenuButton :class="{'left-buttons':true, 'fixed':isFixed}" @click="OpenMenu" :lightTheme="lightTheme" :isMenuOpened="isMenuOpened"></MenuButton>
        <div :class="{'right-buttons':true, 'fixed':isFixed}">
            <CartButton @click="ChangeOrderOpen" :numberItems="numberItems" :lightTheme="lightTheme"></CartButton>
            <ThemeButton  @click="ChangeTheme" :lightTheme="lightTheme"></ThemeButton>
        </div>
        <div :class="{'navbar-grid':true, 'scrolled':isScrolled }">
            <div class="navbar-section-left">
                <router-link to="/" >
                    <ButtonComponent  :text="LeftLinks[0].text" :key="LeftLinks[0].id" :isCurrent="navState===LeftLinks[0].text"></ButtonComponent>
                </router-link>
                <router-link to ="/search">
                    <ButtonComponent :previousOrder="previousOrder"  :text="LeftLinks[1].text" :key="LeftLinks[1].id" :isCurrent="navState===LeftLinks[1].text"></ButtonComponent>
                </router-link>
            </div>
            <div class="logo-wrapper">
                <div class="logo" :style="'background:url('+logo+')'"></div>
            </div>
            <div class="navbar-section-right">
                <router-link to="/account">
                    <ButtonComponent  :text="RightLinks[0].text" :key="RightLinks[0].id" :isCurrent="navState===RightLinks[0].text"></ButtonComponent>
                </router-link>
                <router-link to="/locations">
                    <ButtonComponent  :text="RightLinks[1].text" :key="RightLinks[1].id" :isCurrent="navState===RightLinks[1].text"></ButtonComponent>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import ButtonComponent from './ButtonComponent.vue';
import MenuComponent from './MenuComponent.vue';
import ThemeButton from './ThemeButton.vue';
import MenuButton from './MenuButton.vue';
import CartButton from './CartButton.vue';
import { orderProduct } from '@/interfaces';
export default defineComponent({
    data() {
        return {
            logo: require('@/assets/VuLogo.png'),
            LeftLinks:[{id:1,text:"Menu"},
            {id:2,text:"Search"}],
            RightLinks:[{id:3,text:"Account"},
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
            default:'Menu',
        },
        isFixed:{
            type:Boolean,
            default:false,
        },
        numberItems:{
            type:Number,
            default:0
        },
        previousOrder:{
            type: Array as () => orderProduct[],
            default: null,
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
        },
        ChangeOrderOpen(){
            this.$emit('changeOrderOpen');
        }
    },
    components: { ButtonComponent, MenuComponent, ThemeButton, MenuButton, CartButton }
})
</script>

<style scoped>
.click{
    z-index: 40;
    pointer-events: all;
}
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
.right-buttons{
    position: absolute;
    height: var(--navbar-height);
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    right:30px;
    top:0px;
    gap: 10px;
    transition: top 0.5s ease;
}
.right-buttons.fixed{
    top: -15px;
    transition: top 0.5s ease;
}
.right-buttons > button{
    pointer-events: all;
}
.left-buttons{
    top:0px;
    transition: top 0.5s ease;

}
.left-buttons.fixed{
    top: -20px;
    transition: top 0.5s ease;
}
@media (max-width:1080px)
{
    [class*='navbar-section-']{
        width: 0px;
        font-size:0px;
    }
}
@media (max-width:768px)
{
    [class*='navbar-section-']{
        width: 0px;
        font-size:0px;
    }
    .navbar-grid.scrolled
    {
        transition: transform 0.5s ease;
        transform: translateY(0);
    }
    .right-buttons{
        gap:40px;
    }
    .right-buttons.fixed{
        top: 0px;
    }
    .left-buttons.fixed{
        top: 0px;
        transition: top 0.5s ease;
    }
}



</style>