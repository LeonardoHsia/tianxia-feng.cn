<template>
    <el-container :class="themeClass" direction="vertical">
        <menu-cmpt></menu-cmpt>
        <router-view></router-view>
        <footer-cmpt></footer-cmpt>
    </el-container>
</template>

<script>
import MenuCmpt from '@components/MenuCmpt'
import FooterCmpt from '@components/FooterCmpt'
export default {
    name: 'App',
    computed: {
        themeClass () {
            return `theme-${this.$store.state.theme}`
        }
    },
    components: {
        'menu-cmpt': MenuCmpt,
        'footer-cmpt': FooterCmpt
    },
    created () {

    }
}
</script>

<style lang='scss'>
@import '@scss/common';
.el-container {
    height: 100%;
}
</style>
