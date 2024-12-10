<template>
    <div>
        <h1>Header</h1>
        <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/myprojects">MyProjects</RouterLink>
        </nav>
    </div>
    <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped lang="scss"></style>