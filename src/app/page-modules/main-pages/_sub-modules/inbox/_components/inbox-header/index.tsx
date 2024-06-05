import React from "react";
import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import { BORDER, COLORS } from "@simple-quicks/theme/theme.utility";

const Inboxheader: React.FC<{
  senderName: string;
  totalParticipant: number;
  onClose: () => void;
}> = ({ senderName, totalParticipant, onClose }) => {
  return (
    <Flex flexDir="column">
      <Flex gap="13px" pb="18.44px">
        <Image
          src="/assets/icons/arrow_back.svg"
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
      <Divider w="734px" mx="-32px" color={BORDER.DEFAULT} />
    </Flex>
  );
};

export default Inboxheader;
