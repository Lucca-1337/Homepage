<template>
    <div @mouseenter="descriptionToggle()" @mouseleave="descriptionToggle()" class="skill-container">
        <div class="skill-name">
            <component :is="iconComponent" />
            <h3>{{ props.skillName }}</h3>
        </div>
        <Transition>
            <div class="description" v-if="show">Skill Beschreibung</div>
        </Transition>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import HTMLIcon from '@/components/icons/HTML.vue'
import CSSIcon from '@/components/icons/CSS.vue'

const props = defineProps({
    skillName: String,
    icon: String
})

const iconMapping = {
    html: HTMLIcon,
    css: CSSIcon,
};

// Dynamische Komponente basierend auf der Prop
const iconComponent = computed(() => iconMapping[props.icon.toLowerCase()] || null);

const show = ref(false);
function descriptionToggle() {
    show.value = !show.value
}
</script>
<style lang="scss">
.skill-container {
    position: relative;
    display: block;
    width: fit-content;
    padding: 1rem;
    margin: 1rem;
    border: 2px solid var(--color-primary);
    border-radius: 16px;
    height: max-content;
    width: max-content;
    overflow: hidden;
}

.skill-name {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.description {
    padding: 1rem;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}


.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>