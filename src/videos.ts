type HydraVideo = {
    title: string;
    youtube: string;
    sources: string[];
}

export const videos: HydraVideo[] = [
    //{
    //    title: "Clip de liste",
    //    youtube: "https://www.youtube.com/watch?v=Ts5-b2x9d3Y",
    //    sources: ["https://f.hydra2025.fr/clip-de-liste.mp4"],
    //},
    {
        title: "Clip de Campagne",
        youtube: "https://youtu.be/D-kjCbLjEO0",
        sources: [
            "https://f.hydra2025.fr/clip_campagne/output_1.mp4",
            "https://f.hydra2025.fr/clip_campagne/output_2.webm"
        ],
    },
    {
        title: "Rap de liste (Traque)",
        youtube: "https://www.youtube.com/watch?v=xTRPHDEBdjM",
        sources: [
            "https://f.hydra2025.fr/rap_de_liste/output_1.mp4",
            "https://f.hydra2025.fr/rap_de_liste/output_2.webm"
        ],
    },
    {
        title: "Notre programme",
        youtube: "https://www.youtube.com/watch?v=NvpxvMistG4",
        sources: [
            "https://f.hydra2025.fr/programme_bde_hydra_vf/output_1.mp4",
            "https://f.hydra2025.fr/programme_bde_hydra_vf/output_2.webm"
        ],
    }
];