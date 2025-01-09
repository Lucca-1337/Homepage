<template>
    <section>
        <h2>My Skills</h2>
        <div class="skills-container">
            <div v-for="skill in Skills" class="skill">
                <OneSkill :skillName="skill.skillName" :icon="skill.icon" :description="skill.description"
                    :color="skill.color" :size="1" :skill_level="skill.skill_level" :can_open="true" />
            </div>
        </div>
    </section>
</template>
<script setup>
import OneSkill from './OneSkill.vue'
import Skills from '@/components/JSON/skill.json'
</script>
<style scoped lang="scss">
.skills-container {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
    align-content: space-around;
}

.skill {
    align-self: flex-start;
}
</style>