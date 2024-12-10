<template>
    <div @mouseenter="descriptionToggle()" @mouseleave="descriptionToggle()" class="skill-container">
        <div class="skill-name">
            <component :is="iconComponent" width="4rem" height="4rem" />
            <h3>{{ props.skillName }}</h3>
        </div>
        <Transition>
            <div class="description" v-if="show">{{ props.description }}</div>
        </Transition>
    </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import HTMLIcon from '@/components/icons/HTML.vue'
import CSSIcon from '@/components/icons/CSS.vue'
import JSIcon from '@/components/icons/JS.vue'
import VUEIcon from '@/components/icons/VUE.vue'
import PHPIcon from '@/components/icons/PHP.vue'

const props = defineProps({
    skillName: String,
    icon: String,
    description: String,
    color: String,
})

const iconMapping = {
    html: HTMLIcon,
    css: CSSIcon,
    js: JSIcon,
    vue: VUEIcon,
    php: PHPIcon
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
    border: 2px solid v-bind(color);
    border-radius: 16px;
    height: max-content;
    width: max-content;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: v-bind(color);
        opacity: 0.5;
        z-index: -1;
        transition: width 0.3s ease-in-out;
    }
}

.skill-name {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
}

.description {
    padding: 1rem;
}

.v-enter-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
}

.v-leave-active {
    transition: opacity 0s ease, transform 0s ease;
}


.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>