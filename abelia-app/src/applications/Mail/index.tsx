import React, {useContext, useState} from 'react';
import type { ApplicationProps } from '../../types/Application';
import { MailHeader } from './MailHeader.tsx';
import { MailListView } from './MailListView.tsx';
import { MailDetailView } from './MailDetailView.tsx';
import {Flex} from "@mantine/core";
import {type Email, MasterDataContext} from "../../contexts/MasterDataContext.ts";

export const Mail: React.FC<ApplicationProps> = () => {
  const master = useContext(MasterDataContext);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  const handleSelectEmail = (email: Email) => {
    setSelectedEmail(email);
  };

  const handleBack = () => {
    setSelectedEmail(null);
  };

  const emails = master?.emails || [];
  const totalCount = emails.length;
  const unreadCount = emails.filter(email => !email.isRead).length;

  return (
    <Flex direction="column" style={{ height: '100%', width: '100%', backgroundColor: '#dfdfe0' }}>
      <MailHeader totalCount={totalCount} unreadCount={unreadCount} />
        {selectedEmail === null ? (
          <MailListView
            emails={emails}
            onSelectEmail={handleSelectEmail}
          />
        ) : (
            <MailDetailView
              email={selectedEmail}
              onBack={handleBack}
            />
          )
        }
    </Flex>
  );
};
