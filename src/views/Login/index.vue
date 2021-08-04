<template>
  <div class="router-view">
      <!-- 登录功能 -->
      <el-button icon="el-icon-thumb" @click="submit">登录</el-button>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data () {
        return {

        }
    },
    methods: {
        submit () {
            this.$router.push('/')
        }
    }
}
</script>

<style lang="sass">

</style>
