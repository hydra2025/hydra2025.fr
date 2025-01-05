<template>
    <div class="collapsible-paragraph">
        <div class="header" @click="isOpen = !isOpen">
            <span class="arrow">{{ isOpen ? "▲" : "▼" }}</span>
            <span class="title">{{ paragraph.name }}</span>
        </div>
        <div class="content" v-if="isOpen">
            <ul>
                <li v-for="(item, index) in paragraph.content" :key="index">
                    <span v-if="typeof item === 'string'">{{ item }}</span>
                    <span v-else-if="typeof item === 'object' && typeof item.subContent === 'string'">
                        <strong>{{ item.content }}</strong>
                        {{ item.subContent }}
                    </span>
                    <div v-else>
                        <strong>{{ item.content }}</strong>
                        <ul>
                            <li v-for="(sub, subIndex) in item.subContent" :key="subIndex">
                                {{ sub }}
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { type Paragraph } from "../../programme";

defineProps<{
    paragraph: Paragraph;
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
    cursor: pointer;
    display: flex;
    align-items: center;
    background-color: rgba(var(--color-primary-rgb), 0.5);
    transition: background-color 0.3s ease;
    font-size: 2rem;

}

.header:hover {
    background-color: rgba(var(--color-primary-rgb), 0.6);
}

.title {
    font-weight: bold;
}

.content {
    padding: 1rem;
    font-size: 1.2rem;
    background-color: rgba(var(--color-primary-rgb), 0.5);
}

.arrow {
    margin-right: 0.5rem;
}
</style>