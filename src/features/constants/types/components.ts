import { TIconMap } from "@/features/constants/variables/iconMap";

export interface ITag {
  name: TIconMap;
  text?: string;
}

export interface IImage {
  src: string;
  alt: string;
}

export type TRegimeTime = "day" | "night" | null | undefined | false;

export interface IRegime {
  monday: TRegimeTime;
  tuesday: TRegimeTime;
  wednesday: TRegimeTime;
  thursday: TRegimeTime;
  friday: TRegimeTime;
  saturday: TRegimeTime;
  sunday: TRegimeTime;
}

export type TRegimeKeys = keyof IRegime;
