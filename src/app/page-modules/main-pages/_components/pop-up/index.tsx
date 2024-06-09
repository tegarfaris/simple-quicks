import React from "react";
import { Flex } from "@chakra-ui/react";

const PopupQuicks: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Flex pos="relative" flexDir="column">
      <Flex
        pos="initial"
        borderRadius="10px"
        w="634px"
        h="600px"
        flexDir="column"
        overflowY="scroll"
        overflowX="hidden"
        bg="white"
        py="24px"
        px="32px"
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default PopupQuicks;
