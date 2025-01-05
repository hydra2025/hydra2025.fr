type Paragraph = {
    name: string;
    content: (string | { content: string; subContent: string[] | string })[];
};
const programmeComplet: Paragraph[] = [
    {
        name: "Les cours et les Pougnes",
        content: [
            { content: "Revoir l'accès et le format des pougnes :", subContent: "Le site sera une database à jour avec un système de recherche avancée, catégorisant les pougnes des années précédentes et actuelles." },
            "Des pougnes pour les bachelors.",
        ],
    },
    {
        name: "La sécurité",
        content: [
            { content: "Mise en place d'un système de covoiturage", subContent: "entre le foyer et le bâtiment U6 la nuit" },
            { content: "Une communication interactive", subContent: "avec un calendrier des événements revu (test sur le site Web de liste)." },
        ],
    },
    {
        name: "La vie associative le week-end",
        content: [
            {
                content:
                    "Faire revivre les week-ends. Plusieurs points sont à prendre en compte :",
                subContent: [
                    "Des événements la journée proposés par le BDE en fonction des sorties RA du BDA et des week-end asso,",
                    "Des repas associatifs (car le ritz ne fonctionne pas le week-end, ce qui peut isoler certains individus),",
                    "Des événements le soir en partenariat avec bpm et absinthe dans le style animation bpm-absinthe-bde qui dynamisera le campus tous les week-end.",
                ],
            },
        ],
    },
    {
        name: "Propreté du foyer",
        content: [
            "Veiller au respect du calendrier de nettoyage du foyer et d'entretien des poubelles et révision complète de ces derniers (il faudra dans tous les cas les réaménager après la rénovation du foyer).",
        ],
    },
    {
        name: "Soirées",
        content: [
            "Travail sur la communication extérieure pour attirer plus de monde aux soirées (notamment Palaiseau).",
        ],
    },
    {
        name: "Moyen de financements étudiant",
        content: [
            "Mises en places de groupes d'intérims.",
            "Proposer un tableau d’affichage dédié aux offres d’emplois ou de services étudiants (baby-sitting, tutorat, graphisme, etc.).",
            { content: "Démarchage d'associations", subContent: "pour les étudiants les plus démunis." },
        ],
    },
    {
        name: "L'inclusion",
        content: [
            "Faire en sorte d'inclure plus les PGE et Bachelors IMT BS dans la vie associative, avec plus d'interventions et plus de communication au travers de l'école.",
        ],
    },
    {
        name: "La gestion des VSS",
        content: [
            { content: "Campagne de sensibilisation", subContent: "sous forme de courtes vidéos sur des situations de VSS avec des élèves associatifs." },
            "Sur le futur site du BDE une page ressources VSS, contenant des guides ou contacts d'experts en cas de besoin.",
            {
                content:
                    "Code couleur soirées - des bracelets fluorescents seront distribués à l'entrée de chaque soirée avec un code couleur :",
                subContent: [
                    "Rouge : personne qui ne veut pas être dérangée pendant la soirée, veut simplement s'amuser avec ses amis,",
                    "Orange : personne ouverte à la discussion que si elle l'engage, mais ne souhaite pas forcément sociabiliser,",
                    "Vert : personne ouverte aux nouvelles rencontres.",
                ],
            },
        ],
    },
];

export default programmeComplet;
export type { Paragraph };