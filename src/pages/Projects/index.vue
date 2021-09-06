<template>
    <page-main-cmpt>
        <el-breadcrumb separator-class="el-icon-arrow-right" slot="breadCrumb">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: PROJECTS_URL }">Projects</el-breadcrumb-item>
            <el-breadcrumb-item v-if="project">{{ projectName }}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-row v-if="!project" class="project-link-list" :gutter="40">
            <el-col v-for="(project, idx) in projects" :key="idx" class="project-link-box" :span="8" style="margin-bottom: 2rem">
                <router-link class="project-link" :to="`${PROJECTS_URL}/${project.path}`">
                    <project-item-cmpt :project="project">{{ project.name }}</project-item-cmpt>
                </router-link>
            </el-col>
        </el-row>
        <router-view></router-view>
    </page-main-cmpt>
</template>

<script>
import PageMainCmpt from '@components/PageMainCmpt'
import ProjectItemCmpt from '@components/ProjectItemCmpt'
import { Projects } from '@consts'

export default {
    name: '',
    data () {
        return {
            PROJECTS_URL: '/projects',
            project: '',
            projectName: ''
        }
    },
    computed: {
        projects () {
            return Projects
        }
    },
    components: {
        'page-main-cmpt': PageMainCmpt,
        'project-item-cmpt': ProjectItemCmpt
    },
    methods: {
        updateProject (route) {
            this.project = route.path.replace(this.PROJECTS_URL, '')
            this.projectName = route.name
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => vm.updateProject(to))
    },
    beforeRouteUpdate (to, from, next) {
        this.updateProject(to)
        next()
    },
    beforeRouteLeave (to, from, next) {
        this.updateProject(to)
        next()
    }
}
</script>

<style lang="scss">
.project-link-list {
    .project-link-box {

        .project-link {
            display: block;
            width: 100%;
            height: 100%;
        }
    }
}
</style>
