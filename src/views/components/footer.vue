<template>
    <div class="footer">
        <p style="margin-bottom: .5rem;">
            <a :href="consts.ICP_SITE">{{ consts.ICP }}</a>
        </p>
        <p>{{ intro }}</p>
        <p>
            <span v-html="copyRight"></span>
            {{ startYear }}{{ thisYear | showThisYear(startYear) }}
            {{ consts.domain }}.
            All Rights Reserved.
        </p>
    </div>
</template>

<script>
import GLOBAL_CONSTS from '@consts/global'
export default {
    name: '',
    data () {
        return {
            consts: GLOBAL_CONSTS,
            intro: 'Designed and developed by Xia Tian.',
            copyRight: 'Copyright &copy; ',
            startYear: 2020,
            thisYear: new Date().getFullYear()
        }
    },
    computed: {

    },
    filters: {
        showThisYear: function (y, startYear) {
            return (y >= startYear ? ('-' + y) : '')
        }
    },
    methods: {
        test () {
            console.log(GLOBAL_CONSTS)
        }
    }
}
</script>

<style lang="scss" scoped>
.footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        opacity: .6;
    }

    p {
        margin: .2rem 0;
    }
}
</style>
