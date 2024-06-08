import React from "react";
import { Flex } from "@chakra-ui/react";
import Inboxheader from "../../_sub-modules/inbox/_components/inbox-header";

const PopupQuicks: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Flex w="full" pos="relative" flexDir="column">
      <Flex
        pos="initial"
        flexDir="column"
        w="634px"
        h="600px"
        overflowY="scroll"
        overflowX="hidden"
        bg="white"
        borderRadius="10px"
        py="24px"
        px="32px"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default PopupQuicks;
