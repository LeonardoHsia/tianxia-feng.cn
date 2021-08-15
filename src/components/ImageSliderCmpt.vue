<template>
    <div class="image-slider">
        <div class="image" v-for="(image, idx) in images" :key="idx" :style="{backgroundImage: `url(${getImageAbsoluteUrl(image)})`}"></div>
    </div>
</template>

<script>
import demoImage from '@assets/images/demo.png'
export default {
    name: '',
    props: {
        images: {
            type: Array,
            default: () => []
        },
        prefix: {
            type: String,
            default: ''
        }
    },
    data () {
        return { }
    },
    methods: {
        getImageAbsoluteUrl (relativeUrl) {
            try {
                return require(`@assets/images/${this.prefix}/${relativeUrl}`)
            } catch (e) {
                return demoImage
            }
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
