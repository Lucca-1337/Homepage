<template>
    <div @click="openDescription()" ref="skill" class="skill-container">
        <div class="skill-name">
            <component class="icon" :is="iconComponent" width="4rem" height="4rem" />
            <h3>{{ props.skillName }}</h3>
        </div>
        <Transition>
            <div ref="description" class="description" v-show="show">
                <div>
                    Skill Level:
                    <div class="skill_level">
                        <div class="skill_bar" :style="{ width: props.skill_level + '%' }">
                            {{ props.skill_level }}%
                        </div>
                    </div>
                </div>
                <VueTyped v-if="show" :strings="typed" :typeSpeed="10"></VueTyped>
            </div>
        </Transition>
    </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted, useTemplateRef } from 'vue';
import HTMLIcon from '@/components/icons/HTML.vue'
import CSSIcon from '@/components/icons/CSS.vue'
import JSIcon from '@/components/icons/JS.vue'
import VUEIcon from '@/components/icons/VUE.vue'
import PHPIcon from '@/components/icons/PHP.vue'
import JavaIcon from '@/components/icons/Java.vue'

const props = defineProps({
    skillName: String,
    icon: String,
    description: String,
    color: String,
    size: Number,
    skill_level: Number,
    can_open: Boolean,
})

const typed = [props.description];

const iconMapping = {
    html: HTMLIcon,
    css: CSSIcon,
    js: JSIcon,
    vue: VUEIcon,
    php: PHPIcon,
    java: JavaIcon,
};

// Dynamische Komponente basierend auf der Prop
const iconComponent = computed(() => iconMapping[props.icon.toLowerCase()] || null)

const description = useTemplateRef('description')

onMounted(() => {
    document.addEventListener("click", closeDescription);
    if (!props.can_open) skill.value.classList.add("cant_open")
})

const show = ref(false);


const skill = ref("skill");
function openDescription() {
    if (!props.can_open) return
    show.value = true
    skill.value.classList.add("open")
}
function closeDescription(event) {
    if (!props.can_open) return
    if (!skill.value.contains(event.target)) {
        show.value = false
        skill.value.classList.remove("open")
    }

}

onUnmounted(() => {
    document.removeEventListener("click", closeDescription);
})
</script>
<style scoped lang="scss">
.skill-container {
    position: relative;
    display: block;
    font-size: calc(1rem * v-bind(size));
    padding: calc(1rem * v-bind(size));
    margin: calc(1rem * v-bind(size));
    border: 2px solid v-bind(color);
    border-radius: calc(16px * v-bind(size));
    overflow: hidden;
    cursor: pointer;

    &.open {
        cursor: default;
    }

    &.cant_open {
        cursor: inherit;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: v-bind(color);
        opacity: 0.35;
        z-index: -1;
        transition: width 0.3s ease-in-out;
    }
}

.icon {
    width: calc(4rem * v-bind(size));
    height: calc(4rem * v-bind(size));
}

h3 {
    font-size: calc(2rem * v-bind(size)) !important;
    margin-bottom: 0 !important;
}

.skill-name {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: calc(1rem * v-bind(size));
}

.description {
    color: white;
    padding: calc(1rem * v-bind(size));
    width: calc(400px * v-bind(size));
    overflow: hidden;
}

.skill_level {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
}

.skill_bar {
    text-align: right;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-right: 4px;
    color: white;
    background-color: v-bind(color);
}

.v-enter-active {
    transition: padding 0.5s ease, margin 0.5s ease, opacity 0.2s ease, transform 0.2s ease-in-out, width 0.4s ease, height 0.3s ease;
}

.v-leave-active {
    transition: padding 0.5s ease, margin 0.5s ease, opacity 0.2s ease, transform 0.2s ease-in-out, width 0.4s ease, height 0.3s ease-in;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(-10px);
    width: 100px;
    height: 0px;
    padding: 0px;
    margin: 0px;
}
</style>