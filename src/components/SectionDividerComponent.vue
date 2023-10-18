<template>
    <div class="section-divider">
        {{ text }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
        

        return {}
    },
    props:{
        text:{
            type:String,
            default:''
        }
    }
})
</script>

<style scoped>
.section-divider{
    padding-left: 50px;
    padding-right: 50px;

    height: 100px;
    font-size:3em;
    display: flex;
    align-items: center;
    border:3px solid;
    margin-bottom: 10px;
    margin-top: 10px;
}
</style>