<template>
    <div :class="{'testimony-wrapper':true, 'invert':styleMode}">
        <div class="corner-tr"></div>
        <div class="corner-tl"></div>
        <div class="corner-br"></div>
        <div class="corner-bl"></div>
        <div class="portrait-wrapper">
            <div class="portrait" :style="'background-image:url('+imgSrc+')'"></div>
        </div>
        <div class="testimony">{{ '" '+testimonyBody +'"'}}</div>
        <div class="author">{{ '- ' + customerName }}</div>
        <div></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        return {}
    },
    props:{
        customerName:{type:String, default:'Lorem, ipsum.'},
        testimonyBody:{type:String, default:'Nostrud proident sint anim non voluptate cillum veniam esse enim magna fugiat culpa sit.'},
        imgSrc:{type:String, default:''},
        styleMode:{type:Boolean, default:false},
    }
})
</script>

<style scoped>
.testimony-wrapper{
    --testimony-bg: var(--primary-color);
    --testimony-fcolor: var(--background-color);
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--testimony-bg);
    color: var(--testimony-fcolor);
    border: 2px solid var(--testimony-fcolor);
    outline: 2px solid var(--testimony-bg);
    overflow: hidden;
    justify-content: center;
    align-items: center;
}
.invert{
    --testimony-bg:  var(--background-color);
    --testimony-fcolor:var(--primary-color);
}
[class*='corner-']{
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--testimony-bg);
    border: 2px solid var(--testimony-fcolor);
    outline: 2px solid var(--testimony-bg);
}
.corner-tr{
    top:-15px;
    right: -15px;
}
.corner-tl{
    top:-15px;
    left: -15px;
}
.corner-br{
    bottom:-15px;
    right: -15px;
}
.corner-bl{
    bottom:-15px;
    left: -15px;
}
.portrait-wrapper{
    height: 20%;
    padding-top: 5px;;
}
.testimony{
    height: 65%;
    font-size: 1.25rem;
    padding: 10px;
    margin: 5px;
    text-align: center;
    border: 2px solid var(--testimony-fcolor);
    box-shadow: 2px 2px rgba(0,0,0,0.4);
}
.portrait{
    --portrait-size:60px;
    width: var(--portrait-size);
    height: var(--portrait-size);
    background-color: aliceblue;
    border-radius: 50%;
    border: 2px solid var(--testimony-fcolor);
    box-shadow: 2px 2px rgba(0,0,0,0.4);
    background-position: center;
    background-size: cover;
}
.author{
    text-align:center;
    margin: 10px;
    font-size: 1.5rem;
    font-weight: bold;
}
@media (max-width:768px) {
    .testimony{
        font-size: 1.1rem;
    }
    .portrait{
        --portrait-size:50px;

    }
}
</style>