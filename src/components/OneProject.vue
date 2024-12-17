<template>
    <div @click="pathToToDo()" class="project-container">
        <h1>{{ props.projectName }}</h1>
        <div class="used-skills">
            Used Skills:
            {{ props.usedSkills.join(', ') }}
        </div>
        <div class="project-description">
            {{ props.description }}
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const props = defineProps({
    projectName: String,
    usedSkills: Array,
    description: String,
    projectPath: String
})

const router = useRouter();

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
        min-width: 100%;

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
</style>