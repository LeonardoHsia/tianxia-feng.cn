<template>
    <div class="slide-cmpt-item" :style="styleObj">
        test
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        item: {
            type: Object,
            default: () => {}
        }
    },
    data () {
        return {
            styleObj: {
                backgroundColor: this.item.color
            }
        }
    }
}
</script>

<style lang="scss">
.slide-cmpt-item {
    width: 100%;
    height: 10rem;
}
</style>
