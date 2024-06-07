import React from "react";
import { Flex } from "@chakra-ui/react";
import TaskAccordionItem from "../../_components/task-accordion-item";

const DATA_TASK = [
  {
    id: 1,
    titleTask: "Title Task 1 nih boss !!",
    date: "11/02/2023",
    description: "ini merupakan deskripsi yang dibuat untuk membuat data dummy",
  },
  {
    id: 2,
    titleTask: "Title Task 2 nih boss !!",
    date: "11/02/2023",
    description: "ini merupakan deskripsi yang dibuat untuk membuat data dummy",
  },
  {
    id: 3,
    titleTask: "Title Task 3 nih boss !!",
    date: "11/02/2023",
    description: "ini merupakan deskripsi yang dibuat untuk membuat data dummy",
  },
  {
    id: 4,
    titleTask: "Title Task 4 nih boss !!",
    date: "11/02/2023",
    description: "ini merupakan deskripsi yang dibuat untuk membuat data dummy",
  },
];
const TaskList: React.FC = () => {
  return (
    <Flex flexDir="column" w="full" mt="70px">
      {DATA_TASK.map((task) => (
        <TaskAccordionItem
          key={task.id}
          titleTask={task.titleTask}
          date={task.date}
          description={task.description}
        />
      ))}
    </Flex>
  );
};

export default TaskList;
