<template>
    <div class="photo-box">
        <div class="photo">
            <template v-if="data.photo">
                <img :src="data.photo" alt="简历照片">
            </template>
            <template v-else>
                <i class="el-icon-user-solid empty-icon" />
            </template>
            <div class="photo-choose-mask">
                <!-- TODO Photo Upload -->
                <el-button type="primary" plain class="upload-photo">本地上传 <i class="el-icon-arrow-right el-icon--right" /></el-button>
            </div>
        </div>
        <h1 class="name">{{ data.name | nameFilter }}</h1>
        <list-cmpt :data="data" :list="list"></list-cmpt>
    </div>
</template>

<script>
import ListCmpt from './ListCmpt'

export default {
    name: 'PhotoBoxCmpt',
    props: {
        data: {
            type: Object,
            default: () => {}
        },
        conf: {
            type: Object,
            default: () => {}
        }
    },
    created () {
        this.list = this.conf.fields.filter(f => f.field === 'station')
    },
    data () {
        return {
            list: []
        }
    },
    components: {
        'list-cmpt': ListCmpt
    },
    methods: {
        spliceItem (idx) {
            this.list.splice(idx, 1)
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

        .photo-choose-mask {
            display: none;
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);

            .upload-photo {
                padding: .2rem .4rem;
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 20%;
            }
        }

        &:hover .photo-choose-mask {
            display: block;
        }

        .empty-icon {
            font-size: 8rem;
        }
    }

    .name {
        font-weight: normal;
        margin: 1rem auto .5rem;
        font-size: 2rem;
        color: $themeColor;
    }
}
</style>
