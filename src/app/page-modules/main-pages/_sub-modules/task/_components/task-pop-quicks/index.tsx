import React from "react";
import { Button, Flex, Select } from "@chakra-ui/react";
import InputField from "@simple-quicks/app/components/input/input-field";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import TaskHeader from "../task-header";

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
