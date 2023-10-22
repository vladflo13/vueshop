<template>
        <div class='menu-wrapper'>
            <button :class="{'icon-wrapper':true, 'icon-adjust':isMenuOpened, 'move-down':isInMenuRange}">
                    <svg :class="{'menu-shine2':(!lightTheme&&!isMenuOpened)}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="50px" height="50px">
                        <g fill="#1c274c" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal">
                            <g transform="scale(5.12,5.12)">
                                <path d="M0,7.5v5h50v-5zM0,22.5v5h50v-5zM0,37.5v5h50v-5z"></path></g></g></svg>
            </button>
        </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props:{
        lightTheme:{
            type:Boolean,
            default:false
        },
        isInMenuRange:{
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


.menu-shine2 > g{
    fill:var(--color-a)
}
.menu-wrapper{
    --icon-size:50px;
    pointer-events:all;
    z-index: 3;
    position: absolute;
    width: calc(var(--icon-size)*3);
    height: calc(var(--navbar-height));
    top: 0px;
    left: 0px;
}

.icon-wrapper{
    position: absolute;
    top: calc(50% - var(--icon-size) / 2);
    left: calc(50% - var(--icon-size) / 2);
    transition: all 0.5s ease;
}
.move-down{
    top: 20px;
}
.icon-adjust {
    left: 125px;
    transition: left 0.5s ease;
}
@media (max-width:768px)
{
    .move-down{
        position: fixed;
        top: 90%;
        transition: top 0.5s ease;
        background-color: var(--background-color);
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 3px;
        border: 2px solid var(--primary-color);
    }
    .icon-adjust{
        left: calc(75px + (76px / 2));
        transition: left 0.5s ease;
    }
    .icon-wrapper{
        transition: all 0.5s ease;
    }
    
}
</style>