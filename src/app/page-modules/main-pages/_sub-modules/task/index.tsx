import React from "react";
import { Text } from "@chakra-ui/react";

import { FormProvider, useForm } from "react-hook-form";
import TaskPopQuicks from "./_components/task-pop-quicks";
import TaskList from "./_screens/task-list";

const TaskSection: React.FC = () => {
  const methods = useForm({});

  return (
    <FormProvider {...methods}>
      <TaskPopQuicks onCloseDetail={() => false}>
          <TaskList />
      </TaskPopQuicks>
    </FormProvider>
  );
};

export default TaskSection;
