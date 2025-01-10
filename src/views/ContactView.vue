<template>
    <div class="container">
        <div class="heading">
            <h1>Contact Page</h1>
            <h4 class="contact_description">You can send me a message and i will answer you as soon as possible
            </h4>
        </div>
        <ContactFormular />
    </div>
</template>
<script setup>
import ContactFormular from '@/components/ContactFormular.vue';


</script>
<style lang="scss">
.heading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin: 2rem 0;

    .contact_description {
        padding: 1rem 0;
        width: 80%;
    }
}
</style>