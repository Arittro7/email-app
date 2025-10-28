/* eslint-disable @typescript-eslint/no-explicit-any */

import MailItem from "./MailItem";
import { useMailStore } from "./MailStore";

type MailListProps = {
  showArchived: boolean;
};

const MailList: React.FC<MailListProps> = ({ showArchived }) => {
  // Get all emails from the store
  const allEmails = useMailStore((state) => state.emails);

  const emailsToShow = allEmails.filter((email) => {
    if (showArchived) {
      return email.isArchived === true;
    } else {
      return email.isArchived === false;
    }
  });

  return (
    <div className="flex flex-col gap-2">
      {emailsToShow.map((email: any) => (
        <MailItem key={email.id} mail={email} />
      ))}
    </div>
  );
};

export default MailList;