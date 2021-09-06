<template>
    <div class="project-item">
        <image-zoom-cmpt :image="getImage(screenshot)" :size="{height: '16rem'}"></image-zoom-cmpt>
        <p class="peoject-name">{{ project.name }}</p>
    </div>
</template>

<script>
import { getImageAbsoluteUrl } from '@utils'
import ImageZoomCmpt from '@components/ImageZoomCmpt'
export default {
    name: '',
    props: {
        project: {
            type: Object,
            default: () => ({
                name: '',
                meta: {}
            })
        }
    },
    data () {
        return {
            prefix: 'projects'
        }
    },
    computed: {
        screenshot () {
            const { meta = {} } = this.project
            const screenshot = meta.screenshot || []
            return screenshot
        }
    },
    components: {
        'image-zoom-cmpt': ImageZoomCmpt
    },
    methods: {
        getImage (url) {
            return getImageAbsoluteUrl(this.prefix + url)
        }
    }
}
</script>

<style lang="scss">
.project-item {
    width: 100%;
    height: 100%;

    .peoject-name {
        text-align: center;
    }
}
</style>
