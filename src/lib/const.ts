export const WEBSITE_TITLE = process.env.NEXT_PUBLIC_WEBSITE_TITLE ?? "";
export const META_TITLE = `Le site de ${WEBSITE_TITLE}`;
export const META_DESCRIPTION = "Pokemon Anarchy, comics parodique de Pokémon";
export const HEAD_TITLE = `${META_TITLE} - ${META_DESCRIPTION}`;
export const COMICS_PUBLIC_DIR =
    process.env.NEXT_PUBLIC_COMICS_PUBLIC_DIR ?? "";
export const COMICS_WEBP = process.env.NEXT_PUBLIC_COMICS_WEBP === "1";
export const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL ?? "";
export const COMICS_IMAGE_URL = process.env.NEXT_PUBLIC_COMICS_IMAGE_URL ?? "";
export const DEFAULT_GAME_CATEGORY = "pokemon-rubis";
export const RSS_TITLE = `Les comics de ${WEBSITE_TITLE}`;
export const RSS_DESCRIPTION = `Nouveaux comics de ${WEBSITE_TITLE}`;
