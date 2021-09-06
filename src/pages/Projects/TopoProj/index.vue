<template>
    <div style="height: 100%;">
        <image-slider-cmpt :images="images"></image-slider-cmpt>
    </div>
</template>

<script>
import ImageSliderCmpt from '@components/ImageSliderCmpt'

export default {
    name: '',
    data () {
        return {
            prefix: '',
            images: [
                {
                    title: '菜单',
                    url: ''
                }
            ]
        }
    },
    created () {
        // 创建地图
    },
    methods: {

    },
    components: {
        'image-slider-cmpt': ImageSliderCmpt
    }
}
</script>

<style lang="scss" scoped>

.section {
    display: flex;
    justify-content: stretch;

    .image-part, .desc-part {
        flex-basis: 50%;
    }

    .image-part .computer {
        width: 100%;
        height: 100%;
        // background: url('~@assets/images/computer.png') no-repeat;
        background-size: 75%;
        background-position: center;
        position: relative;

        .computer-image {
            height: 16rem;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }

        img.main {
            width: 75%;
            // height: 75%;
        }
    }

}

</style>
