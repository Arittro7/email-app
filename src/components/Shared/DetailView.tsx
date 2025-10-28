import { useEffect } from 'react';
import { useMailStore } from '../Mail/MailStore';

const DetailView: React.FC = () => {
  const emails = useMailStore((store) => store.emails);
  const currentId = useMailStore((store) => store.currentId);
  const setCurrent = useMailStore((store) => store.setCurrent);
  const markRead = useMailStore((store) => store.markRead);
  const archive = useMailStore((store) => store.archive);

  const current = emails.find((e) => e.id === currentId) ?? null;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!current) return;
      if (e.key === 'Escape') setCurrent(null);
      if (e.key.toLowerCase() === 'r') markRead([current.id]);
      if (e.key.toLowerCase() === 'a'){ 
        archive([current.id]);
        setCurrent(null)
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [current, setCurrent, markRead, archive]);

  if (!current) {
    return (
      <div className="h-full flex items-center justify-center text-slate-400">
        Select an email to view
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-white flex flex-col">
      {/* Header with actions */}
      <div className="flex justify-between items-center border-b p-4">
        <h2 className="text-lg font-bold">{current.title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrent(null)}
            className="px-3 py-1 text-sm border rounded hover:bg-slate-100"
          >
            Close (Esc)
          </button>
          <button
            onClick={() => markRead([current.id])}
            className="px-3 py-1 text-sm border rounded hover:bg-slate-100"
          >
            Mark as read (r)
          </button>
          <button
            onClick={() => {
              archive([current.id]);
              setCurrent(null);
            }}
            className="px-3 py-1 text-sm border rounded hover:bg-slate-100"
          >
            Archive (a)
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 overflow-y-auto">
        <p className="text-slate-600 leading-relaxed">{current.body}</p>
      </div>
    </div>
  );
};

export default DetailView;