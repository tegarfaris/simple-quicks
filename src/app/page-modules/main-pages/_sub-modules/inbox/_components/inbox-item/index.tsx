import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import AvatarGroup from "@simple-quicks/app/page-modules/main-pages/_components/avatar-group";
import { COLORS, INDICATORS } from "@simple-quicks/theme/theme.utility";

interface InboxItemProps {
  messageName: string;
  date: string;
  senderName: string;
  bodyMessage: string;
  read: boolean;
  onClick: () => void;
}
const InboxItem: React.FC<InboxItemProps> = ({
  messageName,
  date,
  senderName,
  bodyMessage,
  read,
  onClick,
}) => {
  return (
    <Flex
      w="full"
      py="22px"
      justifyContent="space-between"
      alignItems="end"
      cursor="pointer"
      onClick={onClick}
    >
      <Flex gap="17px" alignItems="center">
        {/* avatar section */}
        <AvatarGroup />

        {/* message name */}
        <Box>
          <Flex gap="16px">
            <Text
              color={COLORS.PRIMARY_BLUE}
              fontWeight={700}
              fontSize="16px"
              fontFamily="lato"
              maxW="446px"
            >
              {messageName}
            </Text>
            <Text fontFamily="lato" fontSize="14px">
              {date}
            </Text>
          </Flex>
          <Text fontFamily="lato" fontWeight={700} fontSize="14px">
            {senderName}
          </Text>
          <Text fontFamily="lato" fontSize="14px" noOfLines={1}>
            {bodyMessage}
          </Text>
        </Box>
      </Flex>
      <Box
        display={read ? "none" : "block"}
        w="10px"
        h="10px"
        bg={INDICATORS.RED}
        rounded="full"
      />
    </Flex>
  );
};

export default InboxItem;
