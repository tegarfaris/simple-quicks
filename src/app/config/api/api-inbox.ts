export enum API_INBOX {
  // GET LIST INBOX
  INBOXS = "/inboxs",
}
export const API_INBOX_GET_MESSAGE = (id: string): string =>
  `/inboxs/${id}/messages`;
