import {
  AccordionButton,
  AccordionIcon,
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
} from "@chakra-ui/react";
import { ICONS } from "@simple-quicks/app/helper/icons.helper";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import dayjs from "dayjs";
import React, { Dispatch, SetStateAction } from "react";

interface TaskTitleInfoProps {
  isChecked: boolean;
  titleTask: string;
  handleSave: (field: string) => void;
  handleEdit: (field: string) => void;
  edit: {
    titleTask: boolean;
    description: boolean;
  };
  editValue: {
    titleTask: string;
    description: string;
  };
  setEditValue: Dispatch<
    SetStateAction<{ titleTask: string; description: string }>
  >;
  handleDelete: () => void;
  displayDaysDiff: string;
  date: string;
}
const TaskTitleInfo: React.FC<TaskTitleInfoProps> = ({
  isChecked,
  titleTask,
  handleSave,
  handleEdit,
  edit,
  editValue,
  setEditValue,
  handleDelete,
  displayDaysDiff,
  date,
}) => {
  return (
    <Flex alignItems="center" w="full" gap="22.5px">
      <Checkbox
        colorScheme="gray"
        isChecked={isChecked}
        onChange={() => handleSave("checked")}
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
          color={isChecked ? COLORS.NEUTRAL : COLORS.SECONDARY}
          fontSize="16px"
          textDecoration={isChecked ? "line-through" : "none"}
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
  );
};

export default TaskTitleInfo;
