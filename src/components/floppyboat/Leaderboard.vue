<template>
    <div class="scores">
        <template v-for="(score, index) in leaderboard"><span class="rank">{{ index }}</span><span class="name">{{ score?.name }}</span><span
                class="score">{{
                    score?.score }}</span></template>
    </div>
</template>
<script setup lang="ts">

const ENDPOINT = "https://api.hydra2025.fr/floppyboat/leaderboard"
//const ENDPOINT = "http://localhost:8000/leaderboard"
type Score = {
    score: number
    name: string
}

const leaderboard: Ref<(Score | null)[]> = ref<(Score | null)[]>(Array.from({ length: 11 }).map((e) => null))
let refreshInterval: NodeJS.Timeout | null = null
const refresh = () => {
    // Check if we are on /leaderboard
    if (import.meta.env.SSR) {
        console.log("SSR fetching leaderboard");
        clearInterval(refreshInterval!!);
    }
    if (!import.meta.env.SSR && window.location.pathname.indexOf("/floppyboat") === -1) {
        return;
    }
    fetch(ENDPOINT).then(
        (response: Response) => response.json().catch((error) => console.error(error))
    ).then((scores: Score[]) => leaderboard.value = scores).catch((error) => console.error(error))
}
refreshInterval = setInterval(refresh, 30000)
refresh()


</script>


<script lang="ts">
import { defineComponent, ref, type Ref } from 'vue';
export default defineComponent(
    {
        name: "Leaderboard"
    }
);
</script>

<style lang="css" scoped>
.scores {
    display: grid;
    grid-template-columns: 2ch 16ch 3ch;
    gap: 0 1rem;


}

.rank {
    columns: 1;
    margin: auto;
    margin-right: 0;
    font-family: var(--font-family-title);

}

.name {
    columns: 2;
    font-family: var(--font-family-title);
}

.score {
    columns: 3;
    margin: auto;
    font-family: var(--font-family-title);
    color: var(--color-primary);
}
</style>