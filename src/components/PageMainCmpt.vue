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
    height: 100%;
    flex-grow: 1;

    .page-main-body {
        padding: 1.5rem 0;
    }
}
</style>
