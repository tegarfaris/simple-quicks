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
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import InputField from "@simple-quicks/app/components/input/input-field";
import { ICONS } from "@simple-quicks/app/helper/icons.helper";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import React from "react";
import { BadgeList } from "../badge-list/badge-list";
import { renderTags } from "@simple-quicks/app/helper/render-tags.helper";
import { EBadge } from "@simple-quicks/app/interface/task.interface";

const TaskFormAdd: React.FC = () => {
  const [checked, setChecked] = React.useState(false);
  const [selectedTags, setSelectedTags] = React.useState<EBadge[]>([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

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
  return (
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
            {/* title task */}
            <InputField
              id="titleTask"
              name="titleTask"
              type="text"
              required
              placeholder="Type Task Title"
            />

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

        <AccordionPanel as={Flex} flexDir="column" gap="13px" pb={4} ml="20px">
          <Flex gap="23.57px" alignItems="center">
            <Image src={ICONS.CLOCK_BLUE} w="20px" h="20px" alt="clock-icons" />
            <Flex w="193px" h="40px">
              <InputField
                id="date"
                name="date"
                type="date"
                borderColor={COLORS.SLATE}
                required
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
            />

            <Textarea
              id="description"
              name="description"
              placeholder="No description"
            />
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
  );
};

export default TaskFormAdd;
