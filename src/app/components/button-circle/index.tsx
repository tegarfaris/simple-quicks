import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

interface ButtonCircleProps {
  withTitle?: boolean;
  title?: string;
  icons: string;
  bgColor: string;
  width: string;
  height: string;
  onClick?: () => void;
}

const ButtonCircle: React.FC<ButtonCircleProps> = ({
  withTitle = false,
  title,
  icons,
  bgColor,
  width,
  height,
  onClick,
}) => {
  return (
    <Flex
      flexDir="column"
      gap="10px"
      minH="100px"
      alignItems="center"
      justifyContent="end"
      onClick={onClick}
      cursor="pointer"
    >
      <Text
        display={withTitle ? "flex" : "none"}
        fontSize="11px"
        fontWeight={400}
        color="white"
      >
        {title}
      </Text>
      <Flex
        justifyContent="center"
        alignItems="center"
        rounded="full"
        bg={bgColor}
        w="56px"
        h="56px"
      >
        <Image src={icons} w={width} height={height} />
      </Flex>
    </Flex>
  );
};

export default ButtonCircle;
