export interface Email {
  id: string;
  from: string;
  subject: string;
  body: string;
  date: string;
  time: string;
  isRead: boolean;
}

export type ViewMode = 'list' | 'detail';