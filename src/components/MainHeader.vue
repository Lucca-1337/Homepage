<template>
    <header>
        <div class="container d-flex justify-content-between">
            <RouterLink to="/">
                <h1 class="header-title">Gian-Lucca Kaworsky</h1>
            </RouterLink>
            <nav>
                <div class="hamburger-container">
                    <font-awesome-icon v-if="!show" @click="showNavbar" class="hamburger" :icon="['fas', 'bars']" />
                </div>
                <div class="nav-links">
                    <RouterLink class="homelink" to="/">Home</RouterLink>
                    <RouterLink class="aboutmelink" to="/aboutme">About&nbsp;me</RouterLink>
                    <RouterLink class="projectslink" to="/myprojects">MyProjects</RouterLink>
                    <RouterLink class="contactlink" to="/contact">Contact</RouterLink>
                </div>
                <Transition>
                    <div class="mobile-nav-links" v-if="show">
                        <font-awesome-icon @click="collapseNavbar" class="closeNavbar" :icon="['fas', 'xmark']" />
                        <RouterLink @click="collapseNavbar" class="homelink" to="/">Home</RouterLink>
                        <RouterLink @click="collapseNavbar" class="aboutmelink" to="/aboutme">About&nbsp;me</RouterLink>
                        <RouterLink @click="collapseNavbar" class="projectslink" to="/myprojects">MyProjects
                        </RouterLink>
                        <RouterLink @click="collapseNavbar" class="contactlink" to="/contact">Contact</RouterLink>
                    </div>
                </Transition>
                <div @click="collapseNavbar" v-if="show" class="dark">

                </div>
            </nav>
        </div>
    </header>
    <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const show = ref(false)

function showNavbar() {
    show.value = !show.value
    document.body.style.overflow = 'hidden'
}
function collapseNavbar() {
    show.value = false
    document.body.style.overflow = ''
}

</script>

<style scoped lang="scss">
header {
    padding: 1rem 0;
    background-color: rgba(0, 0, 0, 0.1);
}

.header-title {
    color: var(--color-primary);
    font-family: 'Courier New', Courier, monospace;
    font-weight: 600;
}

a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
}

nav {
    font-size: 1rem;
    width: 40%;
    display: flex;
    justify-content: flex-end;
    z-index: 1000;

    .nav-links {
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: 994px) {
            display: none;
        }
    }

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

.hamburger-container {
    display: none;


    @media screen and (max-width: 994px) {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.7rem;


        .hamburger {
            cursor: pointer;
            margin: 1rem;
        }
    }
}

.main.navbar {
    filter: opacity(0.3);
}

.closeNavbar {
    align-self: flex-end;
    font-size: 1.5rem;
    margin: 5px 0px;
}

.dark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99999;
}

.mobile-nav-links {
    position: absolute;
    padding: 1rem;
    height: 100vh;
    width: 200px;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: rgb(36, 36, 36);
    z-index: 9999999;
}

.v-enter-active {
    transition: transform 0.5s ease;
}

.v-leave-active {
    transition: transform 0.1s ease;
}


.v-enter-from,
.v-leave-to {
    transform: translatex(200px);
}
</style>