import React from "react";

import TaskPopQuicks from "./_components/task-pop-quicks";
import TaskList from "./_screens/task-list";

const TaskSection: React.FC = () => {
  return (
    <TaskPopQuicks>
      <TaskList />
    </TaskPopQuicks>
  );
};

export default TaskSection;
