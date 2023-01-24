import { IImage } from "./ImageTypes";

export interface IMainPageData {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    welcomeScreen: IWelcomeScreen;
    aboutMe: IAboutMe;
    skills: ISimple;
    projects: ISimple;
    contactForm: IContactForm;
    footer: IFooter;
  };
}

interface IWelcomeScreen {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: IImage;
}
interface ISimple {
  id: number;
  title: string;
  viewMore: string;
}
interface IAboutMe extends ISimple {
  description: string;
}
interface IContactForm {
  id: number;
  title: string;
  name: FormItem;
  email: FormItem;
  message: FormItem;
}
type FormItem = {
  id: number;
  title: string;
  placeholder: string;
};
interface IFooter {
  id: number;
  text: string;
  title: string;
  logo: IImage;
  socialMedia: SocialMedia[];
}
type SocialMedia = {
  id: number;
  text: string;
  link: string | null;
  icon: IImage | { data: null };
};

export interface IAboutMePageData {
  id: number;
  attributes: {
    title: string;
    text1: string;
    text2: string;
    textHighlighted: string;
    hobbies: {
      title: string;
      hobbies: string[];
    };
  };
}
