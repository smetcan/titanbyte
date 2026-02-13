import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TitanByte - Bilim ve Teknoloji Haberleri",
    short_name: "TitanByte",
    description: "Bilim ve teknoloji dünyasından en son haberler, makaleler ve analizler.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f19",
    theme_color: "#7c3aed",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/icon?type=png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
