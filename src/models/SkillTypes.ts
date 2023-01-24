import { IImage } from "./ImageTypes";

export interface ISkillGroupItem {
  id: number;
  name: string;
  skillItems: ISkillItem[];
}
export interface ISkillItem {
  id: number;
  skillName: string;
  skillImage: IImage;
}
export default interface ISkill {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    skillGroup: string;
    skillGroupItems: ISkillGroupItem[];
  };
}
