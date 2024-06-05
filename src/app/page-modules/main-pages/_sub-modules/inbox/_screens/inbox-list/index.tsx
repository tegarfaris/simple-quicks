import { Box, Button, Divider, Flex, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import InboxItem from "../../_components/inbox-item";
import InboxDetail from "../inbox-detail";
import { BORDER, COLORS } from "@simple-quicks/theme/theme.utility";
import InputField from "@simple-quicks/app/components/input/input-field";
import PopupQuicks from "@simple-quicks/app/page-modules/main-pages/_components/pop-up";
import { ICONS } from "@simple-quicks/app/helper/icons.helper";

const DATA_MESSAGE = [
  {
    id: 0,
    messageName: "109220-Naturalization",
    date: "January 1,2021 19:10",
    senderName: "Cameron Phillips :",
    bodyMessage: "Please check this out!",
    read: false,
  },
  {
    id: 1,
    messageName:
      "Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]",
    date: "02/06/2021 10:45",
    senderName: "Ellen :",
    bodyMessage: "Hey, please read.",
    read: true,
  },
  {
    id: 2,
    messageName: "8405-Diana SALAZAR MUNGUIA",
    date: "01/06/2021 12:19",
    senderName: "Cameron Phillips :",
    bodyMessage:
      "I understand your initial concerns and thats very valid, Elizabeth. But you ...",
    read: true,
  },
];

interface InboxListProps {
  selectedMessageId: number | null;
  openInbox: (id: number) => void;
  closeInbox: () => void;
}
const InboxList: React.FC<InboxListProps> = ({
  selectedMessageId,
  openInbox,
  closeInbox,
}) => {
  return (
    <Flex flexDir="column">
      <Box display={selectedMessageId === null ? "initial" : "none"}>
        <InputField
          id="search"
          name="search"
          placeholder="Search"
          required
          type="text"
          rightElement={<Image src={ICONS.SEARCH_BLACK} w="20px" alt="search-icons" />}
          pl="58.82px"
        />
      </Box>
      <Flex
        display={selectedMessageId === null ? "flex" : "none"}
        flexDir="column"
      >
        {DATA_MESSAGE.map((message) => (
          <>
            <InboxItem
              key={message.id}
              messageName={message.messageName}
              date={message.date}
              senderName={message.senderName}
              bodyMessage={message.bodyMessage}
              read={message.read}
              onClick={() => openInbox(message.id)}
            />
            <Divider borderColor={BORDER.DEFAULT} />
          </>
        ))}
      </Flex>
      {selectedMessageId !== null && (
        <InboxDetail id={selectedMessageId} onClose={closeInbox} />
      )}
    </Flex>
  );
};

export default InboxList;
