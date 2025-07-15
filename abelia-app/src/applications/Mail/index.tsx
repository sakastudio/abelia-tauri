import React, { useState } from 'react';
import type { ApplicationProps } from '../../types/Application';
import type { Email } from './types';
import { MailHeader } from './MailHeader.tsx';
import { MailListView } from './MailListView.tsx';
import { MailDetailView } from './MailDetailView.tsx';
import { sampleEmails } from './data/sampleEmails';
import {Flex} from "@mantine/core";

export const Mail: React.FC<ApplicationProps> = () => {
  const [emails] = useState<Email[]>(sampleEmails);
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  const handleSelectEmail = (email: Email) => {
    setSelectedEmail(email);
  };

  const handleBack = () => {
    setSelectedEmail(null);
  };

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
