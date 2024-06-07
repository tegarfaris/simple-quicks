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
import { STICKERS_COLORS } from "@simple-quicks/theme/theme.utility";
import { ICONS } from "../../../../../../helper/icons.helper";
import React, { Dispatch, SetStateAction } from "react";
import LABEL_BADGE from "@simple-quicks/app/data/data-badge.json"

interface BadgeListProps {
  setBadgeValue?: Dispatch<SetStateAction<string>>
}
export const BadgeList: React.FC<BadgeListProps> = ({setBadgeValue}) => {
  return (
    <Popover closeOnBlur={false} placement="bottom">
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
                    bg={STICKERS_COLORS.NEUTRAL}
                    fontFamily="lato"
                    fontSize="16px"
                    fontWeight={600}
                    cursor="pointer"
                    onClick={() => setBadgeValue && setBadgeValue(badge.value)}
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
