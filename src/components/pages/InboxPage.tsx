import MailList from "../Mail/MailList";
import SelectionBar from "../Mail/SelectionBar";

const InboxPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <SelectionBar/>
      <MailList showArchived={false} />

    </div>
  );
};

export default InboxPage;
