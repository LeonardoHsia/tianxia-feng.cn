<template>
    <el-row class="menu">
        <el-col class="menu-item" :span="Math.round(24 / menu.length)" v-for="(item) in menu" :key="item.id">
            <router-link class="menu-item-link" :to="item.path">{{ item.name }}</router-link>
        </el-col>
    </el-row>
</template>

<script>
import INDEX_CONST from '@consts/'

export default {
    name: 'indexMenu',
    data () {
        return {
            menu: INDEX_CONST.routes.filter(({ slient }) => !slient)
        }
    }
}
</script>

<style lang="scss">
.menu {
    width: 100%;

    .menu-item {
        padding: .5rem 1rem;

        .menu-item-link {

        }
    }
}
</style>
