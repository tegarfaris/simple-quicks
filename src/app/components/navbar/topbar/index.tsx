import { Flex, Image } from "@chakra-ui/react";
import { ICONS } from "@simple-quicks/app/helper/icons.helper";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import React from "react";

const Topbar = () => {
  return (
    <Flex w="full" bg={COLORS.NEUTRAL} h="50px">
      <Image ml="20px" w="20px" src={ICONS.SEARCH_WHITE} alt="icons-search" />
    </Flex>
  );
};

export default Topbar;
