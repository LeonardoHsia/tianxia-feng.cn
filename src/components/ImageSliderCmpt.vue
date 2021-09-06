<template>
    <div class="image-slider">
        <div class="image" v-for="(image, idx) in images" :key="idx" :style="{backgroundImage: `url(${getImage(image)})`}"></div>
    </div>
</template>

<script>
import { getImageAbsoluteUrl } from '@utils'
export default {
    name: '',
    props: {
        images: {
            type: Array,
            default: () => []
        }
    },
    data () {
        return { }
    },
    methods: {
        getImage (relativeUrl) {
            return getImageAbsoluteUrl(relativeUrl)
        }
    }
}
</script>

<style lang="scss" scoped>
.image-slider {
    width: 100%;
    height: 100%;
    position: relative;

    .image {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        position: absolute;

        &:first-child {
            z-index: 1;
        }
    }
}
</style>
