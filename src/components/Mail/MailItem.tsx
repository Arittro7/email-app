import type { Mail } from '../../types/Mail';
import { useMailStore } from './MailStore';

interface Props {
  mail: Mail;
}

const MailItem: React.FC<Props> = ({ mail }) => {
  const toggleSelect = useMailStore((store) => store.toggleSelect);
  const selection = useMailStore((store) => store.selection);
  const setCurrent = useMailStore((store) => store.setCurrent);

  const selected = selection.has(mail.id);

  return (
    <div
      className={`flex items-center gap-3 border rounded-md px-3 py-2 transition ${
        selected ? 'bg-indigo-50 border-indigo-200' : 'border-slate-200'
      }`}
    >
      <input
        type="checkbox"
        checked={selected}
        onChange={() => toggleSelect(mail.id)}
        className="w-4 h-4"
      />
      <button
        onClick={() => setCurrent(mail.id)}
        className={`text-left flex-1 ${
          mail.isRead ? 'text-slate-600' : 'font-semibold text-slate-900'
        } hover:text-blue-600`}
      >
        {mail.title}
      </button>
    </div>
  );
};

export default MailItem;