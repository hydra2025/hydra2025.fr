<script setup lang="ts">
import { computed, ref } from 'vue';
import SelectBox from './SelectBox.vue';
import VueTextBox from './VueTextBox.vue';

const type = ref('');
const chambreMaisel = ref('');

const locaux_foyer = [
    { value: 'espace-t', label: 'Espace T' },
    { value: 'ps', label: 'Petite Salle' },
    { value: 'gs', label: 'Grande Salle' },
    { value: 'cj', label: 'Club Jeux' },
    { value: 'minet', label: 'MiNET' },
    { value: 'bde', label: 'BDE' },
    { value: 'intech', label: 'INTech' },
    { value: 'asint', label: 'ASINT' },
    { value: 'bda', label: 'BDA' },
    { value: 'absinthe', label: 'AbsINTthe' },

]

function ordinalSuffixOf(i: number) {
    if (i == 1) {
        return i + "er";
    }

    return i + "ème";
}

const infoText = computed(() => {
    if (type.value === 'maisel') {
        // Convert the value to a string
        const num = chambreMaisel.value.toString();


        if (num.length === 0) {
            return '';
        }
        if (isNaN(Number(num))) {
            return 'Le numéro de chambre doit être un nombre';
        }

        if (num.length != 4) {
            return 'Le numéro de chambre doit contenir 4 chiffres';
        }
        // Ensure the number starts with 1 2 3 4 5 6 7
        if (!['1', '2', '3', '4', '5', '6', '7'].includes(num[0])) {
            return 'Ce numéro de chambre n\'est pas valide';
        }

        if (num[0] === '5') {
            return 'Vous êtes dans le bâtiment U5.';
        }

        // Vous êtes dans le bâtiment U{n} au {étage}ème étage
        const batiment = num[0];
        const etage = num[1];
        return `Vous êtes dans le bâtiment U${batiment} au ${ordinalSuffixOf(Number(etage))} étage.`;
    }
    return '';
});




</script>

<template>
    <div class="container-locationselect">

        <SelectBox label="Livraison:" name="livraison_type" required :options="[
            { value: '', label: 'Choisir un lieu de livraison' },
            { value: 'maisel', label: 'MAISEL' },
            { value: 'foyer', label: 'Foyer' },
            { value: 'coloc', label: 'Coloc' },
            { value: 'campus', label: 'Campus' },
            { value: 'adresse', label: 'Autre (Évry)' }
        ]" v-model="type" @update:model-value="console.log(type)" />
        <div v-if="type === 'maisel'" class="container-locationselect">
            <VueTextBox required label="Numéro:" type="number" name="adresse" placeholder="1234" v-model="chambreMaisel" :infotext="infoText"
                pattern="[0-9]{4}" />
        </div>
        <div v-else-if="type === 'foyer'" class="container-locationselect">
            <!--<SelectBox label="Local:" name="adresse" :options="locaux_foyer"
                infotext="Soyez présent dans le local sélectionné pendant toute la plage horaire sélectionnée, en cas d'absence de réponse votre commande sera déposée devant la porte ou dans le lieu indiqué." />-->
            <VueTextBox required label="Local:" type="text" name="adresse" placeholder="À AbsINThe"
                infotext="Soyez présent dans le local sélectionné pendant toute la plage horaire sélectionnée, en cas d'absence de réponse votre commande sera déposée devant la porte ou dans le lieu indiqué." />

        </div>
        <div v-else-if="type === 'campus'" class="container-locationselect">
            <VueTextBox required label="Où:" type="text" name="adresse" placeholder="Devant l'amphi étoile"
                infotext="Soyez assez précis pour que nos livreurs vous trouvent :)" />
        </div>
        <div v-else-if="type === 'adresse' || type === 'coloc'" class="container-locationselect">
            <VueTextBox required label="Nom de la coloc:" type="text" name="nom_coloc" placeholder="Le Traquenard" v-if="type === 'coloc'" />
            <VueTextBox required label="Adresse:" type="text" name="adresse" placeholder="123 Rue des Étoiles" />
            <VueTextBox required label="Ville:" type="text" name="ville" model-value="91000 Évry, France" disabled
                infotext="Les livraisons sont à Évry uniquement." />
            <VueTextBox label="Instructions:" type="text" name="adresse_info" placeholder="Le code de l'interphone est 6969" />
        </div>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'LocationSelect',
    components: {
        SelectBox,
        VueTextBox
    }
});
</script>


<style scoped>
.container-locationselect {
    display: flex;
    flex-direction: column;
    gap: 1em;
}
</style>