<template>
        <button class="button-wrapper" >
            <div class="underline-text">{{ text }}</div>
        </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        return{
            hovered: false
        }
    },
    setup () {
        return {
        }
    },
    props: {
        text : {
            type: String,
            default: ''
        }
    },
    methods:{
    },
})
</script>

<style scoped>
.button-wrapper{
    font-size: 3em;
    border: none;
    margin-left: 5px;
    height: 80%;
    margin-top: 5px;
}
.underline-text:hover{
    text-decoration: underline;
}
</style>