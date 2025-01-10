<template>
    <div class="contact_formular">
        <div class="input_container">
            Name:
            <input type="text" name="name" id="name">
        </div>
        <div class="input_container">
            E-Mail:
            <input type="text" name="email" id="email">
        </div>
        <div class="input_container">
            Subject:
            <input type="text" name="subject" id="subject">
        </div>
        <div class="input_container">
            Message:
            <input type="text" name="message" id="message">
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
.contact_formular {
    border: 1px solid var(--color-primary);
    border-radius: 6px;
    padding: 2rem;
    margin-bottom: 5rem;

    .input_container {
        width: 100%;
        padding: 0.7rem 0;
    }

    input {
        width: 100%;
        padding: 8px;
        text-align: left;

    }

    #message {
        height: 150px;
    }
}
</style>