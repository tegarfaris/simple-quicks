import React, { Dispatch, SetStateAction } from "react";
import { Button, Flex, Select } from "@chakra-ui/react";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import useTask from "@simple-quicks/app/hooks/api/useTask";
import { IParamsTask } from "@simple-quicks/app/interface/task.interface";

interface TaskHeaderProps {
  params: IParamsTask;
  setParams: Dispatch<SetStateAction<IParamsTask | undefined>>;
}
const TaskHeader: React.FC<TaskHeaderProps> = ({ params, setParams }) => {
  const { addTask } = useTask();

  const handleNewTask = () => {
    addTask({
      title: "Type Task Title",
      expireDate: "",
      description: "No Description",
      tags: [],
      isChecked: false,
    });
  };
  return (
    <Flex w="full" justifyContent="space-between" fontFamily="lato">
      <Select
        placeholder="My Tasks"
        w="118px"
        onChange={(e) =>
          setParams({
            ...params,

            filter:
              e.currentTarget.value === ""
                ? undefined
                : (e.currentTarget.value as
                    | "personal-errands"
                    | "urgent-todo"
                    | undefined),
          })
        }
        borderColor={COLORS.NEUTRAL}
      >
        <option
          value="personal-errands"
          style={{ width: "288px", height: "40px" }}
        >
          Personal Errands
        </option>
        <option value="urgent-todo" style={{ width: "288px", height: "40px" }}>
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
