type TTag = { src: string; alt: string };

export const iconMap = {
  stars: { src: "/icons/tags/stars.svg", alt: "Иконка звезд" },
  boot: { src: "/icons/tags/boot.svg", alt: "Иконка ботинка" },
  chat: { src: "/icons/chat.svg", alt: "Иконка чата" },
  moon: { src: "/icons/moon.svg", alt: "Иконка луны" },
  sun: { src: "/icons/sun.svg", alt: "Иконка солнца" },
  "check-orange": {
    src: "/icons/multicolor/check-orange.svg",
    alt: "Иконка галочки",
  },
} as const;

export type TIconMap = keyof typeof iconMap;
