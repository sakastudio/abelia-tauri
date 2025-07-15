import React from 'react';
import {Table} from "@mantine/core";
import type {Email} from "../../contexts/MasterDataContext.ts";

interface MailTableRowProps {
  email: Email;
  onClick: (email: Email) => void;
}

export const MailTableRow: React.FC<MailTableRowProps> = ({ email, onClick }) => {
  return (
    <Table.Tr onClick={() => onClick(email)} style={{ cursor: 'pointer' }}>
        <Table.Td>{email.isRead ? '' : '未読'}</Table.Td>
        <Table.Td>{email.from}</Table.Td>
        <Table.Td>{email.subject}</Table.Td>
        <Table.Td>{email.date}</Table.Td>
    </Table.Tr>
  );
};
