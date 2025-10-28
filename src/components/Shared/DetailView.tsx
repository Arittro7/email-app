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

  if (!current) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white rounded-md p-6 w-[600px] shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold">{current.title}</h2>
          <button onClick={() => setCurrent(null)}>Close (Esc)</button>
        </div>
        <p className="text-slate-600 leading-relaxed">{current.body}</p>
        <div className="mt-4 flex gap-2">
          <button onClick={() => markRead([current.id])}>Mark as read (r)</button>
          <button onClick={() => { archive([current.id]); setCurrent(null); }}>
            Archive (a)
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailView;