<template>
    <button :class="{'menu-wrapper':true, 'icon-adjust':isMenuOpened}">
            <svg :class="{'menu-shine1':(lightTheme&&isScrolled&&!isMenuOpened),'menu-shine2':(!lightTheme&&!isScrolled&&!isMenuOpened)}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px">
                <g fill="#1c274c" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                    <g transform="scale(5.12,5.12)">
                        <path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path></g></g></svg>
        </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        lightTheme:{
            type:Boolean,
            default:false
        },
        isScrolled:{
            type:Boolean,
            default:false
        },
        isMenuOpened:{
            type:Boolean,
            default:false
        }
    }
})
</script>

<style scoped>
.menu-shine1 > g{
    fill:var(--background-color);
}
.menu-shine2 > g{
    fill:var(--color-a)
}
.menu-wrapper{
    z-index: 3;
    position: absolute;
    top: calc(50% - 25px);
    left: 5%;
    transition: left 0.5s ease;
}
.icon-adjust {
    left: 125px;
    transition: left 0.5s ease;
}
</style>