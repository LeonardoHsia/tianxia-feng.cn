<template>
    <nav class="no-print">
        <logo></logo>
        <el-menu class="menu root-menu" :gutter="20" mode="horizontal" router :default-active="getActiveTab">
            <template v-for="(item, idx) in menu">
                <el-menu-item class="menu-item" :index="item.path" v-if="!(item.children && item.children.length)" :key="idx">{{ item.name }}</el-menu-item>
                <el-submenu class="menu" :index="item.path" :key="idx" v-else>
                    <template slot="title">{{ item.name }}</template>
                    <el-menu-item v-for="(_item, _idx) in item.children" :index="item.path + '/' + _item.path" :key="_idx">{{ _item.name }}</el-menu-item>
                </el-submenu>
            </template>
        </el-menu>
    </nav>
</template>

<script>
import INDEX_CONST from '@consts'
import Logo from '@components/LogoCmpt'

export default {
    name: 'indexMenu',
    data () {
        return {
            menu: INDEX_CONST.routes.filter(({ slient }) => !slient)
        }
    },
    components: {
        logo: Logo
    },
    computed: {
        getActiveTab () {
            return this.$route.fullPath
        }
    }
}
</script>

<style lang="scss">
nav {
    display: flex;
    align-items: center;
    border-bottom: solid 1px #e6e6e6;

    .logo {
        margin-left: 1rem;
    }
    .menu {
        border-bottom: none !important;
        flex-grow: 1;
    }
}
</style>
