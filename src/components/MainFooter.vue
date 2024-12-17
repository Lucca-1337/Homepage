<template>
    <footer>
        <div class="upper">
            <div class="container">
                <Socials fontSize="3rem" />
            </div>
        </div>
        <div class="lower">
            <div class="container">
                <p>© 2024 Copyright: Gian-Lucca Kaworsky</p>
            </div>
        </div>
    </footer>
</template>
<script setup>
import Socials from './Socials.vue';

</script>

<style scoped lang="scss">
.lower {
    background-color: var(--color-background);
    text-align: center;
    padding: 1rem;
}

.upper {
    background-color: rgba(0, 0, 0, 0.1);
    padding: 2rem;

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>