<template>
    <div class="router-view">
        <ul>
            <li>
                <button @click="changeDefaultTheme">默认</button>
            </li>
            <li>
                <button @click="changeDarkTheme">暗系</button>
            </li>
        </ul>

        <button class="theme-btn-primary">Primary</button>
        <button class="theme-btn-default">Default</button>
        <index-menu></index-menu>
        <slide-cmpt :items="slideCmptItems"></slide-cmpt>
        <index-footer></index-footer>
    </div>
</template>

<script>
import IndexMenu from './components/MenuCmpt'
import IndexFooter from '@views/components/footer.vue'
import SlideCmpt from './components/SlideCmpt'

export default {
    name: '',
    components: {
        IndexMenu, IndexFooter, SlideCmpt
    },
    data () {
        return {
            slideCmptItems: [
                {
                    color: '#111111'
                }, {
                    color: '#222222'
                }, {
                    color: '#333333'
                }
            ]
        }
    },
    methods: {

    }
}
</script>

<style lang="scss">
body {
    margin: 0;
    color: #404040;
}
.rooter-view {
    width: 100%;
}
</style>
