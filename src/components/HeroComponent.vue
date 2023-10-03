<template>
    <div>
        <img :src="imgSrc"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data () {
        return {
            imgSrc: require('@/assets/hero-pie.jpg')
        }
    }
})
</script>

<style scoped>

</style>