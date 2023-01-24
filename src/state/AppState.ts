import { makeAutoObservable, runInAction } from "mobx";
import { IAboutMePageData, IMainPageData } from "../models/DataType";
import { IProject } from "../models/ProjectTypes";
import SendMailData from "../models/SendMailData";
import ISkill from "../models/SkillTypes";
import MailService from "../services/MailService";
import AppService from "../services/AppService";

class AppState {
  isMailSent: boolean = false;
  loading: boolean = true;
  skills: ISkill[] = [];
  projects: IProject[] = [];
  mainPageData: IMainPageData | null = null;
  aboutMeData: IAboutMePageData | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(isLoading: boolean) {
    this.loading = isLoading;
  }
  setIsMailSent(isSent: boolean) {
    this.isMailSent = isSent;
  }

  async fetchSkills() {
    this.loading = true;
    const data = await AppService.fetchSkills();

    runInAction(() => {
      this.skills = data.data.data;
      this.loading = false;
    });
  }
  async fetchProjects() {
    this.loading = true;
    const data = await AppService.fetchProjects();

    runInAction(() => {
      this.projects = data.data.data;
      this.loading = false;
    });
  }
  async fetchMainPageData() {
    this.loading = true;
    const data = await AppService.fetchMainPageData();
    runInAction(() => {
      this.mainPageData = data.data.data;
      this.loading = false;
    });
  }
  async fetchAboutMePageData() {
    this.loading = true;
    const data = await AppService.fetchAboutMePageData();
    runInAction(() => {
      this.aboutMeData = data.data.data;
      this.loading = false;
    });
  }
  async sendMail(sendMailData: SendMailData) {
    const res = await MailService.sendMail(sendMailData);
    return res;
  }
}

export default AppState;
