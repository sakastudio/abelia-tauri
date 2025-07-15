import React from 'react';
import { ScrollArea } from '@mantine/core';
import { CommonButton } from '../components/CommonButton';
import type { Email } from './types.ts';

interface MailDetailViewProps {
  email: Email;
  onBack: () => void;
}

export const MailDetailView: React.FC<MailDetailViewProps> = ({ email, onBack }) => {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '10px' }}>
        <CommonButton onClick={onBack}>← 戻る</CommonButton>
      </div>
      <div style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
        <div>差出人：{email.from} &lt;{email.from.replace(/\s/g, '').toLowerCase()}@example.com&gt;</div>
        <div>件名：{email.subject}</div>
        <div>受信日時：{email.date === email.time ? `${email.date}` : `${email.date} ${email.time}`}</div>
      </div>
      <ScrollArea style={{ flex: 1, padding: '10px' }}>
        <pre style={{ whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>{email.body}</pre>
      </ScrollArea>
    </div>
  );
};
