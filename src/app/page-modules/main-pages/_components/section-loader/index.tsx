import { Flex, Spinner, Text } from "@chakra-ui/react";
import { COLORS, SPINNER_COLORS } from "@simple-quicks/theme/theme.utility";
import React from "react";

const SectionLoader: React.FC<{ loadingText?: string }> = ({ loadingText }) => {
  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      h="full"
      gap="12.7px"
    >
      <Spinner
        w="70.41px"
        h="70.41px"
        thickness="8px"
        speed="0.65s"
        rounded="full"
        emptyColor={SPINNER_COLORS.WHITE}
        color={SPINNER_COLORS.GRAY}
      />
      <Text color={COLORS.SECONDARY} fontFamily="lato" fontWeight={600}>
        {loadingText ? loadingText : "Loading Chats"}
      </Text>
    </Flex>
  );
};

export default SectionLoader;
