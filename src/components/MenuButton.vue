<template>
        <div class='menu-wrapper'>
            <button :class="{'icon-wrapper':true, 'icon-adjust':isMenuOpened}">
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
    top:0px;
    left:0px;
}

.icon-wrapper{
    position: absolute;
    top: calc((var(--navbar-height)/2) - (var(--icon-size)/2));
    left: calc(var(--icon-size)/2);
    transition: all 0.5s ease;
}
.icon-adjust {
    left: 130px;     /* 300px is the side menu*/
    transition: left 0.5s ease;
}
@media (max-width:768px)
{
    .move-up{
        top: 0px;
    }
    .icon-adjust{
        left: calc(120px + (var(--icon-size) / 2));
        transition: left 0.5s ease;
    }
    .icon-wrapper{
        transition: all 0.5s ease;
    }
    .icon-wrapper > svg{
        --icon-size:25px;
        width: 25px;
    }
    
}
</style>