<template>
    <div>
        test
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        renderFn: {
            type: Function,
            default: () => {
                return () => {}
            }
        }
    },
    data () {
        return { }
    },
    render: this.renderFn
}
</script>

<style lang="scss">

</style>
