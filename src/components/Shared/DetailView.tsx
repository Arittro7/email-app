import React, { useEffect } from 'react';
import { useMailStore } from '../Mail/MailStore';

const DetailView: React.FC = () => {
  const emails = useMailStore((store) => store.emails);
  const currentId = useMailStore((store) => store.currentId);
  const markRead = useMailStore((store) => store.markRead);

  const current = emails.find((email) => email.id === currentId) ?? null;

  useEffect(() => {
    if (current && !current.isRead) {
      markRead([current.id]);
    }
  }, [current, markRead]);

  if (!current) {
    return <div className="text-slate-500">Select an email to view details</div>;
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-lg font-bold">{current.title}</h2>
      <p className="text-slate-600 leading-relaxed">{current.body}</p>
    </div>
  );
};

export default DetailView;