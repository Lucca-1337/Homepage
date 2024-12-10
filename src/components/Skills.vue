<template>
    <section>
        <h2>My Skills</h2>
        <div class="skills-container d-flex flex-wrap">
            <div v-for=" skill in Skills">
                <OneSkill :skillName="skill.skillName" :icon="skill.icon" :description="skill.description"
                    :color="skill.color" />
            </div>
        </div>
    </section>
</template>
<script setup>
import OneSkill from './OneSkill.vue'
import Skills from '@/components/JSON/skill.json'
</script>
<style lang="scss"></style>