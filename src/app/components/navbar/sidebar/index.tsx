import { Flex } from "@chakra-ui/react";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import React from "react";

const Sidebar = () => {
  return (
    <Flex
      minH="100vh"
      bg={COLORS.SECONDARY}
      borderRight="1px solid white"
      w="200px"
    ></Flex>
  );
};

export default Sidebar;
