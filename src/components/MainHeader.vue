<template>
    <header>
        <div class="container d-flex justify-content-between">
            <RouterLink to="/">
                <h1 class="header-title">Gian-Lucca Kaworsky</h1>
            </RouterLink>
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

.header-title {
    color: var(--color-primary);
    font-family: 'Courier New', Courier, monospace;
}

a {
    text-decoration: none;
}

nav {
    width: 40%;
    display: flex;
    justify-content: flex-end;

    a {
        color: rgb(255, 255, 255);
        font-size: 1.4rem;
        text-decoration: none;
        display: flex;
        align-items: center;
        margin: 0 10px;
        position: relative;
        transition: color .3s ease-in-out;

        &::before {
            content: '';
            position: absolute;
            top: 80%;
            width: 100%;
            height: 3px;
            background-color: var(--color-primary);
            transform: scaleX(0);
            transition: transform .3s ease-in-out;
        }

        &:hover {
            color: var(--color-primary);
        }

        &:hover::before {
            transform: scaleX(1);
        }
    }

    a.router-link-active {
        color: var(--color-primary);
    }

    a.router-link-active::before {
        transform: scaleX(1);
    }
}
</style>