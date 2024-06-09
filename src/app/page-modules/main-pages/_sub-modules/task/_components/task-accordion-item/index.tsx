import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  Flex,
  Image,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import InputField from "@simple-quicks/app/components/input/input-field";
import { ICONS } from "@simple-quicks/app/helper/icons.helper";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import React from "react";
import { EBadge } from "@simple-quicks/app/interface/task.interface";
import dayjs from "dayjs";
import { FormProvider, useForm } from "react-hook-form";
import useTask from "@simple-quicks/app/hooks/api/useTask";
import TaskTitleInfo from "../task-title-info";
import TaskTags from "../task-tags";

interface TaskAccordionItemProps {
  taskId: string;
  titleTask: string;
  date: string;
  description: string;
  tags: EBadge[];
  isChecked: boolean;
}
const TaskAccordionItem: React.FC<TaskAccordionItemProps> = ({
  taskId,
  titleTask,
  date,
  description,
  tags,
  isChecked,
}) => {
  const [edit, setEdit] = React.useState({
    titleTask: false,
    description: false,
  });
  const [editValue, setEditValue] = React.useState({
    titleTask: titleTask,
    description: description,
  });
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);
  const [selectedTags, setSelectedTags] = React.useState<EBadge[]>(tags);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const { deleteTask, editTask } = useTask();

  const methods = useForm({
    values: {
      date: dayjs(date).format("YYYY-MM-DD"),
    },
  });

  const { watch, getValues } = methods;

  React.useEffect(() => {
    if (edit.description && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [edit.description]);

  const handleAddTag = (tag: EBadge) => {
    if (selectedTags.some((t) => t === tag)) {
      toast({
        title: "Duplicate tag",
        description: "This tag has already been added.",
        status: "warning",
        duration: 3000,
        isClosable: true,
        position: "top",
      });
    } else {
      setSelectedTags((prevTags) => [...prevTags, tag]);
    }
  };

  const deleteTag = (tagToDelete: EBadge) => {
    setSelectedTags((prevTags) =>
      prevTags.filter((tag) => tag !== tagToDelete)
    );
  };

  const handleEdit = (field: string) => {
    switch (field) {
      case "title":
        setEdit({ ...edit, titleTask: true });
        break;
      case "description":
        setEdit({ ...edit, description: true });
        break;
    }
  };

  const handleSave = (field: string) => {
    switch (field) {
      case "title":
        editTask({
          id: taskId,
          title: editValue.titleTask,
        });
        setEdit({ ...edit, titleTask: false });
        break;

      case "description":
        editTask({
          id: taskId,
          description: editValue.description,
        });
        setEdit({ ...edit, description: false });
        break;
      case "checked":
        editTask({
          id: taskId,
          isChecked: !isChecked,
        });
    }
  };

  // for update data
  React.useEffect(() => {
    const updatedTags = selectedTags.map((tag) => tag);
    const initialTags = tags.map((tag) => tag);

    if (!isOpen && updatedTags !== initialTags) {
      editTask({
        id: taskId,
        tags: selectedTags as EBadge[],
      });
    }
    if (getValues("date") !== date && taskId) {
      editTask({
        id: taskId,
        expireDate: watch("date"),
      });
    }
  }, [editTask, selectedTags.length, taskId, isOpen, watch("date")]);

  const handleDelete = () => {
    deleteTask(taskId);
  };

  const daysDiff = dayjs(date).diff(dayjs(), "days");
  const displayDaysDiff =
    isNaN(daysDiff) || daysDiff <= 0 ? "" : `${daysDiff} Days`;

  return (
    <FormProvider {...methods}>
      <Flex flexDir="column" w="full">
        <Accordion defaultIndex={[0]} allowMultiple w="full">
          <AccordionItem>
            {/* top accordion section */}
            <TaskTitleInfo
              isChecked={isChecked}
              titleTask={titleTask}
              handleSave={handleSave}
              handleEdit={handleEdit}
              edit={edit}
              editValue={editValue}
              setEditValue={setEditValue}
              handleDelete={handleDelete}
              displayDaysDiff={displayDaysDiff}
              date={date}
            />
            <AccordionPanel
              as={Flex}
              flexDir="column"
              gap="13px"
              pb={4}
              ml="20px"
            >
              <Flex gap="23.57px" alignItems="center">
                <Image
                  src={ICONS.CLOCK_BLUE}
                  w="20px"
                  h="20px"
                  alt="clock-icons"
                />
                <Flex w="193px" h="40px">
                  <InputField
                    id="date"
                    name="date"
                    type="date"
                    borderColor={COLORS.SLATE}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleSave("date");
                      }
                    }}
                  />
                </Flex>
              </Flex>

              <Flex maxW="518px" gap="23.57px" alignItems="center">
                <Image
                  src={ICONS.PENCIL_BLUE}
                  w="20px"
                  h="20px"
                  alt="pencil-icons"
                  cursor="pointer"
                  onClick={() => handleEdit("description")}
                />

                {edit.description ? (
                  <Textarea
                    ref={textareaRef}
                    value={editValue.description}
                    maxLength={200}
                    onChange={(e) =>
                      setEditValue({
                        ...editValue,
                        description: e.target.value,
                      })
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        handleSave("description");
                      }
                    }}
                  />
                ) : (
                  <Text
                    fontFamily="lato"
                    fontSize="14px"
                    color={COLORS.SECONDARY}
                    noOfLines={2}
                    w="333px"
                  >
                    {editValue.description
                      ? editValue.description
                      : edit.description}
                  </Text>
                )}
              </Flex>

              {/* label tags */}
              <TaskTags
                handleAddTag={handleAddTag}
                onOpen={onOpen}
                onClose={onClose}
                selectedTags={selectedTags}
                isOpen={isOpen}
                deleteTag={deleteTag}
              />
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </FormProvider>
  );
};

export default TaskAccordionItem;
