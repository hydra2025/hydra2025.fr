import type { ImageMetadata } from "astro";

import adrien from "./assets/profile_pictures/1-Adrien.jpg";
import sarah from "./assets/profile_pictures/2-Sarah.jpg";
import nathanB from "./assets/profile_pictures/3-Nathan B.jpg";
import slavik from "./assets/profile_pictures/4-Slavik.jpg";
import nathanLS from "./assets/profile_pictures/5-Nathan LS.jpg";
import yannick from "./assets/profile_pictures/6-Yannick.jpg";
import thibaud from "./assets/profile_pictures/7-Thibaud.jpg";
import victor from "./assets/profile_pictures/8-Victor.jpg";
import ylan from "./assets/profile_pictures/9-Ylan.jpg";
import ysee from "./assets/profile_pictures/10-Ysee.jpg";
import zeineb from "./assets/profile_pictures/11-Zeineb.jpg";
import racim from "./assets/profile_pictures/12-Racim.jpg";
import raph from "./assets/profile_pictures/13-Raph.jpg";
import titouan from "./assets/profile_pictures/14-Titouan.jpg";
import luca from "./assets/profile_pictures/15-Luca.jpg";
import clement from "./assets/profile_pictures/16-Clement.jpg";
import lucas from "./assets/profile_pictures/17-Lucas.jpg";
import lena from "./assets/profile_pictures/18-Lena.jpg";
import habi from "./assets/profile_pictures/19-Habi.jpg";
import ghada from "./assets/profile_pictures/20-Ghada.jpg";
import judith from "./assets/profile_pictures/21-Judith.jpg";
import leaB from "./assets/profile_pictures/22-Lea B.jpg";
import leaD from "./assets/profile_pictures/23-Lea D.jpg";
import hugo from "./assets/profile_pictures/24-Hugo.jpg";
import charlotteK from "./assets/profile_pictures/25-Charlotte K.jpg";
import jean from "./assets/profile_pictures/26-Jean.jpg";
import emma from "./assets/profile_pictures/27-Emma.jpg";
import charlotteV from "./assets/profile_pictures/28-Charlotte V.jpg";
import anais from "./assets/profile_pictures/29-Anais.jpg";
import jerome from "./assets/profile_pictures/30-Jerome.jpg";
import jules from "./assets/profile_pictures/31-Jules.jpg";
import alexisR from "./assets/profile_pictures/32-Alexis.jpg";
import alexandre from "./assets/profile_pictures/33-Alexandre.jpg";
import alexandra from "./assets/profile_pictures/34-Alexandra.jpg";
import gustave from "./assets/profile_pictures/35-Gustave.jpg";
import nihel from "./assets/profile_pictures/36-Nihel.png";
import paul from "./assets/profile_pictures/37-Paul.png";
import alexisD from "./assets/profile_pictures/38-AlexisD.png";


type Member = {
    first_name: string;
    last_name: string;
    role: string;
    img?: ImageMetadata;
    respo: boolean;
    linkedin?: string;
    facebook?: string;
    questionExtra?: string;
    answerExtra?: string;
    _has_overlay?: boolean; // Only one member should have this set to true
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
                first_name: "Luca",
                last_name: "Fuster",
                role: "Président",
                respo: true,
                linkedin: "https://www.linkedin.com/in/luca-fuster-02a1a2246/",
                facebook: "https://www.facebook.com/luca.fuster.18",
                img: luca,
                questionExtra: "Coordinateur :",
                answerExtra: "Oui",
                _has_overlay: true
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
                questionExtra: "Carry :",
                answerExtra: "Oui",
                facebook: "https://www.facebook.com/profile.php?id=61565049044086",
                linkedin: "https://www.linkedin.com/in/am%C3%A9lie-t-830896206/",
            },
            {
                first_name: "Judith",
                last_name: "Lin",
                role: "VP TSP",
                respo: true,
                questionExtra: "3h :",
                answerExtra: "23h",
                facebook: "https://www.facebook.com/profile.php?id=61565541022212",
                img: judith
            },
            {
                first_name: "Anaïs",
                last_name: "Delbecq",
                role: "VP IMTBS Bachelor",
                respo: true,
                questionExtra: "Cerveau :",
                answerExtra: "Activé",
                linkedin: "https://www.linkedin.com/in/ana%C3%AFs-delbecq-1b1a66328/",
                facebook: "https://www.facebook.com/profile.php?id=61564918738615",
                img: anais

            },
            {
                first_name: "Titouan",
                last_name: "Gacougnolle",
                role: "VPR FISA",
                respo: false,
                questionExtra: "Boisson :",
                answerExtra: "Eau*",
                facebook: "https://www.facebook.com/profile.php?id=61559551011143",
                linkedin: "https://www.linkedin.com/in/titouan-gacougnolle/",
                img: titouan
            },
        ],
    },
    {
        name: "Trésorerie",
        full_width: false,
        members: [
            {
                first_name: "Jules",
                last_name: "Esnée",
                role: "Vice-Trésorier",
                respo: false,
                questionExtra: "Charme :",
                answerExtra: "Maximum",
                linkedin: "https://www.linkedin.com/in/jules-esnee-160580250/",
                facebook: "https://www.facebook.com/profile.php?id=61561141139656",
                img: jules
            },
            {
                first_name: "Jean",
                last_name: "Vidal",
                role: "Trésorier",
                respo: true,
                questionExtra: "Argent :",
                answerExtra: "Jamais assez",
                linkedin: "https://www.linkedin.com/in/jean-vidal-159167334/",
                facebook: "https://www.facebook.com/profile.php?id=61565198602532",
                img: jean
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
                linkedin: "https://www.linkedin.com/in/nathan-le-sausse/",
                img: nathanLS
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
                questionExtra: "Co-respo :",
                answerExtra: "Oui",
                linkedin: "https://www.linkedin.com/in/zeineb-benjemaa-b1330b32a/",
                facebook: "https://www.facebook.com/profile.php?id=100010572241414",
                img: zeineb

            },
            {
                first_name: "Alexandra",
                last_name: "Bert",
                role: "Respo Communication",
                respo: true,
                questionExtra: "Design :",
                answerExtra: "Incroyable",
                facebook: "https://www.facebook.com/profile.php?id=61565551670046",
                linkedin: "https://www.linkedin.com/in/alexandra-bert-b91308327/",
                img: alexandra
            },
            {
                first_name: "Racim",
                last_name: "Aissat",
                role: "Pôle Communication",
                respo: false,
                linkedin: "https://www.linkedin.com/in/racim-aissat-060175333/",
                facebook: "https://www.facebook.com/racim.ais",
                img: racim
            },
            {
                first_name: "Lucas",
                last_name: "Dreano",
                role: "Pôle Communication",
                respo: false,
                facebook: "https://www.facebook.com/profile.php?id=100008347568651",
                linkedin: "https://www.linkedin.com/in/lucas-dreano-9b3bab259/",
                img: lucas

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
                linkedin: "https://www.linkedin.com/in/charlotte-kaladjian-532748332/",
                img: charlotteK
            },
            {
                first_name: "Ysée",
                last_name: "Parenti",
                role: "Pôle Évènement",
                respo: false,
                facebook: "https://www.facebook.com/profile.php?id=61565293102346",
                img: ysee
            },
            {
                first_name: "Gustave",
                last_name: "Beauvallet",
                role: "Respo Évènement",
                respo: true,
                questionExtra: "Imagination :",
                answerExtra: "Débordante",
                linkedin: "https://www.linkedin.com/in/gustave-beauvallet/",
                facebook: "https://www.facebook.com/gustave.beauvallet",
                img: gustave

            },
            {
                first_name: "Emma",
                last_name: "Weiss",
                role: "Pôle Évènement",
                respo: false,
                facebook: "https://www.facebook.com/profile.php?id=61564000954141",
                img: emma
            },
            {
                first_name: "Ghada",
                last_name: "Sarhrouchni",
                role: "Pôle Évènement",
                respo: false,
                facebook: "https://www.facebook.com/profile.php?id=61564976071237",
                linkedin: "https://www.linkedin.com/in/ghada-sarhrouchni-b4a87a306/",
                img: ghada
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
                linkedin: "https://www.linkedin.com/in/charlotte-vlieghe-496249304/",
                img: charlotteV
            },
            {
                first_name: "Hugo",
                last_name: "Kennedy",
                role: "Pôle Soirée",
                respo: false,
                facebook: "https://www.facebook.com/profile.php?id=100013962791797",
                img: hugo
            },
            {
                first_name: "Slavik",
                last_name: "Zhyhota-Locquin",
                role: "Respo Soirée",
                respo: true,
                questionExtra: "Pôle 2 :",
                answerExtra: "Communication",
                facebook: "https://www.facebook.com/profile.php?id=100078652746929",
                linkedin: "https://www.linkedin.com/in/slavik-zhyhota-locquin-93ba29274/",
                img: slavik
            },
            {
                first_name: "Clément",
                last_name: "Bondaz",
                role: "Pôle Soirée",
                respo: false,
                linkedin: "https://www.linkedin.com/in/bondazclement/",
                facebook: "https://www.facebook.com/profile.php?id=100087139393624",
                img: clement
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
                linkedin: "https://www.linkedin.com/in/alexis-dauphin/",
                img: alexisD
            },
            {
                first_name: "Raphaël",
                last_name: "Lefèvre",
                role: "Respo Séculogie",
                respo: true,
                questionExtra: "PR :",
                answerExtra: "Oui",
                linkedin: "https://www.linkedin.com/in/raphael-lefevre-871883326/",
                facebook: "https://www.facebook.com/profile.php?id=61565069520153",
                img: raph

            },
            {
                first_name: "Jérôme",
                last_name: "Lin",
                role: "Pôle Séculogie",
                respo: false,
                facebook: "https://www.facebook.com/profile.php?id=100009470617017",
                linkedin: "https://www.linkedin.com/in/lin-jerome/",
                img: jerome
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
                questionExtra: "JavaScript :",
                answerExtra: "Activé",
                facebook: "https://www.facebook.com/profile.php?id=61553948484049",
                linkedin: "https://www.linkedin.com/in/nathan-beauchoux-4655a0331/",
                img: nathanB
            },
            {
                first_name: "Alexis",
                last_name: "Rossfelder",
                role: "Respo Numérique",
                respo: true,
                questionExtra: "CSS :",
                answerExtra: "Flex",
                facebook: "https://www.facebook.com/alex6ro",
                linkedin: "https://www.linkedin.com/in/arossf/",
                img: alexisR
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
                facebook: "https://www.facebook.com/profile.php?id=61564216119506",
                img: lena
            },
        ],
    },
    {
        name: "Relations Entreprises",
        full_width: false,
        members: [
            {
                first_name: "Léa",
                last_name: "Baudimont",
                role: "Respo RE",
                respo: true,
                facebook: "https://www.facebook.com/profile.php?id=61565433566773",
                linkedin: "https://www.linkedin.com/in/l%C3%A9a-baudimont-b46409327/",
                img: leaB
            },
            {
                first_name: "Alexandre",
                last_name: "Guechtouli",
                role: "Pôle RE",
                respo: false,
                facebook: "https://www.facebook.com/profile.php?id=61562043009794",
                linkedin: "https://www.linkedin.com/in/alexandre-guechtouli-7ba607318/",
                img: alexandre
            },
        ],
    },
    {
        name: "Ritz",
        full_width: false,
        members: [
            {
                first_name: "Thomas",
                last_name: "Daufresne",
                role: "Pôle Ritz",
                respo: false,
                questionExtra: "Pôle Alumnis :",
                answerExtra: "Non",
                facebook: "https://www.facebook.com/profile.php?id=61565175063811",
                linkedin: "https://www.linkedin.com/in/thomas-daufresne-3a24b9234/",

            },
            {
                first_name: "Léa",
                last_name: "Dai",
                role: "Respo Ritz",
                respo: true,
                questionExtra: "Roulés :",
                answerExtra: "Toujours",
                facebook: "https://www.facebook.com/profile.php?id=61550293695918",
                linkedin: "https://www.linkedin.com/in/l%C3%A9a-dai-109391334/",
                img: leaD
            },
            {
                first_name: "Nihel",
                last_name: "Tadjerouni",
                role: "Pôle Ritz",
                respo: false,
                linkedin: "https://www.linkedin.com/in/nihel-tadjerouni-342914236/",
                facebook: "https://www.facebook.com/profile.php?id=61565547414084",
                img: nihel
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
                questionExtra: "Boisson :",
                answerExtra: "Eau*",
                facebook: "https://www.facebook.com/profile.php?id=61559551011143",
                linkedin: "https://www.linkedin.com/in/titouan-gacougnolle/",
                img: titouan
            },
            {
                first_name: "Yannick",
                last_name: "Zheng",
                role: "Pôle Prévention",
                respo: false,
                questionExtra: "HYDRAtation :",
                answerExtra: "Sans modération",
                facebook: "https://www.facebook.com/profile.php?id=61564465656252",
                linkedin: "https://www.linkedin.com/in/yannick-zheng/",
                img: yannick
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
                linkedin: "https://www.linkedin.com/in/paullardet/",
                img: paul
            },
        ],
    },
    {
        name: "Pougnes",
        full_width: false,
        members: [
            {
                first_name: "Ylan",
                last_name: "Mimoun",
                role: "Respo Pougnes TSP",
                respo: true,
                questionExtra: "Focus :",
                answerExtra: "Oui",
                facebook: "https://www.facebook.com/profile.php?id=61564857758611",
                linkedin: "https://www.linkedin.com/in/ylan-mimoun/",
                img: ylan
            },
            {
                first_name: "Amélie",
                last_name: "Thai",
                role: "Pougnes IMTBS",
                respo: false,
                questionExtra: "Carry :",
                answerExtra: "Oui",
                facebook: "https://www.facebook.com/profile.php?id=61565049044086",
                linkedin: "https://www.linkedin.com/in/am%C3%A9lie-t-830896206/"
            },
        ]
    },
    {
        name: "T&MA (Alumnis)",
        full_width: false,
        members: [
            {
                first_name: ".",
                last_name: ".",
                role: ".",
                respo: false,
            },
        ],
    },
];

export { poles };
export type { Pole, Member };