<template>
    <section class="page-section">
        <h2 class="page-section-title">
            <slot name="header">
                header
            </slot>
        </h2>
        <hr>
        <div class="page-section-main">
            <slot>
                default
            </slot>
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

<style lang="scss" scoped>
.page-section {
    position: relative;

    .page-section-title {
        text-align: center;
    }
    & > hr {
        margin: 1rem auto;
        width: 2rem;
        height: .2rem;
        background:#8EE3A9;
        border: none;
    }
}
</style>
