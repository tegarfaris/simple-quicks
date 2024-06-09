import React from "react";
import { AbsoluteCenter, Box, Divider, Flex, Spinner } from "@chakra-ui/react";
import InboxBubbleChat from "../../_components/inbox-bubble-chat";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import { IMessages } from "@simple-quicks/app/interface/inbox.interface";
import dayjs from "dayjs";
import SectionLoader from "@simple-quicks/app/page-modules/main-pages/_components/section-loader";

interface InboxChatListProps {
  messageList: IMessages[];
  selectedMessageId: string;
}
const InboxChatList: React.FC<InboxChatListProps> = ({
  messageList,
  selectedMessageId,
}) => {
  let hasRenderedTodayDivider = false;
  let hasNewDivider = false;

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
