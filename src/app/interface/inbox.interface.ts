export enum ETypeSender {
  IS_YOU = "is-you",
  IS_OTHERS = "is-others",
}

export interface IMessages {
  titleMessage: string;
  senderName: string;
  bodyChat: string;
  createdAt: string;
  updatedAt: string;
  isRead: boolean;
  type: ETypeSender;
}

export interface IInbox {
  id: string;
  titleMessage: string;
  date: string;
  participants: number;
  messages: IMessages[];
}

export interface IParamsGetInbox {
  search?: string;
  sortBy?: "asc" | "desc";
}
