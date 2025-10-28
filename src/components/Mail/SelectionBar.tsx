import { useMailStore } from "./MailStore";

const SelectionBar = () => {
  const selection = useMailStore((store) => store.selection);
  const markRead = useMailStore((store) => store.markRead);
  const archive = useMailStore((store) => store.archive);
  const clearSelection = useMailStore((store) => store.clearSelection);

  if (selection.size === 0) return null;

  const ids = Array.from(selection);

  return (
    <div className="flex items-center justify-between bg-slate-100 border p-2 rounded-md mb-2">
      <span>Emails selected ({selection.size})</span>
      <div className="flex gap-2">
        <button onClick={() => { markRead(ids); clearSelection(); }}>
          Mark as read (r)
        </button>
        <button onClick={() => { archive(ids); clearSelection(); }}>
          Archive (a)
        </button>
      </div>
    </div>
  );
};

export default SelectionBar;