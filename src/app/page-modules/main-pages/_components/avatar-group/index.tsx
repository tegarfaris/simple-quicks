import { Flex, Image } from "@chakra-ui/react";
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
        <Image src="/assets/icons/person_black.svg" w="18px" />
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
        <Image src="/assets/icons/person_white.svg" w="18px" />
      </Flex>
    </Flex>
  );
};

export default AvatarGroup;
