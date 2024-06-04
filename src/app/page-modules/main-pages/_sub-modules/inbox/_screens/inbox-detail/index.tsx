import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { BORDER, COLORS } from "@simple-quicks/theme/theme.utility";
import React from "react";
import Inboxheader from "../../_components/inbox-header";
import InboxChatList from "../inbox-chat-list";

const InboxDetail: React.FC<{ id: number; onClose: () => void }> = ({
  id,
  onClose,
}) => {
  return (
    <Flex w="full" flexDir="column">
      <InboxChatList />
    </Flex>
  );
};

export default InboxDetail;
