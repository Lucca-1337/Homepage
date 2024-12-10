<script setup>
import Skills from '../components/Skills.vue'

const typed = ['Hi, I am a trainee as an IT specialist for application development.']
</script>

<template>
  <div class="home">
    <div class="heading_div">
      <h1>
        <VueTyped class="heading container" :strings="typed" :typeSpeed="30"></VueTyped>
      </h1>
    </div>
    <main class="container">
      <Skills />
    </main>
  </div>
</template>

<style scoped lang="scss">
.heading_div {
  width: 100%;
  background-image: url('../components/icons/code.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.heading {
  font-size: 2.5rem;
  padding: 10rem 0;
  text-align: center;
  line-height: 1.5;
  font-family: 'Courier New', Courier, monospace;
}
</style>
