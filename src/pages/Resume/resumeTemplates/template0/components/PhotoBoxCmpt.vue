<template>
    <div class="photo-box">
        <div class="photo">
            <template v-if="data.photo">
                <img :src="data.photo" alt="简历照片">
            </template>
            <template v-else>
                <i class="el-icon-user-solid empty-icon" />
            </template>
        </div>
        <h1 class="name">{{ data.name | nameFilter }}</h1>
        <p class="station"><label>求职意向</label>：<span>{{ data.station }}</span></p>
    </div>
</template>

<script>
export default {
    name: 'PhotoBoxCmpt',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    },
    data () {
        return {
            list: []
        }
    },
    filters: {
        nameFilter (name) {
            return name || '姓名'
        }
    }
}
</script>

<style lang="scss">
@import '~@resume/static/scss/common.scss';

</style>

<style lang="scss" scoped>
@import '@resume/static/scss/_variable';
@mixin flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}

.photo-box {
    margin: 0 auto 1rem;
    flex-direction: column;
    @include flex-center;

    .photo {
        $lightBg: rgba(255,255,255, 0.3);

        width: 9rem;
        height: 12rem;
        margin: 4rem auto 2rem;
        @include flex-center;
        border: 1px solid darken($lightBg, 80);
        background-color: $lightBg;
        position: relative;

        .empty-icon {
            font-size: 8rem;
            color: $themeColor;
        }
    }

    .name {
        font-weight: normal;
        margin: 1rem auto .5rem;
        font-size: 2rem;
        color: $themeColor;
    }
    .station {
        font-size: 1.1rem;
        color: $themeColor;
        margin: 0 auto;
    }
}
</style>
