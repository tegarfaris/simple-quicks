import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import InputField from "@simple-quicks/app/components/input/input-field";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import Inboxheader from "../../_sub-modules/inbox/_components/inbox-header";

const PopupQuicks: React.FC<{
  children: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  onCloseDetail: () => void;
}> = ({ children, header, footer, onCloseDetail }) => {
  return (
    <Flex pos="relative" flexDir="column">
      <Flex
        pos="absolute"
        top={0}
        w="full"
        display={header ? "flex" : "none"}
        borderRadius="10px"
        px="32px"
        pt="24px"
        zIndex={2}
        bg="white"
      >
        {" "}
        {/* header */}
        <Inboxheader
          senderName="I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]"
          totalParticipant={3}
          onClose={onCloseDetail}
        />
      </Flex>
      <Flex
        pos="initial"
        flexDir="column"
        minW="634px"
        h="600px"
        overflowY="scroll"
        overflowX="hidden"
        bg="white"
        borderRadius="10px"
        py="24px"
        px="32px"
        zIndex={1}
      >
        {children}
      </Flex>
      <Flex
        display={footer ? "flex" : "none"}
        pos="absolute"
        bottom={0}
        borderRadius="10px"
        w="full"
        bg="white"
        px="32px"
        pt="10px"
        pb="24px"
        gap="10px"
        zIndex={2}
      >
        <InputField
          id="message"
          name="message"
          placeholder="Type a new message"
          type="text"
        />
        <Button variant="solid" color="white" bg={COLORS.PRIMARY_BLUE}>
          Send
        </Button>
      </Flex>
    </Flex>
  );
};

export default PopupQuicks;
