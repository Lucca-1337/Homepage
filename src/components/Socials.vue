<template>
    <div class="socialIconsContainer">
        <div class="gitHubLink">
            <a href="https://github.com/Lucca-1337"><font-awesome-icon class="socialIcons"
                    :icon="['fab', 'github']" /></a>
        </div>
        <div class="instagramLink">
            <a href="https://www.instagram.com/lucca.1337"><font-awesome-icon class="socialIcons"
                    :icon="['fab', 'instagram']" /></a>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    fontSize: String
})

</script>
<style lang="scss">
.socialIconsContainer {
    display: flex;
    gap: 1rem;
}

a {
    text-decoration: none;
    color: unset !important;
    font-size: v-bind(fontSize);

    &:hover {
        .socialIcons {
            transform: scale(1.2);
        }
    }
}

.socialIcons {
    transition: transform 0.2s ease;
}
</style>