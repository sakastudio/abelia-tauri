import React from 'react';
import { Group, Text } from '@mantine/core';

interface MailHeaderProps {
  totalCount: number;
  unreadCount: number;
}

export const MailHeader: React.FC<MailHeaderProps> = ({ totalCount, unreadCount }) => {
  return (
    <Group p="sm">
      <Text>📧</Text>
      <Text>[受信トレイ]</Text>
      <Text c="dimmed">{totalCount}件（未読{unreadCount}件）</Text>
    </Group>
  );
};
