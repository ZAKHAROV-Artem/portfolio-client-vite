import $api from "../http";
import { IAboutMePageData, IMainPageData } from "../models/DataType";
import { IProject } from "../models/ProjectTypes";
import { FetchResponse } from "../models/ServerResponses";
import ISkill from "../models/SkillTypes";

class AppService {
  async fetchSkills() {
    const data = await $api.get<FetchResponse<ISkill[]>>("/api/skills", {
      params: {
        populate: "deep",
        "sort[0]": "id",
      },
    });

    return data;
  }

  async fetchProjects() {
    const data = await $api.get<FetchResponse<IProject[]>>("/api/projects", {
      params: {
        populate: "deep",
      },
    });

    return data;
  }
  async fetchMainPageData() {
    const data = await $api.get<FetchResponse<IMainPageData>>(
      "/api/main-page",
      {
        params: {
          populate: "deep",
        },
      }
    );

    return data;
  }
  async fetchAboutMePageData() {
    const data = await $api.get<FetchResponse<IAboutMePageData>>(
      "/api/about-me-page",
      {
        params: {
          populate: "deep",
        },
      }
    );

    return data;
  }
}

export default new AppService();
