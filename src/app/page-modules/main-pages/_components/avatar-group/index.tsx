import { Flex, Image } from "@chakra-ui/react";
import { ICONS } from "@simple-quicks/app/helper/icons.helper";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import React from "react";

const AvatarGroup: React.FC = () => {
  return (
    <Flex pos="relative" w="51px">
      <Flex
        w="34px"
        h="34px"
        justifyContent="center"
        alignItems="center"
        rounded="full"
        bg={COLORS.SLATE}
      >
        <Image src={ICONS.PERSON_BLACK} w="18px" alt="icons-person" />
      </Flex>
      <Flex
        pos="absolute"
        left="17px"
        w="34px"
        h="34px"
        justifyContent="center"
        alignItems="center"
        rounded="full"
        bg={COLORS.PRIMARY_BLUE}
      >
        <Image src={ICONS.PERSON_WHITE} w="18px" alt="icons-person" />
      </Flex>
    </Flex>
  );
};

export default AvatarGroup;
