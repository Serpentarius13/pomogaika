type TTag = { src: string; alt: string };

export const iconMap = {
  stars: { src: "/icons/tags/stars.svg", alt: "Иконка звезд" },
  boot: { src: "/icons/tags/boot.svg", alt: "Иконка ботинка" },
  chat: { src: "/icons/chat.svg", alt: "Иконка чата" },
} as const;

export type TIconMap = keyof typeof iconMap;
