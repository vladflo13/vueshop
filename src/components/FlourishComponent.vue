<template>
    <div class="flourish-area">
        <div class="border"></div>
        <div class="corner-tr"></div>
        <div class="corner-tl"></div>
        <div class="corner-bl"></div>
        <div class="corner-br"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

.flourish-area{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    box-sizing: border-box;
    --flourish-unit: 50px;
    
}
.border{
    width: 100%;
    height: 100%;
    border: 2px solid var(--primary-color);
    
}
[class*='corner-']{
    z-index: 2;
    position: absolute;
    width: calc(var(--flourish-unit));
    height: calc(var(--flourish-unit));
    border: 2px solid var(--primary-color);
    background-color: var(--background-color);
    border-radius: 50%;
}
.corner-tr{
    top:calc(var(--flourish-unit)/(-2));
    right:calc(var(--flourish-unit)/(-2));
}
.corner-tl{
    top:calc(var(--flourish-unit)/(-2));
    left:calc(var(--flourish-unit)/(-2));
}
.corner-br{
    bottom:calc(var(--flourish-unit)/(-2));
    right:calc(var(--flourish-unit)/(-2));
}
.corner-bl{
    bottom:calc(var(--flourish-unit)/(-2));
    left:calc(var(--flourish-unit)/(-2));
}
@media (max-width: 778px)
{
    .section-divider{
        --flourish-unit: 25px;
    }
}
</style>