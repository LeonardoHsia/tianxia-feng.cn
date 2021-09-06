<template>
    <div class="project-desc-item">
        <slot name="img" />
        <slot name="desc" />
    </div>
</template>

<script>
export default {
    name: '',
    data () {
        return {
            prefix: 'projects'
        }
    }
}
</script>

<style lang="scss">
.project-desc-item {
    height: 20rem;
    overflow: hidden;
    background: #FFF;
}
</style>
