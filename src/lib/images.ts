import type { ImageMetadata } from "astro";

/**
 * Resolve uma imagem de /src/assets pelo nome do arquivo.
 * Permite que o config (content.ts) referencie só "hero.jpg" e o
 * componente recupere o asset otimizável. Troque o arquivo na pasta
 * e o site usa a nova imagem — sem mexer em import.
 */
const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/*.{jpg,jpeg,png,webp,avif}",
  { eager: true }
);

export function getImage(name: string): ImageMetadata | undefined {
  const match = Object.entries(images).find(([path]) => {
    const file = path.split("/").pop() ?? "";
    const base = file.replace(/\.[^.]+$/, "");
    // Aceita tanto o nome com extensão ("hero-main.jpg") quanto sem
    // ("hero-main") — content.ts não precisa saber a extensão final.
    return file === name || base === name;
  });
  return match?.[1].default;
}
