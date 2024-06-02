import { Button } from "@chakra-ui/react";
import { COLORS } from "@simple-quicks/theme/theme.utility";
import React from "react";

const ButtonPrimary: React.FC<{ buttonText: string }> = ({ buttonText }) => {
  return (
    <Button
      fontSize="11px"
      fontFamily="lato"
      w="fit-content"
      variant="solid"
      bg={COLORS.PRIMARY_BLUE}
      color="white"
    >
      {buttonText}
    </Button>
  );
};

export default ButtonPrimary;
