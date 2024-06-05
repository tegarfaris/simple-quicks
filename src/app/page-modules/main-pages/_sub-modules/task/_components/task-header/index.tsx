import React from "react";
import { Button, Flex, Select } from "@chakra-ui/react";
import { COLORS } from "@simple-quicks/theme/theme.utility";

const TaskHeader:React.FC = () => {
  return (
    <Flex w="full" justifyContent="space-between" fontFamily="lato">
      <Select placeholder="My Tasks" w="118px" ml="85px" borderColor={COLORS.NEUTRAL}>
        <option value="personal-errands">
          <Flex h="40px">Personal Errands</Flex>
        </option>
        <option value="urgent-to-do" style={{ width: "288px", height: "40px" }}>
          Urgent To-Do
        </option>
      </Select>

      <Button variant="solid" color="white" bg={COLORS.PRIMARY_BLUE}>
        New Task
      </Button>
    </Flex>
  );
};

export default TaskHeader;
