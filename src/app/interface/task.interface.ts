export enum EBadge {
  IMPORTANT_ASAP = "important-asap",
  OFFLINE_MEETING = "offline-meeting",
  VIRTUAL_MEETING = "virtual-meeting",
  ASAP = "asap",
  CLIENT_RELATED = "client-related",
  SELF_TASK = "self-task",
  APPOINMENT = "appoinment",
  COURT_RELATED = "court-related",
}

export interface IParamsTask {
  order: "asc" | "desc";
  filter?: "personal-errands" | "urgent-todo";
}

export interface ITask {
  id?: string;
  isChecked?: boolean;
  title?: string;
  expireDate?: string;
  description?: string;
  tags?: EBadge[];
  filter?: "personal-errands" | "urgent-todo";
}
