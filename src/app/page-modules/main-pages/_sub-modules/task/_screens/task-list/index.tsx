import React from "react";
import { Flex } from "@chakra-ui/react";
import TaskAccordionItem from "../../_components/task-accordion-item";
import TaskHeader from "../../_components/task-header";
import useTask from "@simple-quicks/app/hooks/api/useTask";
import SectionLoader from "@simple-quicks/app/page-modules/main-pages/_components/section-loader";
import { FormProvider, useForm } from "react-hook-form";
import { EBadge } from "@simple-quicks/app/interface/task.interface";

const TaskList: React.FC = () => {
  const { getTaskList, taskList, taskPending, refetch } = useTask();

  React.useEffect(() => {
    getTaskList({ order: "desc" });
  }, [getTaskList, refetch]);

  return (
    <Flex flexDir="column" w="full" mt="70px" h="full">
      <Flex
        pos="absolute"
        top={0}
        right={0}
        w="full"
        p="20px"
        pl="78px"
        borderRadius="10px"
        zIndex={2}
        bg="white"
      >
        {/* header */}
        <TaskHeader />
      </Flex>

      {/* loading state */}
      <Flex
        w="full"
        h="full"
        justifyContent="center"
        alignItems="center"
        display={taskPending ? "flex" : "none"}
      >
        <SectionLoader />
      </Flex>

      <Flex
        flexDir="column"
        w="full"
        h="full"
        display={taskPending ? "none" : "flex"}
      >
        {taskList?.map((task) => (
          <TaskAccordionItem
            key={task.id}
            titleTask={task.title as string}
            date={task.expireDate as string}
            description={task.description as string}
            tags={task.tags as EBadge[]}
            taskId={task.id as string}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default TaskList;
