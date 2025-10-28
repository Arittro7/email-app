import MailList from "../Mail/MailList";

const ArchivePage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <MailList showArchived={true} />
    </div>
  );
};

export default ArchivePage;
