import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import InboxChatList from "../inbox-chat-list";
import Inboxheader from "../../_components/inbox-header";
import InputField from "@simple-quicks/app/components/input/input-field";
import { COLORS } from "@simple-quicks/theme/theme.utility";

interface InboxDetailProps {
  onCloseDetail: () => void;
}
const InboxDetail: React.FC<InboxDetailProps> = ({ onCloseDetail }) => {
  return (
    <Flex w="full" flexDir="column">
      <Flex
        pos="absolute"
        top={0}
        right={0}
        zIndex={2}
        w="full"
        bg="white"
        borderRadius="10px"
      >
        {" "}
        {/* header */}
        <Inboxheader
          senderName="I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]"
          totalParticipant={3}
          onClose={onCloseDetail}
        />
      </Flex>
      {/* chats section */}
      <Flex pos="initial" zIndex={1} py="80px">
        <InboxChatList />
      </Flex>
      <Flex
        pos="absolute"
        bottom={0}
        right={0}
        w="full"
        bg="white"
        gap="10px"
        p="20px"
        zIndex={2}
      >
        <InputField
          id="message"
          name="message"
          type="text"
          placeholder="Type a new message"
        />

        <Button
          type="submit"
          variant="solid"
          color="white"
          bg={COLORS.PRIMARY_BLUE}
        >
          Send
        </Button>
      </Flex>
    </Flex>
  );
};

export default InboxDetail;
