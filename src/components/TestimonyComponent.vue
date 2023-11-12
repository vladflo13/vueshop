<template>
    <div class="testimony-wrapper">
        <div class="corner-tr"></div>
        <div class="corner-tl"></div>
        <div class="corner-br"></div>
        <div class="corner-bl"></div>
        <div class="portrait-wrapper">
            <div class="portrait"></div>
        </div>
        <div class="testimony">{{ testimonyBody }}</div>
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
        testimonyBody:{type:String, default:'Nostrud proident sint anim non voluptate cillum veniam esse enim magna fugiat culpa sit.'}
    }
})
</script>

<style scoped>
.testimony-wrapper{
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: var(--primary-color);
    color: var(--background-color);
    border: 2px solid var(--background-color);
    outline: 2px solid var(--primary-color);
    overflow: hidden;
    justify-content: center;
    align-items: center;
}
[class*='corner-']{
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: var(--primary-color);
    border: 2px solid var(--background-color);
    outline: 2px solid var(--primary-color);
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
    border: 2px solid var(--background-color);
    box-shadow: 2px 2px rgba(0,0,0,0.4);
}
.portrait{
    width: 60px;
    height: 60px;
    background-color: aliceblue;
    border-radius: 50%;
    border: 2px solid var(--background-color);
    box-shadow: 2px 2px rgba(0,0,0,0.4);

}
.author{
    text-align:center;
    margin: 10px;
    font-size: 1.5rem;
}
</style>