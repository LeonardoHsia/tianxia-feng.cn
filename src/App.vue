<template>
    <el-container :class="themeClass">
        <router-view></router-view>
    </el-container>
</template>

<script>
export default {
    name: 'App',
    computed: {
        themeClass () {
            return `theme-${this.$store.state.theme}`
        }
    },
    created () {

    }
}
</script>

<style lang='scss'>
@import '@scss/common';
.el-container {
    width: 100%;
}
</style>
