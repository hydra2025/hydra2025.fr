type Event = {
    title: string;
    day: string;
    month: string;
    content?: string;

}
const events: Event[] = [
    {
        title: "Show d'ouverture",
        day: "6",
        month: "fev"
    },
    {
        title: "Stand de campagne",
        day: "7-8",
        month: "fev",
        content: "Venez nous rencontrer et discuter avec nous de nos projets pour l'année à venir."
    },
    {
        title: "Soirée de campagne",
        day: "7",
        month: "fev",
        content: "C'est LA soirée à ne pas rater ! Venez découvrir un avant-goût de ce qui vous attend l'année prochaine si vous votez HYDRA."
    },
    {
        title: "Débat des listes",
        day: "9",
        month: "fev",
        content: "Un retour sur cette campagne, où vous aurez l'occasion de poser vos questions pôle par pôle aux deux listes."
    },
    {
        title: "Votes",
        day: "10",
        month: "fev",
        content: "C'est le grand jour ! Venez voter pour la liste HYDRA."
    }
]

export default events;
export type { Event };