import {
  Box,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { renderChatColor } from "@simple-quicks/app/helper/render-chat-color.helper";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import React from "react";

interface InboxBubbleChatProps {
  senderRole: string;
  senderName: string;
  bodyMessage: string;
  time: string;
}
const InboxBubbleChat: React.FC<InboxBubbleChatProps> = ({
  senderName,
  senderRole,
  bodyMessage,
  time,
}) => {
  return (
    <Flex
      w="full"
      alignItems={renderChatColor(senderRole).alignItems}
      flexDir="column"
      gap="5px"
    >
      <Text
        fontFamily="lato"
        fontSize="14px"
        fontWeight={700}
        color={renderChatColor(senderRole).textColor}
      >
        {senderName}
      </Text>
      <Flex
        flexDir={renderChatColor(senderRole).direction as "row" | "row-reverse"}
        alignItems="start"
        gap="5px"
      >
        <Box
          as={Flex}
          flexDir="column"
          p="10px"
          rounded="5px"
          gap="10px"
          fontFamily="lato"
          fontSize="14px"
          bg={renderChatColor(senderRole).bgColor}
          maxW="518px"
        >
          <Text>{bodyMessage}</Text>
          <Text>{time}</Text>
        </Box>
        <Menu>
          <MenuButton>
            <Image src="/assets/icons/triple_dots.svg" w="16px" />
          </MenuButton>
          <MenuList>
            <MenuItem color={COLORS.PRIMARY_BLUE}>Edit</MenuItem>
            <MenuItem color={COLORS.RED}>Delete</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};

export default InboxBubbleChat;
