<template>
        <button class="button-wrapper" >
            <div :class="{'underline-text':true,'underline-text-current':isCurrent}">{{ text }}</div>
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
    props: {
        text : {
            type: String,
            default: ''
        },
        isCurrent:{
            type: Boolean,
            default: false,
        }
    },
})
</script>

<style scoped>
.button-wrapper{
    font-size: 25px;
    border: none;
    margin-left: 5px;
    height: 80%;
    margin-top: 5px;
    background-color: var(--background-color);
}
.underline-text:hover, .underline-text-current{
    text-decoration: underline;
}
</style>