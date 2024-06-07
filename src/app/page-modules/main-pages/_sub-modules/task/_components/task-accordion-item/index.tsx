import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Textarea,
} from "@chakra-ui/react";
import InputField from "@simple-quicks/app/components/input/input-field";
import { ICONS } from "@simple-quicks/app/helper/icons.helper";
import { COLORS, STICKERS_COLORS } from "@simple-quicks/theme/theme.utility";
import React from "react";
import { BadgeList } from "../badge-list/badge-list";


interface TaskAccordionItemProps {
  titleTask: string;
  date: string;
  description: string;
}
const TaskAccordionItem: React.FC<TaskAccordionItemProps> = ({titleTask, date, description}) => {
  const [checked, setChecked] = React.useState(false);
  const [editDesc, setEditDesc] = React.useState(false);
  const [editValue, setEditValue] = React.useState(description);
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  React.useEffect(() => {
    if (editDesc && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [editDesc]);

  const handleEdit = () => {
    setEditDesc(true);
  };

  const handleSave = () => {
    setEditDesc(false);
  };



  return (
    <Flex flexDir="column" w="full">
      <Accordion defaultIndex={[0]} allowMultiple w="full">
        <AccordionItem>
          <Flex w="full">
            <AccordionButton
              as={Flex}
              gap="22.5px"
              px={0}
              w="full"
              _hover={{ bg: "transparent", cursor: "pointer" }}
            >
              <Checkbox
                colorScheme="gray"
                onChange={() => setChecked(!checked)}
              />
              <Box
                as="span"
                flex="1"
                textAlign="left"
                fontFamily="lato"
                color={checked ? COLORS.NEUTRAL : COLORS.SECONDARY}
                fontSize="16px"
                textDecoration={checked ? "line-through" : "none"}
                fontWeight={600}
              >
                {titleTask}
              </Box>
              <Text fontFamily="lato" fontSize="14px" color={COLORS.RED}>
                2 Days Left
              </Text>
              <Text fontFamily="lato" fontSize="14px">
                {date}
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <Flex px="20px" mr="10px">
              <Menu placement="bottom-end">
                <MenuButton>
                  <Image src={ICONS.TRIPLE_DOTS} w="16px" alt="actions" />
                </MenuButton>
                <MenuList>
                  <MenuItem color={COLORS.RED} _hover={{ bg: "transparent" }}>
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
                onClick={() => handleEdit()}
              />

              {editDesc ? (
                <Textarea
                  ref={textareaRef}
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSave();
                    }
                  }}
                />
              ) : (
                <Text
                  fontFamily="lato"
                  fontSize="14px"
                  color={COLORS.SECONDARY}
                >
                  {editValue ? editValue : editDesc}
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
              <BadgeList />

              <Text
                 h="28px"
                py="2px"
                px="12px"
                rounded="5px"
                bg={STICKERS_COLORS.GREEN}
                fontFamily="lato"
                fontWeight={600}
              >
                Client Related
              </Text>
            </Flex>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default TaskAccordionItem;
