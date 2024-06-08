import React, { Dispatch, SetStateAction } from "react";
import { Box, Divider, Flex, Image, Text } from "@chakra-ui/react";
import InboxItem from "../../_components/inbox-item";
import InboxDetail from "../inbox-detail";
import { BORDER } from "@simple-quicks/theme/theme.utility";
import InputField from "@simple-quicks/app/components/input/input-field";
import { ICONS } from "@simple-quicks/app/helper/icons.helper";
import {
  IInbox,
  IParamsGetInbox,
} from "@simple-quicks/app/interface/inbox.interface";
import SectionLoader from "@simple-quicks/app/page-modules/main-pages/_components/section-loader";

interface InboxListProps {
  selectedMessageId: string | null;
  paramsInbox: IParamsGetInbox;
  setParamsInbox: Dispatch<SetStateAction<IParamsGetInbox | undefined>>;
  inboxList: IInbox[];
  openInbox: (id: string) => void;
  pending: boolean;
  success: boolean;
  isEmpty: boolean;
  onCloseDetail: () => void;
}
const InboxList: React.FC<InboxListProps> = ({
  selectedMessageId,
  paramsInbox,
  setParamsInbox,
  inboxList,
  openInbox,
  pending,
  success,
  isEmpty,
  onCloseDetail,
}) => {
  if (pending) {
    return <SectionLoader />;
  }

  if (isEmpty && success) {
    return (
      <Flex justifyContent="center" alignItems="center">
        <Text>Oops... Inbox is empty !</Text>
      </Flex>
    );
  }
  return (
    <Flex w="full" flexDir="column">
      <Box display={selectedMessageId === null ? "initial" : "none"}>
        {/* header */}
        <InputField
          id="search"
          name="search"
          placeholder="Search"
          required
          type="text"
          rightElement={
            <Image src={ICONS.SEARCH_BLACK} w="20px" alt="search-icons" />
          }
          pl="58.82px"
          onChange={(e) =>
            setParamsInbox({ ...paramsInbox, search: e.currentTarget.value })
          }
        />
      </Box>
      <Flex
        display={selectedMessageId === null ? "flex" : "none"}
        flexDir="column"
      >
        {inboxList?.map((inbox) => (
          <>
            <InboxItem
              key={inbox.id}
              messageName={inbox.titleMessage}
              date={inbox.date}
              senderName={inbox.messages[0].senderName}
              bodyMessage={inbox.messages[0].bodyChat}
              read={inbox.messages[0].isRead}
              onClick={() => openInbox(inbox.id)}
            />
            <Divider borderColor={BORDER.DEFAULT} />
          </>
        ))}
      </Flex>

      {selectedMessageId !== null && (
        <InboxDetail onCloseDetail={onCloseDetail} />
      )}
    </Flex>
  );
};

export default InboxList;
