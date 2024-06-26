import React from "react";
import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { BORDER, COLORS } from "@simple-quicks/theme/theme.utility";
import { ICONS } from "@simple-quicks/app/helper/icons.helper";

const Inboxheader: React.FC<{
  senderName?: string;
  totalParticipant: number;
  onClose: () => void;
}> = ({ senderName, totalParticipant, onClose }) => {
  return (
    <Flex w="full" flexDir="column">
      <Flex p="20px" gap="13px">
        <Image
          src={ICONS.ARROW_BACK}
          cursor="pointer"
          onClick={onClose}
          w="16px"
          alt="arrow_icons"
        />

        <Box>
          <Text
            fontFamily="lato"
            fontSize="16px"
            fontWeight={700}
            color={COLORS.PRIMARY_BLUE}
          >
            {senderName}
          </Text>
          <Text fontFamily="lato" fontSize="14px" fontWeight={400}>
            {totalParticipant}{" "}
            {totalParticipant <= 1 ? "Participant" : "Participants"}
          </Text>
        </Box>
      </Flex>
      <Divider w="full" color={BORDER.DEFAULT} />
    </Flex>
  );
};

export default Inboxheader;
