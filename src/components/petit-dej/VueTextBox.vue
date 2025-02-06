<template>
    <div class="container" :style="style">
        <label v-if="label" :for="id">{{ label }}</label>
        <div class="border-box">
            <div class="border"></div>
            <input :id="id" :name="name" :required="required" :aria-required="required" :type="type" :placeholder="placeholder" v-model="model"
                :disabled="disabled" :aria-disabled="disabled" :pattern="pattern ? pattern : undefined" />
        </div>
        <small v-if="infotext">{{ infotext }}</small>
    </div>
</template>

<script setup lang="ts">
import { type PropType } from 'vue';

defineProps({
    placeholder: {
        type: String as PropType<string>,
        default: ''
    },
    name: {
        type: String as PropType<string>,
        required: true
    },
    type: {
        type: String as PropType<string>,
        default: 'text'
    },
    label: {
        type: String as PropType<string>,
        default: ''
    },
    infotext: {
        type: String as PropType<string>,
        default: ''
    },
    style: {
        type: String as PropType<string>,
        default: ''
    },
    id: {
        type: String as PropType<string>,
        default: '',
        required: false,
    },
    disabled: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    required: {
        type: Boolean as PropType<boolean>,
        default: false
    },
    pattern: {
        type: String as PropType<string | null>,
        default: null
    },
});

const model = defineModel();
</script>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'VueTextBox'
});
</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: var(--petit-dej-col) 1fr;
    justify-content: center;
    align-items: center;
    gap: 0.25em;
    width: 100%;
    box-sizing: border-box;
    padding: 0em;
}

.border-box {
    padding: 0.5em;
    position: relative;
    clip-path: polygon(0% 0%,
            0% 100%,
            100% 100%,
            100% 15px,
            calc(100% - 15px) 0%,
            0% 0%);
}

.border {
    position: absolute;
    inset: 0;
    background-color: var(--color-primary);
    clip-path: polygon(0% 0%,
            0% 100%,
            100% 100%,
            100% 15px,
            calc(100% - 15px) 0%,
            0% 0%,
            3px 3px,
            calc(calc(100% - 3px) - calc(15px - calc(3px * 0.7071067811865475))) 3px,
            calc(100% - 3px) calc(3px + calc(15px - calc(3px * 0.7071067811865475))),
            calc(100% - 3px) calc(100% - 3px),
            3px calc(100% - 3px),
            3px 3px);
}

input {
    width: 100%;
    font-family: var(--font-family-text);
    font-size: 1em;
    box-sizing: border-box;
    background-color: transparent;
    border: none;
    color: var(--color-primary);
    outline: none;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Firefox + other */
input[type=number] {
    appearance: textfield;
    -moz-appearance: textfield;
}

input:disabled {
    opacity: 0.8;
    cursor: not-allowed;
}

label {
    font-family: var(--font-family-text);
    font-size: 1em;
    padding: 0;
    margin: 0;
    width: 100%;
    text-align: right;
    font-weight: bold;
}

small {
    font-size: 0.8em;
    color: var(--color-primary);
    text-align: left;
    margin: 0;
    padding: 0;
    grid-column: 2;
    margin-bottom: 0.5em;
}

@media screen and (max-width: 768px) {
    .container {
        grid-template-columns: 1fr;
    }

    label {
        width: 100%;
        text-align: left;
    }

    small {
        grid-column: span 1;
    }
}
</style>