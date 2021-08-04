<template>
    <div class="photo-box">
        <template v-if="data.photo">
            <img :src="data.photo" alt="简历照片">
        </template>
        <template v-else>
            <i class="el-icon-user-solid" style="font-size: 10rem;" />
        </template>
    </div>
</template>

<script>
export default {
    name: 'PhotoBoxCmpt',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    data () {
        return { }
    }
}
</script>

<style lang="scss">
@import '~@resume/static/scss/common.scss';

.photo-box {
    border: 1px solid $blockBorderColor;
}
</style>
