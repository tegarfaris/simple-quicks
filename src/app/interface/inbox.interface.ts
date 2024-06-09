export interface IMessages {
  id: string;
  titleMessage?: string;
  senderName: string;
  bodyChat: string;
  createdAt: string;
  updatedAt?: string;
  isRead?: boolean;
  isSender: boolean;
  isEdited?: boolean;
}

export interface IInbox {
  id: string;
  titleMessage: string;
  date: string;
  messages: IMessages[];
}

export interface IParamsGetInbox {
  search?: string;
  sortBy?: "asc" | "desc";
}
