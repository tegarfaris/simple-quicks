import React from "react";
import { Flex } from "@chakra-ui/react";

const TaskPopQuicks: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <Flex pos="relative" flexDir="column">
      <Flex
        pos="initial"
        flexDir="column"
        minW="634px"
        h="600px"
        overflowX="hidden"
        bg="white"
        borderRadius="10px"
        py="24px"
        px="32px"
        zIndex={1}
      >
        {children}
      </Flex>
    </Flex>
  );
};

export default TaskPopQuicks;
