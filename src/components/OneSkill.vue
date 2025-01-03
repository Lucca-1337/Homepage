<template>
    <div @click="openDescription()" ref="skill" class="skill-container">
        <div class="skill-name">
            <component class="icon" :is="iconComponent" width="4rem" height="4rem" />
            <h3>{{ props.skillName }}</h3>
        </div>
        <Transition>
            <VueTyped class="description" v-if="show" :strings="typed" :typeSpeed="10"></VueTyped>
        </Transition>
    </div>
</template>
<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
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
    size: Number,
    can_open: Boolean,
})

const typed = [props.description];

const iconMapping = {
    html: HTMLIcon,
    css: CSSIcon,
    js: JSIcon,
    vue: VUEIcon,
    php: PHPIcon
};

// Dynamische Komponente basierend auf der Prop
const iconComponent = computed(() => iconMapping[props.icon.toLowerCase()] || null);

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
    width: fit-content;
    font-size: calc(1rem * v-bind(size));
    padding: calc(1rem * v-bind(size));
    margin: calc(1rem * v-bind(size));
    border: 2px solid v-bind(color);
    border-radius: calc(16px * v-bind(size));
    overflow-x: scroll;
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
    width: calc(300px * v-bind(size));
}

.v-enter-active {
    transition: opacity 0.2s ease-in, transform 0.2s ease-in, width 0.2s ease, height 0.2s ease;
}

.v-leave-active {
    transition: opacity 0.2s ease-out, transform 0.2s ease-out, width 0.2s ease;
}


.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(-10px);
    width: 0;
    height: 0;
}
</style>