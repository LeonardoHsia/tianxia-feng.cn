<template>
    <div class="project-item">
        <image-slider-cmpt :images="screenshots" prefix="projects"></image-slider-cmpt>
        {{ project.name }}
    </div>
</template>

<script>
import ImageSliderCmpt from '@components/ImageSliderCmpt'
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
        return { }
    },
    computed: {
        screenshots () {
            const { meta = {} } = this.project
            const screenshots = meta.screenshots || []
            console.log(screenshots)
            return screenshots
        }
    },
    components: {
        'image-slider-cmpt': ImageSliderCmpt
    }
}
</script>

<style lang="scss">
.project-item {
    width: 100%;
    height: 100%;
}
</style>
