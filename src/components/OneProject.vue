<template>
    <div @click="pathToToDo()" class="project-container">
        <h1>{{ props.projectName }}</h1>
        <div class="used-skills">
            <div v-for="skill in filteredSkills">
                <OneSkill :skillName="skill.skillName" :icon="skill.icon" :description="skill.description"
                    :color="skill.color" :size="0.4" :can_open="false" />
            </div>
        </div>
        <div class="project-description">
            {{ props.description }}
        </div>
    </div>
</template>
<script setup>
import OneSkill from './OneSkill.vue'
import Skills from '@/components/JSON/skill.json'

const props = defineProps({
    projectName: String,
    usedSkills: Array,
    description: String,
    projectPath: String
})

const filteredSkills = Skills.filter(skill => props.usedSkills.some(usedSkill => usedSkill.toLowerCase() === skill.skillName.toLowerCase()))


function pathToToDo() {
    window.location.href = '/' + props.projectPath
}
</script>
<style lang="scss">
.project-container {
    position: relative;
    border: 2px solid var(--color-background);
    border-radius: 10px;
    padding: 1rem;
    min-width: 800px;
    cursor: pointer;

    @media (max-width: 800px) {
        min-width: 0;
        width: 100vw;

    }


    &::after {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        opacity: 0.5;
        background-color: var(--color-background);
    }
}

.used-skills {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
}
</style>