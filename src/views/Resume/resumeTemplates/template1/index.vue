<template>
    <div >
        template1111111
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    created () {
        console.log(this.data)
    },
    data () {
        return { }
    },
    methods: {

    }
}
</script>

<style lang="scss">

</style>
