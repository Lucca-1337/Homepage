<template>
    <section class="projectList">
        <div v-for="project in Projects">
            <OneProject :projectName="project.projectName" :description="project.projectDescription"
                :usedSkills="project.usedSkills" :projectPath="project.projectPath" />
        </div>
    </section>
</template>
<script setup>
import OneProject from './OneProject.vue';
import Projects from '@/components/JSON/projects.json'
</script>
<style lang="scss">
.projectList {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}
</style>