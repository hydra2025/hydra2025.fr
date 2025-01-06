<template>
    <div class="collapsible-paragraph">
        <div class="header" :class="{ pointer: event.content }" @click="isOpen = !isOpen">
            <div class="date">
                <span class="days">{{ event.day }}</span>
                <span class="month">{{ event.month }}</span>
            </div>
            <div>

                <span class="arrow" v-if="event.content">{{ isOpen ? "▲" : "▼" }}</span>
                <span class="arrow" v-else></span>
                <span class="title">{{ event.title }}</span>
            </div>
        </div>
        <div class="content" v-if="isOpen && event.content">
            {{ event.content }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { type Event } from "../../campagne";

defineProps<{
    event: Event;
}>();

const isOpen = ref(false);
</script>



<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    name: "CollapsibleParagraph",
});
</script>

<style scoped>
.collapsible-paragraph {
    margin-bottom: 1rem;
    background-color: rgba(var(--color-primary-rgb), 0.5);
    color: var(--color-text);
    width: 100%;
    height: fit-content;
    transition: background-color 0.3s ease, height 0.3s ease;
}

.header {
    padding: 1rem;
    display: flex;
    align-items: center;
    background-color: rgba(var(--color-primary-rgb), 0.5);
    transition: background-color 0.3s ease;
    font-size: 1.5rem;
}

.pointer {
    cursor: pointer;
}

.header:hover {
    background-color: rgba(var(--color-primary-rgb), 0.6);
}

.title {
    font-weight: bold;
}

.content {
    padding: 1rem 6rem 1rem 4rem;
    font-size: 1.2rem;
    background-color: rgba(var(--color-primary-rgb), 0.5);
}

.arrow {
    margin-right: 1rem;
    margin-left: 2rem;
    width: 1ch;
}

.date {
    display: flex;
    align-items: center;
}

.days {
    margin-right: 0;
    margin-left: 10rem;
    font-size: 3em;
    font-weight: bold;
    font-family: var(--font-family-title);
    text-align: right;
    width: 3ch;
    align-self: baseline;
    display: block;
}

.month {
    font-size: 1.75em;
    font-weight: bold;
    font-family: var(--font-family-title);
    text-align: left;
    width: 3ch;
    align-self: baseline;
    margin-right: 1rem;
    margin-left: 0;
    display: block;
}

@media screen and (max-width: 768px) {
    .arrow {
        margin-left: 1rem;
    }

    .header {
        padding: 1rem;
        flex-wrap: wrap;
    }

    .content {
        padding: 1rem 2rem;
    }

    .days {
        margin-left: unset;
    }

    .month {
        margin-right: unset;
    }
}

@media screen and (max-width: 570px) {
    .header {
        flex-direction: column;
        align-items: center;
    }
}
</style>