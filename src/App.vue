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
        if (localStorage.getItem('theme')) {
            this.$store.dispatch('themeChange', localStorage.theme)
        } else {
            localStorage.setItem('theme', this.$store.state.theme)
        }
    }
}
</script>

<style lang='scss'>
@import '@scss/common';

</style>
