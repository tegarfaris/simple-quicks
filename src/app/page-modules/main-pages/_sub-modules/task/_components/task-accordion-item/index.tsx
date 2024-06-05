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
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Textarea,
} from "@chakra-ui/react";
import InputField from "@simple-quicks/app/components/input/input-field";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import React from "react";

const TaskAccordionItem: React.FC = () => {
  const [checked, setChecked] = React.useState(false);
  const [editDesc, setEditDesc] = React.useState(false);
  const description =
    "Closing off this case since this application has been cancelled. No one really understand how this case could possibly be cancelled. The options and the documents within this document were totally a guaranteed for a success!";
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
    <Flex flexDir="column">
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
                Close off Case #012920- RODRIGUES, Amiguel
              </Box>
              <Text fontFamily="lato" fontSize="14px" color={COLORS.RED}>
                2 Days Left
              </Text>
              <Text fontFamily="lato" fontSize="14px">
                12/06/2021
              </Text>
              <AccordionIcon />
            </AccordionButton>
            <Flex px="20px" mr="10px">
              <Menu placement="bottom-end">
                <MenuButton>
                  <Image
                    src="/assets/icons/triple_dots.svg"
                    w="16px"
                    alt="actions"
                  />
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
                src="/assets/icons/clock_blue.svg"
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
                src="/assets/icons/pencil_blue.svg"
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
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Flex>
  );
};

export default TaskAccordionItem;
