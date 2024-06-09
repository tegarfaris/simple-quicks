export enum API_INBOX {
  // GET LIST INBOX
  INBOXS = "/inboxs",
}
export const API_INBOX_MESSAGE = (id: string): string =>
  `/inboxs/${id}/messages`;

export const API_INBOX_EDIT_MESSAGE = (inboxId: string, id: string): string =>
  `/inboxs/${inboxId}/messages/${id}`;
