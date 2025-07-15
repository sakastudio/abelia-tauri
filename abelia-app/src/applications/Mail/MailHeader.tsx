import React from 'react';

interface MailHeaderProps {
  totalCount: number;
  unreadCount: number;
}

export const MailHeader: React.FC<MailHeaderProps> = ({ totalCount, unreadCount }) => {
  return (
    <div style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <span>📧</span>
      <span style={{ marginLeft: '10px' }}>[受信トレイ]</span>
      <span style={{ marginLeft: '10px' }}>{totalCount}件（未読{unreadCount}件）</span>
    </div>
  );
};