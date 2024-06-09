import React from "react";
import { Button, Flex, Select } from "@chakra-ui/react";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import useTask from "@simple-quicks/app/hooks/api/useTask";

const TaskHeader: React.FC = () => {
  const { addTask } = useTask();

  const handleNewTask = () => {
    addTask({
      title: "Type Task Title",
      expireDate: "",
      description: "No Description",
      tags: [],
    });
  };
  return (
    <Flex w="full" justifyContent="space-between" fontFamily="lato">
      <Select placeholder="My Tasks" w="118px" borderColor={COLORS.NEUTRAL}>
        <option
          value="personal-errands"
          style={{ width: "288px", height: "40px" }}
        >
          Personal Errands
        </option>
        <option value="urgent-to-do" style={{ width: "288px", height: "40px" }}>
          Urgent To-Do
        </option>
      </Select>

      <Button
        variant="solid"
        color="white"
        bg={COLORS.PRIMARY_BLUE}
        onClick={handleNewTask}
      >
        New Task
      </Button>
    </Flex>
  );
};

export default TaskHeader;
