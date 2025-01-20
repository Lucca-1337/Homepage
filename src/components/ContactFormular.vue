<template>
    <div class="contact_formular">
        <div class="contact_container">
            <div class="input_container">
                Name:
                <input type="text" name="name" class="input_formular" id="name">
            </div>
            <div class="input_container">
                E-Mail:
                <input type="text" name="email" class="input_formular" id="email">
            </div>
            <div class="input_container">
                Subject:
                <input type="text" name="subject" class="input_formular" id="subject" autocomplete="none">
            </div>
            <div class="input_container">
                Message:
                <textarea name="message" class="input_formular" id="message"></textarea>
            </div>
            <div class="send_button_container">
                <button type="submit" class="send_button">Send</button>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
.contact_formular {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 3rem;

    .input_container {
        width: 100%;
        padding: 0.7rem 0;
    }

    .contact_container {
        width: 100%;
        padding: 26px;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 12px;
    }

    .input_formular {
        width: 100%;
        padding: 8px;
        text-align: left;

    }

    #message {
        height: 150px;
    }

    .send_button_container {
        display: flex;
        justify-content: end;
    }

    .send_button {
        border: 2px solid var(--color-primary);
        color: var(--color-primary);
        font-size: 1.2rem;
        border-radius: 6px;
        background-color: rgba(0, 0, 0, 0);
        padding: 12px 32px;
    }
}


@media (min-width: 992.98px) {
    .contact_container {
        width: 50% !important;
    }
}
</style>