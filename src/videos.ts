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
        title: "Rap de liste",
        youtube: "https://www.youtube.com/watch?v=xTRPHDEBdjM",
        sources: [
            "https://f.hydra2025.fr/traque/output_0.mp4",
            "https://f.hydra2025.fr/traque/output_1.webm"
        ],
    },
    {
        title: "Notre programme",
        youtube: "https://www.youtube.com/@HydraTMSP-2025",
        sources: [
            "https://f.hydra2025.fr/programme_bde_hydra_vf/output_0.mp4",
            "https://f.hydra2025.fr/programme_bde_hydra_vf/output_1.mp4",
            "https://f.hydra2025.fr/programme_bde_hydra_vf/output_2.webm"
        ],
    }
];