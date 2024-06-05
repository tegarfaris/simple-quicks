import { Flex } from "@chakra-ui/react";
import React from "react";
import InboxChatList from "../inbox-chat-list";

const InboxDetail: React.FC = ({}) => {
  return (
    <Flex w="full" my="80.38px" flexDir="column">
      <InboxChatList />
    </Flex>
  );
};

export default InboxDetail;
