import React from "react";
import { Flex } from "@chakra-ui/react";

const PopupQuicks: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex
      flexDir="column"
      w="734px"
      h="737px"
      bg="white"
      borderRadius="10px"
      py="24px"
      px="32px"
    >
      {children}
    </Flex>
  );
};

export default PopupQuicks;
