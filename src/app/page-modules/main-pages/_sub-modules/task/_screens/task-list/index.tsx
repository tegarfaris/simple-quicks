import React from 'react'
import { Flex } from '@chakra-ui/react'
import TaskAccordionItem from '../../_components/task-accordion-item'

const TaskList: React.FC = () => {
  return (
    <Flex w="full" mt="70px">
        <TaskAccordionItem />
    </Flex>
  )
}

export default TaskList