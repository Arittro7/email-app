import MailItem from "./MailItem";
import { useMailStore } from "./MailStore";

type MailListProps = {
  showArchived: boolean;
};

const MailList: React.FC<MailListProps> = ({ showArchived }) => {
  const allEmails = useMailStore((store) => store.emails);
  const emailsToShow = allEmails.filter((e) =>
    showArchived ? e.isArchived : !e.isArchived
  );

  return (
    <div className="flex flex-col gap-2">
      {emailsToShow.map((email) => (
        <MailItem key={email.id} mail={email} />
      ))}
    </div>
  );
};

export default MailList;