<template>
    <header>
        <div class="container d-flex justify-content-between">
            <a href="/">
                <h1>Gian-Lucca Kaworsky</h1>
            </a>
            <nav>
                <RouterLink id="homelink" to="/">Home</RouterLink>
                <RouterLink id="projectslink" to="/myprojects">MyProjects</RouterLink>
            </nav>
        </div>

    </header>
    <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped lang="scss">
header {
    padding: 1rem 0;
    background-color: rgba(0, 0, 0, 0.1);
}

nav {
    width: 40%;
    display: flex;
    justify-content: flex-end;
}

a {
    color: var(--color-primary);
    font-size: 1.4rem;
    text-decoration: none;
    padding: 6px;

    &:hover {
        text-decoration: underline;
    }
}
</style>