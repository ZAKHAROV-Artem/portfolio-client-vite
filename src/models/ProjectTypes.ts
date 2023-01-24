import { IImages } from "./ImageTypes";

export interface IProject {
  id: number;
  attributes: {
    name: string;
    description: string;
    link: string;
    tech: string[];
    seeMore: string;
    finished: boolean;
    projectType: string;
    createdAt: string;
    updatedAt: string;
    images: { data: IImages[] };
  };
}
