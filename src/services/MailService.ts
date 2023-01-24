import { AxiosResponse } from "axios";
import $api from "../http";
import SendMailData from "../models/SendMailData";

export default class MailService {
  static async sendMail(
    sendMailData: SendMailData
  ): Promise<AxiosResponse<{ message: string }>> {
    return $api.post("/api/email", {
      ...sendMailData,
    });
  }
}
