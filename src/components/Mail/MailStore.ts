import { create } from 'zustand';
import type { Mail, MailID } from '../../types/Mail';

// fake data
const fakeEmails: Mail[] = [
  { id: '1', title: 'Your 7-figure plan goes bye-bye at midnight', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', isRead: false, isArchived: false },
  { id: '2', title: '[WEEKEND ONLY] Get this NOW before', body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', isRead: false, isArchived: false },
  { id: '3', title: 'Uh-oh, your prescription is expiring', body: 'Your prescription needs renewal. Please contact us.', isRead: false, isArchived: false },
];

interface MailState {
  emails: Mail[];
  selection: Set<MailID>;
  currentId: MailID | null;

  setCurrent: (id: MailID | null) => void;
  toggleSelect: (id: MailID) => void;
  clearSelection: () => void;
  markRead: (ids: MailID[]) => void;
  archive: (ids: MailID[]) => void;
  unarchive: (ids: MailID[]) => void;
}

export const useMailStore = create<MailState>((set, get) => ({
  emails: fakeEmails,
  selection: new Set(),
  currentId: null,

  setCurrent: (id) => set({ currentId: id }),

  toggleSelect: (id) => {
    const next = new Set(get().selection);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    set({ selection: next });
  },

  clearSelection: () => set({ selection: new Set() }),

  markRead: (ids) =>
    set((state) => ({
      emails: state.emails.map((mail) =>
        ids.includes(mail.id) ? { ...mail, isRead: true } : mail
      ),
    })),

  archive: (ids) =>
    set((state) => ({
      emails: state.emails.map((mail) =>
        ids.includes(mail.id) ? { ...mail, isArchived: true } : mail
      ),
      currentId: ids.includes(state.currentId ?? '') ? null : state.currentId,
    })),

  unarchive: (ids) =>
    set((state) => ({
      emails: state.emails.map((mail) =>
        ids.includes(mail.id) ? { ...mail, isArchived: false } : mail
      ),
    })),
}));