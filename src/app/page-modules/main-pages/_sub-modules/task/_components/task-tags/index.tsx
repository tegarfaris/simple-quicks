import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { BadgeList } from "../badge-list/badge-list";
import { renderTags } from "@simple-quicks/app/helper/render-tags.helper";
import { EBadge } from "@simple-quicks/app/interface/task.interface";

interface TaskTagsProps {
  handleAddTag: (tag: EBadge) => void;
  onOpen: () => void;
  onClose: () => void;
  selectedTags: EBadge[];
  isOpen: boolean;
  deleteTag: (tagToDelete: EBadge) => void;
}

const TaskTags: React.FC<TaskTagsProps> = ({
  handleAddTag,
  onOpen,
  onClose,
  selectedTags,
  isOpen,
  deleteTag,
}) => {
  return (
    <Flex
      gap="23.57px"
      alignItems="center"
      bg="#F9F9F9"
      py="14px"
      pl="12px"
      ml="-12px"
      rounded="10px"
    >
      <BadgeList onAddTag={handleAddTag} onOpen={onOpen} onClose={onClose} />
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
  );
};

export default TaskTags;
