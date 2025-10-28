import MailList from "../Mail/MailList";

const InboxPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <MailList showArchived={false} />

    </div>
  );
};

export default InboxPage;
