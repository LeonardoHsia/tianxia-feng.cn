<template>
    <div class="section" :class="{'hover': isHover}"  @mouseenter="isHover=true" @mouseleave="isHover=false">
        <h2 class="section-title" v-if="conf.title">{{ conf.title }}{{size > 1 ? ` (${size})` : ''}}</h2>
        <slot></slot>
    </div>
</template>

<script>

export default {
    name: '',
    provide () {
        return {
            setSectionConfProvide: this.setConf,
            setSectionItemSize: this.setSize
        }
    },
    data () {
        return {
            isHover: false,
            conf: {},
            size: 0,
            showFlag: true
        }
    },
    methods: {
        setConf (conf) {
            Object.keys(conf).forEach(k => {
                this.$set(this.conf, k, conf[k])
            })
        },
        setSize (size) {
            this.size = size
        }
    }
}
</script>

<style lang="scss">
@import '../scss/template.scss';
.section {
    position: relative;
    border: 1px dashed transparent;
    background: transparent;
    padding: 1rem 1.5rem;
    width: 100%;
    cursor: default;

    &:not(:last-child) {
        // border-bottom-color: $themeColor;
    }

    .section-title {
        font-size: 1.3rem;
        margin-top: .5rem;
        margin-bottom: 1rem;
        border-left: .3rem solid $themeColor;
        padding-left: .6rem;
    }

    &.hover {
        border-color: $themeColor;
        background: rgba(0, 0, 0, 0.02);
    }
}
</style>
