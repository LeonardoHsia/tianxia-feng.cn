<template>
    <div class="image-zoom" :style="{width, height}">
        <div class="image-zoom-inner" :style="{backgroundImage: `url(${image})`}"></div>
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        image: {
            type: String,
            default: ''
        },
        size: {
            type: Object,
            default: () => {}
        }
    },
    data () {
        return { }
    },
    computed: {
        width () {
            return this.size.width || '100%'
        },
        height () {
            return this.size.height || '10rem'
        }
    }
}
</script>

<style lang="scss">
.image-zoom {
    border: 1px dashed;
    overflow: hidden;

    .image-zoom-inner {
        width: 100%;
        height: 100%;
        transition: transform .3s ease-in-out;
        background-repeat: no-repeat;
        background-size: cover;
    }

    &:hover {
        .image-zoom-inner {
            transform: scale(1.2);
        }
    }
}
</style>
