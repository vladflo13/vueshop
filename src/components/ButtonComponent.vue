<template>
        <button class="button-wrapper">
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
    font-size: 2em;
    margin-left: 25px;
}
@media (max-width: 768px)
{
    .button-wrapper{
    font-size: 1em;
    }
}
.underline-text:hover, .underline-text-current{
    text-decoration: underline;
}
</style>