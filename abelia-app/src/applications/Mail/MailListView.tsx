import React from 'react';
import {ScrollArea, Table} from '@mantine/core';
import type { Email } from './types.ts';
import {MailTableRow} from "./MailTableRow.tsx";

interface MailListViewProps {
  emails: Email[];
  onSelectEmail: (email: Email) => void;
}

export const MailListView: React.FC<MailListViewProps> = ({ emails, onSelectEmail }) => {
  return (
    <ScrollArea style={{ height: '100%' }}>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>閲読</Table.Th>
            <Table.Th>差出人</Table.Th>
            <Table.Th>件名</Table.Th>
            <Table.Th>受信日</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {emails.map((email) => (
              <MailTableRow
                  key={email.id}
                  email={email}
                  onClick={onSelectEmail}
              />
          ))}
        </Table.Tbody>
      </Table>
    </ScrollArea>
  );
};
