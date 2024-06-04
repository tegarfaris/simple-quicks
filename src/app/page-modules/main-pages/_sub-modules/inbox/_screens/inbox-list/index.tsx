import { Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import InboxItem from "../../_components/inbox-item";
import { BORDER } from "@simple-quicks/theme/theme.utility";

const InboxList: React.FC = () => {
  return (
    <Flex flexDir="column" gap="22px">
      <InboxItem />
      <Divider borderColor={BORDER.DEFAULT} />
    </Flex>
  );
};

export default InboxList;
