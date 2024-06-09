import React from "react";
import { AbsoluteCenter, Box, Divider, Flex } from "@chakra-ui/react";
import InboxBubbleChat from "../../_components/inbox-bubble-chat";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import { IMessages } from "@simple-quicks/app/interface/inbox.interface";
import dayjs from "dayjs";
import useInbox from "@simple-quicks/app/hooks/api/useInbox";

interface InboxChatListProps {
  messageList: IMessages[];
  selectedMessageId: string;
}
const InboxChatList: React.FC<InboxChatListProps> = ({
  messageList,
  selectedMessageId,
}) => {
  const { editMessage } = useInbox();
  const newMessage = messageList?.[messageList.length - 1];
  let hasRenderedTodayDivider = false;
  let hasNewDivider = false;

  React.useEffect(() => {
    if (selectedMessageId && newMessage?.id) {
      editMessage({
        data: {
          id: newMessage?.id,
          senderName: newMessage?.senderName,
          bodyChat: newMessage?.bodyChat,
          createdAt: newMessage?.createdAt,
          isSender: newMessage?.isSender,
          isRead: true,
        },
        inboxId: selectedMessageId,
      });
    }
  }, []);

  return (
    <Flex w="full" flexDir="column" gap="33.34px">
      {messageList?.map((chat) => {
        const isTodayChat = chat.createdAt === dayjs().format("YYYY-MM-DD");

        if (
          (isTodayChat && !hasRenderedTodayDivider) ||
          (!chat.isRead && !hasNewDivider)
        ) {
          hasRenderedTodayDivider = isTodayChat;
          hasNewDivider = !chat.isRead;

          return (
            <React.Fragment key={chat.id}>
              {hasNewDivider && (
                <Box position="relative">
                  <Divider border="1px solid" borderColor={COLORS.RED} />
                  <AbsoluteCenter
                    bg="white"
                    px="4"
                    fontFamily="lato"
                    fontWeight={700}
                    fontSize="16px"
                    color={COLORS.RED}
                  >
                    New Message
                  </AbsoluteCenter>
                </Box>
              )}

              {isTodayChat && !hasNewDivider && (
                <Box position="relative">
                  <Divider border="1px solid" />
                  <AbsoluteCenter
                    bg="white"
                    px="4"
                    fontFamily="lato"
                    fontWeight={700}
                    fontSize="16px"
                  >
                    Today {dayjs(chat.createdAt).format("MM DD, YYYY")}
                  </AbsoluteCenter>
                </Box>
              )}

              <InboxBubbleChat
                key={chat.id}
                senderName={chat.senderName}
                isSender={chat.isSender}
                bodyMessage={chat.bodyChat}
                time={chat.createdAt}
                chatId={chat.id}
                inboxId={selectedMessageId}
                isEdited={chat.isEdited as boolean}
              />
            </React.Fragment>
          );
        }

        return (
          <InboxBubbleChat
            key={chat.id}
            senderName={chat.senderName}
            isSender={chat.isSender}
            bodyMessage={chat.bodyChat}
            time={chat.createdAt}
            chatId={chat.id}
            inboxId={selectedMessageId}
            isEdited={chat.isEdited as boolean}
          />
        );
      })}
    </Flex>
  );
};

export default InboxChatList;
