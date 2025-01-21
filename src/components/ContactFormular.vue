<template>

    <div class="contact_formular">
        <div class="contact_container">
            <form @submit.prevent="send_message">
                <div class="input_container">
                    *Name:
                    <input v-model="name" type="text" name="name" class="input_formular" id="name" required>
                </div>
                <div class="input_container">
                    *E-Mail:
                    <input v-model="email" type="text" name="email" class="input_formular" id="email" required>
                </div>
                <div class="input_container">
                    *Subject:
                    <input v-model="subject" type="text" name="subject" class="input_formular" id="subject"
                        autocomplete="none" required>
                </div>
                <div class="input_container">
                    Message:
                    <textarea v-model="message" name="message" class="input_formular" id="message"></textarea>
                </div>
                <div class="send_button_container">
                    <div class="loader_container">
                        <div class="loader" v-if="loading"></div>
                    </div>
                    <button type="submit" class="send_button">Send</button>
                </div>
            </form>
            <transition>
                <div class="confirmation_text" v-if="confirmation">{{ confirmation }}</div>
            </transition>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios';
import { ref } from 'vue';

var confirmation = ref();
var loading = ref(false);
var name = '';
var email = '';
var subject = '';
var message = '';

async function send_message(e) {
    try {
        loading.value = true;
        const response = await axios.post('http://localhost:3001/api/send_message', {
            name: name,
            email: email,
            subject: subject,
            message: message
        });
        confirmation.value = response.data.message;
    } catch (error) {
        console.error(error);
    } finally {
        loading.value = false;
        clearForm();
    }
}

function clearForm() {
    name = '';
    email = '';
    subject = '';
    message = '';
}

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

.confirmation_text {
    margin-top: 30px;
    text-align: center;
    font-size: 1.3rem;
}

.v-enter-active {
    transition: opacity 0.2s ease, transform 0.2s ease-in-out;
}

.v-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

.loader_container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
}

.loader {
    border: 6px solid #f3f3f3;
    /* Light grey */
    border-top: 6px solid var(--color-primary);
    /* Blue */
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    animation: spin 2s linear infinite;
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

@media (min-width: 992.98px) {
    .contact_container {
        width: 50% !important;
    }
}
</style>