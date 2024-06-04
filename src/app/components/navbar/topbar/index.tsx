import { Flex, Image } from "@chakra-ui/react";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import React from "react";

const Topbar = () => {
  return (
    <Flex w="full" bg={COLORS.NEUTRAL} h="50px">
      <Image ml="20px" w="20px" src="/assets/icons/search_white.svg" />
    </Flex>
  );
};

export default Topbar;
