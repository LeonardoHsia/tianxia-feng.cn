<template>
    <section class="page-main">
        <slot name="breadCrumb"></slot>
        <div class="page-main-body">
            <slot></slot>
        </div>
    </section>
</template>

<script>
export default {
    name: '',
    data () {
        return { }
    }
}
</script>

<style lang="scss">
.page-main {
    padding: 1.5rem 2rem;
    min-height: calc(100% - 14rem);
    flex-grow: 1;

    .page-main-body {
        padding: 1.5rem 0;
        height: calc(100% - 1rem);
        box-sizing: border-box;
    }
}
</style>
