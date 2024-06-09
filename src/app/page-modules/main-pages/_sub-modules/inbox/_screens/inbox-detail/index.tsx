import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import InboxChatList from "../inbox-chat-list";
import Inboxheader from "../../_components/inbox-header";
import InputField from "@simple-quicks/app/components/input/input-field";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import useInbox from "@simple-quicks/app/hooks/api/useInbox";
import { IMessages } from "@simple-quicks/app/interface/inbox.interface";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";

interface InboxDetailProps {
  selectedMessageId: string;
  onCloseDetail: () => void;
  send: SubmitHandler<FieldValues>;
  pending: boolean;
}
const InboxDetail: React.FC<InboxDetailProps> = ({
  selectedMessageId,
  onCloseDetail,
  send,
}) => {
  const { getMessage, messageList, messagePending, refetchMessage } =
    useInbox();

  const { watch, handleSubmit } = useFormContext<IMessages>();

  React.useEffect(() => {
    getMessage({ order: "desc", inboxId: selectedMessageId });
  }, [getMessage, refetchMessage]);

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
        <InboxChatList
          messageList={messageList as IMessages[]}
          selectedMessageId={selectedMessageId}
        />
      </Flex>

      <form onSubmit={handleSubmit(send)}>
        <Flex
          pos="absolute"
          bottom={0}
          right={0}
          w="full"
          bg="white"
          gap="10px"
          p="20px"
          zIndex={2}
          borderRadius="0 0px  10px 10px"
        >
          <InputField
            id="bodyChat"
            name="bodyChat"
            type="text"
            placeholder="Type a new message"
          />

          <Button
            type="submit"
            variant="solid"
            color="white"
            bg={COLORS.PRIMARY_BLUE}
            isDisabled={watch("bodyChat") === ""}
            isLoading={messagePending && refetchMessage}
          >
            Send
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default InboxDetail;
