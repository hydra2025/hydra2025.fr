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
                facebook: "https://www.facebook.com/luca.fuster.18"
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
                facebook: "https://www.facebook.com/profile.php?id=61565049044086"
            },
            {
                first_name: "Judith",
                last_name: "Lin",
                role: "VP TSP",
                respo: true,
                facebook: "https://www.facebook.com/profile.php?id=61565541022212"
            },
            {
                first_name: "Anaïs",
                last_name: "Delbecq",
                role: "VP IMTBS Bachelor",
                respo: true,
                linkedin: "https://www.linkedin.com/in/ana%C3%AFs-delbecq-1b1a66328/",
                facebook: "https://www.facebook.com/profile.php?id=61564918738615"

            },
            {
                first_name: "Titouan",
                last_name: "Gacougnolle",
                role: "VPR FISA",
                respo: false,
                facebook: "https://www.facebook.com/profile.php?id=61559551011143",
                linkedin: "https://www.linkedin.com/in/titouan-gacougnolle/"
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
                linkedin: "https://www.linkedin.com/in/jules-esnee-160580250/",
                facebook: "https://www.facebook.com/profile.php?id=61561141139656"
            },
            {
                first_name: "Jean",
                last_name: "Vidal",
                role: "Trésorier",
                respo: true,
                facebook: "https://www.facebook.com/profile.php?id=61565198602532"
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
                facebook: "https://www.facebook.com/profile.php?id=100081629075881",
                linkedin: "https://www.linkedin.com/in/nathan-le-sausse/"
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
                linkedin: "https://www.linkedin.com/in/zeineb-benjemaa-b1330b32a/",
                facebook: "https://www.facebook.com/profile.php?id=100010572241414"
            },
            {
                first_name: "Alexandra",
                last_name: "Bert",
                role: "Respo Communication",
                respo: true,
                facebook: "https://www.facebook.com/profile.php?id=61565551670046",
                linkedin: "https://www.linkedin.com/in/alexandra-bert-b91308327/"
            },
            {
                first_name: "Racim",
                last_name: "Aissat",
                role: "Pôle Communication",
                respo: false,
                linkedin: "https://www.linkedin.com/in/racim-aissat-060175333/",
                facebook: "https://www.facebook.com/racim.ais"
            },
            {
                first_name: "Lucas",
                last_name: "Dreano",
                role: "Pôle Communication",
                respo: false,
                facebook: "https://www.facebook.com/profile.php?id=100008347568651",
                linkedin: "https://www.linkedin.com/in/lucas-dreano-9b3bab259/"

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
                facebook: "https://www.facebook.com/charlotte.kaladj",
                linkedin: "https://www.linkedin.com/in/charlotte-kaladjian-532748332/"
            },
            {
                first_name: "Ysée",
                last_name: "Parenti",
                role: "Pôle Évènement",
                respo: false,
                facebook: "https://www.facebook.com/profile.php?id=61565293102346"
            },
            {
                first_name: "Gustave",
                last_name: "Beauvallet",
                role: "Respo Évènement",
                respo: true,
                linkedin: "https://www.linkedin.com/in/gustave-beauvallet/",
                facebook: "https://www.facebook.com/gustave.beauvallet"

            },
            {
                first_name: "Emma",
                last_name: "Weiss",
                role: "Pôle Évènement",
                respo: false,
                facebook: "https://www.facebook.com/profile.php?id=61564000954141"
            },
            {
                first_name: "Ghada",
                last_name: "Sarhrouchni",
                role: "Pôle Évènement",
                respo: false,
                facebook: "https://www.facebook.com/profile.php?id=61564976071237",
                linkedin: "https://www.linkedin.com/in/ghada-sarhrouchni-b4a87a306/"
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
                facebook: "https://www.facebook.com/charlotte.vlieghe.1",
                linkedin: "https://www.linkedin.com/in/charlotte-vlieghe-496249304/"
            },
            {
                first_name: "Hugo",
                last_name: "Kennedy",
                role: "Pôle Soirée",
                respo: false,
                facebook: "https://www.facebook.com/profile.php?id=100013962791797"
            },
            {
                first_name: "Slavik",
                last_name: "Zhyhota-Locquin",
                role: "Respo Soirée",
                respo: true,
                facebook: "https://www.facebook.com/profile.php?id=100078652746929",
                linkedin: "https://www.linkedin.com/in/slavik-zhyhota-locquin-93ba29274/"
            },
            {
                first_name: "Clément",
                last_name: "Bondaz",
                role: "Pôle Soirée",
                respo: false,
                linkedin: "https://www.linkedin.com/in/bondazclement/",
                facebook: "https://www.facebook.com/profile.php?id=100087139393624"
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
                facebook: "https://www.facebook.com/profile.php?id=61563774628611",
                linkedin: "https://www.linkedin.com/in/alexis-dauphin/"
            },
            {
                first_name: "Raphaël",
                last_name: "Lefèvre",
                role: "Respo Séculogie",
                respo: true,
                linkedin: "https://www.linkedin.com/in/raphael-lefevre-871883326/",
                facebook: "https://www.facebook.com/profile.php?id=61565069520153"
            },
            {
                first_name: "Jérôme",
                last_name: "Lin",
                role: "Pôle Séculogie",
                respo: false,
                facebook: "https://www.facebook.com/profile.php?id=100009470617017",
                linkedin: "https://www.linkedin.com/in/lin-jerome/"
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
                facebook: "https://www.facebook.com/profile.php?id=61553948484049",
                linkedin: "https://www.linkedin.com/in/nathan-beauchoux-4655a0331/"
            },
            {
                first_name: "Alexis",
                last_name: "Rossfelder",
                role: "Respo Numérique",
                respo: true,
                facebook: "https://www.facebook.com/alex6ro",
                linkedin: "https://www.linkedin.com/in/arossf/"
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
                facebook: "https://www.facebook.com/profile.php?id=61565433566773",
                linkedin: "https://www.linkedin.com/in/l%C3%A9a-baudimont-b46409327/"
            },
            {
                first_name: "Alexandre",
                last_name: "Guechtouli",
                role: "Pôle RE",
                respo: false,
                facebook: "https://www.facebook.com/profile.php?id=61562043009794",
                linkedin: "https://www.linkedin.com/in/alexandre-guechtouli-7ba607318/"
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
                facebook: "https://www.facebook.com/profile.php?id=61550293695918",
                linkedin: "https://www.linkedin.com/in/l%C3%A9a-dai-109391334/"
            },
            {
                first_name: "Nihel",
                last_name: "Tadjerouni",
                role: "Pôle Ritz",
                respo: false,
                linkedin: "https://www.linkedin.com/in/nihel-tadjerouni-342914236/",
                facebook: "https://www.facebook.com/profile.php?id=61565547414084"
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
                facebook: "https://www.facebook.com/profile.php?id=61559551011143",
                linkedin: "https://www.linkedin.com/in/titouan-gacougnolle/"
            },
            {
                first_name: "Yannick",
                last_name: "Zheng",
                role: "Pôle Prévention",
                respo: false,
                facebook: "https://www.facebook.com/profile.php?id=61564465656252",
                linkedin: "https://www.linkedin.com/in/yannick-zheng/"
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
                facebook: "https://www.facebook.com/godisopensource",
                linkedin: "https://www.linkedin.com/in/paullardet/"
            },
        ],
    },
    {
        name: "Relations Internes",
        full_width: false,
        members: [
            {
                first_name: "Lena",
                last_name: "Boiton Ledenko",
                role: "Respo RI",
                respo: true,
                facebook: "https://www.facebook.com/profile.php?id=61564216119506"

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