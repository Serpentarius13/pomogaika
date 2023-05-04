import { TIconMap } from "@/features/constants/variables/iconMap";

export interface ITag {
  name: TIconMap;
  text?: string;
}

export interface IImage {
  src: string;
  alt: string;
}