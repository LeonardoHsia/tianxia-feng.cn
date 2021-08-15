<template>
    <ul class="content-cmpt content-list">
        <li v-for="(content, idx) in initData" :key="idx" class="content-item">
            <template v-if="isArray(content)">
                <ul class="list">
                    <li v-for="(item, idx) of content" :key="idx">
                        {{ item }}
                    </li>
                </ul>
            </template>
            <template v-else>
                {{ String(content) }}
            </template>
        </li>
    </ul>
</template>

<script>
import mixins from '@resume/mixins'

export default {
    name: '',
    mixins,
    props: ['data'],
    data () {
        return {

        }
    },
    computed: {
        initData () {
            return this.isArray(this.data) ? this.data : [this.data]
        }
    },
    methods: {
        isArray (v) {
            return v instanceof Array
        }
    }
}
</script>

<style lang="scss">

.content-list {
    list-style: none;
    padding-left: 0;
    line-height: 1.5rem;

    .content-item {
        margin: .5rem 0;

        .list {
            list-style: disc;
        }
    }

}
</style>
