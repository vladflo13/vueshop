<template>
        <button class="button-wrapper">
            <div class="text">{{ text }}</div>
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
    font-size: 2em;
    pointer-events: all;
    margin-bottom: 5px;
    cursor: pointer;
}
.text{
    border-bottom: 2px solid transparent;
    text-decoration: none;

}
.text:hover{
    border-bottom: 2px solid var(--primary-color);
}
</style>