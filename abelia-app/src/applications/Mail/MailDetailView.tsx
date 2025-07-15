import React from 'react';
import { ScrollArea, Box, Stack, Text } from '@mantine/core';
import type {Email} from "../../contexts/MasterDataContext.ts";
import {CommonButton} from "../components/CommonButton";

interface MailDetailViewProps {
  email: Email;
  onBack: () => void;
}

export const MailDetailView: React.FC<MailDetailViewProps> = ({ email, onBack }) => {
  return (
    <Box pl={10} pt={10}>
      <Box>
        <CommonButton onClick={onBack}>
          ← 戻る
        </CommonButton>
      </Box>
      <Stack pt={10}>
        <Text>差出人：{email.from} &lt;{email.fromAddress}&gt;</Text>
        <Text>件名：{email.subject}</Text>
        <Text>受信日時：{`${email.date} ${email.time}`}</Text>
      </Stack>
      <ScrollArea pt={30}>
          <Text>{email.body}</Text>
      </ScrollArea>
    </Box>
  );
};
