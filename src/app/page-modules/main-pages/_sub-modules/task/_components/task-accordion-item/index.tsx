import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Flex,
  Image,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import InputField from "@simple-quicks/app/components/input/input-field";
import { ICONS } from "@simple-quicks/app/helper/icons.helper";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import React from "react";
import { BadgeList } from "../badge-list/badge-list";
import { EBadge } from "@simple-quicks/app/interface/task.interface";
import dayjs from "dayjs";
import { renderTags } from "@simple-quicks/app/helper/render-tags.helper";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import useTask from "@simple-quicks/app/hooks/api/useTask";

interface TaskAccordionItemProps {
  taskId: string;
  titleTask: string;
  date: string;
  description: string;
  tags: EBadge[];
}
const TaskAccordionItem: React.FC<TaskAccordionItemProps> = ({
  taskId,
  titleTask,
  date,
  description,
  tags,
}) => {
  const [checked, setChecked] = React.useState(false);
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
    }
  };

  React.useEffect(() => {
    if (!isOpen && selectedTags.length > 0) {
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
            <Flex alignItems="center" w="full" gap="22.5px">
              <Checkbox
                colorScheme="gray"
                onChange={() => setChecked(!checked)}
              />
              <Flex
                alignItems="center"
                justifyContent="space-between"
                px={0}
                mx={0}
                w="full"
              >
                <Box
                  w="333px"
                  textAlign="left"
                  fontFamily="lato"
                  color={checked ? COLORS.NEUTRAL : COLORS.SECONDARY}
                  fontSize="16px"
                  textDecoration={checked ? "line-through" : "none"}
                  fontWeight={600}
                  cursor="pointer"
                  onClick={() => handleEdit("title")}
                >
                  {edit.titleTask ? (
                    <Input
                      id="titleTask"
                      name="titleTask"
                      type="text"
                      required
                      value={editValue.titleTask}
                      maxLength={50}
                      onChange={(e) =>
                        setEditValue({
                          ...editValue,
                          titleTask: e.target.value,
                        })
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          handleSave("title");
                        }
                      }}
                    />
                  ) : (
                    <Text noOfLines={1} w="333px">
                      {editValue.titleTask ? editValue.titleTask : titleTask}
                    </Text>
                  )}
                </Box>
                <AccordionButton
                  as={Flex}
                  gap="10px"
                  justifyContent="start"
                  w="full"
                  px={0}
                  mx={0}
                  _hover={{ bg: "transparent", cursor: "pointer" }}
                >
                  <Text
                    w="50px"
                    fontFamily="lato"
                    fontSize="14px"
                    color={COLORS.RED}
                    textAlign="left"
                  >
                    {displayDaysDiff}
                  </Text>

                  <Text fontFamily="lato" fontSize="14px" textAlign="left">
                    {date !== "" && dayjs(date).format("DD/MM/YYYY")}
                  </Text>

                  <AccordionIcon mr="10px" />
                </AccordionButton>
              </Flex>
              <Flex w="full" ml="-20px">
                <Menu placement="bottom-end">
                  <MenuButton>
                    <Image src={ICONS.TRIPLE_DOTS} w="20px" alt="delete" />
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      color={COLORS.RED}
                      _hover={{ bg: "transparent" }}
                      onClick={() => handleDelete()}
                    >
                      Delete
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </Flex>

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
              <Flex
                gap="23.57px"
                alignItems="center"
                bg="#F9F9F9"
                py="14px"
                pl="12px"
                ml="-12px"
                rounded="10px"
              >
                <BadgeList
                  onAddTag={handleAddTag}
                  onOpen={onOpen}
                  onClose={onClose}
                />
                {selectedTags.map((tag, idx) => (
                  <Box
                    key={idx}
                    pos="relative"
                    h="28px"
                    py="2px"
                    px="12px"
                    rounded="5px"
                    bg={renderTags(tag).bgColor}
                    fontFamily="lato"
                    fontWeight={600}
                    fontSize="14px"
                  >
                    <Box
                      as={Flex}
                      display={isOpen ? "flex" : "none"}
                      pos="absolute"
                      top="-5px"
                      right="-5px"
                      justifyContent="center"
                      alignItems="center"
                      bg="white"
                      w="15px"
                      h="15px"
                      rounded="full"
                      fontWeight={600}
                      fontSize="10px"
                      cursor="pointer"
                      onClick={() => deleteTag(tag)}
                    >
                      x
                    </Box>
                    {renderTags(tag).text}
                  </Box>
                ))}
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Flex>
    </FormProvider>
  );
};

export default TaskAccordionItem;
