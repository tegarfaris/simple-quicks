import React from "react";
import { AbsoluteCenter, Box, Divider, Flex } from "@chakra-ui/react";
import InboxBubbleChat from "../../_components/inbox-bubble-chat";
import { COLORS } from "@simple-quicks/theme/theme.utility";

const DATA_BUBBLE = [
  {
    id: 0,
    senderName: "You",
    senderRole: "me",
    bodyMessage:
      "No worries. It will be completed ASAP. I’ve asked him yesterday.",
    time: "19:32",
    date: "4 juni 2024",
    isNew: false,
  },
  {
    id: 1,
    senderName: "Mary Hilda",
    senderRole: "other",
    bodyMessage:
      "Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.",
    time: "19:32",
    date: "5 juni 2024",
    isNew: false,
  },
  {
    id: 2,
    senderName: "Obaidullah Amarkhil",
    senderRole: "other",
    bodyMessage: "Morning. I’ll try to do them. Thanks",
    time: "07:32",
    date: "5 juni 2024",
    isNew: false,
  },
  {
    id: 3,
    senderName: "Obaidullah Amarkhil",
    senderRole: "other",
    bodyMessage: "Morning. I’ll try to do them. Thanks",
    time: "07:32",
    date: "5 juni 2024",
    isNew: false,
  },
  {
    id: 4,
    senderName: "Obaidullah Amarkhil",
    senderRole: "other",
    bodyMessage: "Morning. I’ll try to do them. Thanks",
    time: "07:32",
    date: "5 juni 2024",
    isNew: false,
  },
  {
    id: 5,
    senderName: "Obaidullah Amarkhil",
    senderRole: "other",
    bodyMessage: "Morning. I’ll try to do them. Thanks",
    time: "07:32",
    date: "5 juni 2024",
    isNew: true,
  },
  {
    id: 6,
    senderName: "Obaidullah Amarkhil",
    senderRole: "other",
    bodyMessage: "Morning. I’ll try to do them. Thanks",
    time: "07:32",
    date: "5 juni 2024",
    isNew: true,
  },
];

const InboxChatList: React.FC = () => {
  const todayDate = "5 juni 2024";

  let hasRenderedTodayDivider = false;
  let hasNewDivider = false;

  return (
    <Flex w="full" flexDir="column" gap="33.34px">
      {DATA_BUBBLE.map((chat) => {
        const isTodayChat = chat.date === todayDate;

        if (
          (isTodayChat && !hasRenderedTodayDivider) ||
          (chat.isNew && !hasNewDivider)
        ) {
          hasRenderedTodayDivider = isTodayChat;
          hasNewDivider = chat.isNew;

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
                    Today {todayDate}
                  </AbsoluteCenter>
                </Box>
              )}

              <InboxBubbleChat
                key={chat.id}
                senderName={chat.senderName}
                senderRole={chat.senderRole}
                bodyMessage={chat.bodyMessage}
                time={chat.time}
              />
            </React.Fragment>
          );
        }

        return (
          <InboxBubbleChat
            key={chat.id}
            senderName={chat.senderName}
            senderRole={chat.senderRole}
            bodyMessage={chat.bodyMessage}
            time={chat.time}
          />
        );
      })}
    </Flex>
  );
};

export default InboxChatList;
