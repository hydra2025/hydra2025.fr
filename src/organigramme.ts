type Member = {
    first_name: string;
    last_name: string;
    role: string;
    img?: string;
    respo: boolean;
    linkedin?: string;
    facebook?: string;
};

type Pole = {
    name: string;
    full_width: boolean;
    members: Member[];
};

const poles: Pole[] = [
    {
        name: "Présidence",
        full_width: true,
        members: [
            {
                first_name: "Daddy",
                last_name: "Fuster",
                role: "Président",
                respo: true,
                linkedin: "https://www.linkedin.com/in/luca-fuster-02a1a2246/",
            },
        ],
    },
    {
        name: "Vice-Présidence",
        full_width: true,
        members: [
            {
                first_name: "Amélie",
                last_name: "Thai",
                role: "VPR IMTBS PGE",
                respo: false,
            },
            {
                first_name: "Judith",
                last_name: "Lin",
                role: "VP TSP",
                respo: true,
            },
            {
                first_name: "Anaïs",
                last_name: "Delbecq",
                role: "VP IMTBS Bachelor",
                respo: true,
            },
            {
                first_name: "Titouan",
                last_name: "Gacougnolle",
                role: "VPR FISA",
                respo: false,
            },
        ],
    },
    {
        name: "Trésorerie",
        full_width: false,
        members: [
            {
                first_name: "Jules",
                last_name: "Esnee",
                role: "Vice-Trésorier",
                respo: false,
            },
            {
                first_name: "Jean",
                last_name: "Vidal",
                role: "Trésorier",
                respo: true,
            },
        ],
    },
    {
        name: "Secrétaire",
        full_width: false,
        members: [
            {
                first_name: "Nathan",
                last_name: "Le Sausse",
                role: "Secrétaire",
                respo: true,
            },
        ],
    },
    {
        name: "Communication",
        full_width: true,
        members: [
            {
                first_name: "Zeineb",
                last_name: "Benjemaa",
                role: "Pôle Communication",
                respo: false,
            },
            {
                first_name: "Alexandra",
                last_name: "Bert",
                role: "Respo Communication",
                respo: true,
            },
            {
                first_name: "Racim",
                last_name: "Aissat",
                role: "Pôle Communication",
                respo: false,
            },
            {
                first_name: "Lucas",
                last_name: "Dreano",
                role: "Pôle Communication",
                respo: false,
            },
        ],
    },
    {
        name: "Évènement",
        full_width: true,
        members: [
            {
                first_name: "Charlotte",
                last_name: "Kaladjian",
                role: "Pôle Évènement",
                respo: false,
            },
            {
                first_name: "Ysée",
                last_name: "Parenti",
                role: "Pôle Évènement",
                respo: false,
            },
            {
                first_name: "Gustave",
                last_name: "Beauvallet",
                role: "Respo Évènement",
                respo: true,
            },
            {
                first_name: "Emma",
                last_name: "Weiss",
                role: "Pôle Évènement",
                respo: false,
            },
            {
                first_name: "Ghada",
                last_name: "Sarhrouchni",
                role: "Pôle Évènement",
                respo: false,
            },
        ],
    },
    {
        name: "Soirée",
        full_width: true,
        members: [
            {
                first_name: "Charlotte",
                last_name: "Vlieghe",
                role: "Pôle Soirée",
                respo: false,
            },
            {
                first_name: "Hugo",
                last_name: "Kennedy",
                role: "Pôle Soirée",
                respo: false,
            },
            {
                first_name: "Slavik",
                last_name: "Zhyhota-Locquin",
                role: "Respo Soirée",
                respo: true,
            },
            {
                first_name: "Clément",
                last_name: "Bondaz",
                role: "Pôle Soirée",
                respo: false,
            },
        ],
    },
    {
        name: "Sécurité-Logistique",
        full_width: true,
        members: [
            {
                first_name: "Alexis",
                last_name: "Dauphin",
                role: "Pôle Séculogie",
                respo: false,
            },
            {
                first_name: "Raphaël",
                last_name: "Lefèvre",
                role: "Respo Séculogie",
                respo: true,
            },
            {
                first_name: "Jérôme",
                last_name: "Lin",
                role: "Pôle Séculogie",
                respo: false,
            },
        ],
    },
    {
        name: "Numérique",
        full_width: false,
        members: [
            {
                first_name: "Nathan",
                last_name: "Beauchoux",
                role: "Pôle Numérique",
                respo: false,
            },
            {
                first_name: "Alexis",
                last_name: "Rossfelder",
                role: "Respo Numérique",
                respo: true,
            },
        ],
    },
    {
        name: "Relations Entreprises",
        full_width: false,
        members: [
            {
                first_name: "Léa",
                last_name: "Beaudimont",
                role: "Respo RE",
                respo: true,
            },
            {
                first_name: "Alexandre",
                last_name: "Guechtouli",
                role: "Pôle RE",
                respo: false,
            },
        ],
    },
    {
        name: "Ritz",
        full_width: false,
        members: [
            {
                first_name: "Léa",
                last_name: "Dai",
                role: "Respo Ritz",
                respo: true,
            },
            {
                first_name: "Nihel",
                last_name: "Tadjerouni",
                role: "Pôle Ritz",
                respo: false,
            },
        ],
    },
    {
        name: "Prévention",
        full_width: false,
        members: [
            {
                first_name: "Titouan",
                last_name: "Gacougnolle",
                role: "Respo Prévention",
                respo: true,
            },
            {
                first_name: "Yannick",
                last_name: "Zheng",
                role: "Pôle Prévention",
                respo: false,
            },
        ],
    },
    {
        name: "Développement Durable",
        full_width: false,
        members: [
            {
                first_name: "Paul",
                last_name: "Lardet",
                role: "Respo DD",
                respo: true,
            },
        ],
    },
    {
        name: "Relations Internes",
        full_width: false,
        members: [
            {
                first_name: "Lena",
                last_name: "Boiton Lendenko",
                role: "Respo RI",
                respo: true,
            },
        ],
    },
    {
        name: "T&MA (Alumnis)",
        full_width: false,
        members: [
            {
                first_name: "prénomTest",
                last_name: "nomTest",
                role: "poleTest",
                respo: false,
            },
        ],
    },
];

export { poles };
export type { Pole, Member };