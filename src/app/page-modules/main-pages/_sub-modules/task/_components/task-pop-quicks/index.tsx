import React from "react";
import { Button, Flex, Select } from "@chakra-ui/react";
import InputField from "@simple-quicks/app/components/input/input-field";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import TaskHeader from "../task-header";

const TaskPopQuicks: React.FC<{
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
        borderRadius="10px"
        px="32px"
        pt="24px"
        zIndex={2}
        bg="white"
      >
        {/* header */}
        <TaskHeader />
      </Flex>
      <Flex
        pos="initial"
        flexDir="column"
        minW="734px"
        h="737px"
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
