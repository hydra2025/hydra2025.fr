type HydraVideo = {
  title: string;
  youtube: string;
  sources: string[];
};

export const videos: HydraVideo[] = [
  //{
  //    title: "Clip de liste",
  //    youtube: "https://www.youtube.com/watch?v=Ts5-b2x9d3Y",
  //    sources: ["/f/clip-de-liste.mp4"],
  //},
  {
    title: "Clip de Campagne",
    youtube: "https://youtu.be/D-kjCbLjEO0",
    sources: [
      "/f/clip_campagne/output_1.mp4",
      "/f/clip_campagne/output_2.webm",
    ],
  },
  {
    title: "Rap de liste (Traque)",
    youtube: "https://www.youtube.com/watch?v=xTRPHDEBdjM",
    sources: [
      "/f/rap_de_liste/output_1.mp4",
      "/f/rap_de_liste/output_2.webm",
    ],
  },
  {
    title: "Notre programme",
    youtube: "https://www.youtube.com/watch?v=NvpxvMistG4",
    sources: [
      "/f/programme_bde_hydra_vf/output_1.mp4",
      "/f/programme_bde_hydra_vf/output_2.webm",
    ],
  },
];
