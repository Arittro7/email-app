export type MailID = string;

export interface Mail {
  id: MailID;
  title: string;
  body: string;
  isRead: boolean;
  isArchived: boolean;
}