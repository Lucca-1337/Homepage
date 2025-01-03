<script setup>
import Skills from '../components/Skills.vue'

const typed = ['Hello, Iam Gian-Lucca Kaworsky', 'On this Website you will find all my projects and some information about me'];
</script>

<template>
  <div class="home">
    <div class="heading_div">
      <div class="container">
        <h1>
          <VueTyped class="heading" :strings="typed" :typeSpeed="30"></VueTyped>
        </h1>
      </div>
    </div>
    <main class="container">
      <Skills />
    </main>
  </div>
</template>

<style scoped lang="scss">
.heading_div {
  width: 100%;
  height: 30rem;
  background-image: url('../components/icons/code.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.heading {
  font-size: 2.5rem;
  padding: 10rem 0;
  text-align: center;
  line-height: 1.5;
  font-family: 'Courier New', Courier, monospace;
}
</style>
