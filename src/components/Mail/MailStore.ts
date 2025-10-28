import { create } from 'zustand';
import type { Mail, MailID } from '../../types/Mail';


// fake data
const fakeEmails: Mail[] = [
  { id: '1', title: 'Hello', body: 'Hi there', isRead: false, isArchived: false },
  { id: '2', title: 'Newsletter', body: 'Monthly news', isRead: true, isArchived: false },
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
  currentId: fakeEmails[0]?.id ?? null,

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