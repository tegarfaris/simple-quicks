import {
  Flex,
  Image,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import { ICONS } from "../../../../../../helper/icons.helper";
import React from "react";
import LABEL_BADGE from "@simple-quicks/app/data/data-badge.json";
import { renderTags } from "@simple-quicks/app/helper/render-tags.helper";
import { EBadge } from "@simple-quicks/app/interface/task.interface";

interface BadgeListProps {
  onAddTag: (tag: EBadge) => void;
  onOpen: () => void;
  onClose: () => void;
}

export const BadgeList: React.FC<BadgeListProps> = ({
  onAddTag,
  onClose,
  onOpen,
}) => {
  return (
    <Popover
      closeOnBlur={false}
      placement="bottom"
      onOpen={onOpen}
      onClose={onClose}
    >
      {() => (
        <>
          <PopoverTrigger>
            <Image
              src={ICONS.BOOKMARKS_BLUE}
              w="18.89px"
              h="20px"
              alt="bookmarks-icons"
              cursor="pointer"
            />
          </PopoverTrigger>
          <Portal>
            <PopoverContent ml="250px" mt="10px" w="277px" h="323px">
              <PopoverBody
                as={Flex}
                flexDir="column"
                justifyContent="center"
                py="14px"
                px="16px"
                gap="10px"
              >
                {LABEL_BADGE.map((badge) => (
                  <Text
                    key={badge.id}
                    px="12px"
                    py="2px"
                    w="246px"
                    h="28px"
                    rounded="5px"
                    bg={renderTags(badge.value as EBadge).bgColor}
                    fontFamily="lato"
                    fontSize="16px"
                    fontWeight={600}
                    cursor="pointer"
                    onClick={() => onAddTag(badge.value as EBadge)}
                  >
                    {badge.text}
                  </Text>
                ))}
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </>
      )}
    </Popover>
  );
};
