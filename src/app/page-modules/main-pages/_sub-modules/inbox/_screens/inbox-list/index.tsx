import React, { Dispatch, SetStateAction } from "react";
import { Divider, Flex, Text } from "@chakra-ui/react";
import InboxItem from "../../_components/inbox-item";
import InboxDetail from "../inbox-detail";
import { BORDER } from "@simple-quicks/theme/theme.utility";
import {
  IInbox,
  IMessages,
  IParamsGetInbox,
} from "@simple-quicks/app/interface/inbox.interface";
import SectionLoader from "@simple-quicks/app/page-modules/main-pages/_components/section-loader";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
} from "react-hook-form";
import dayjs from "dayjs";
import useInbox from "@simple-quicks/app/hooks/api/useInbox";

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
  inboxList,
  openInbox,
  pending,
  isEmpty,
  onCloseDetail,
}) => {
  const { sendMessage } = useInbox();
  const methods = useForm();

  const { reset } = methods;

  const send: SubmitHandler<IMessages> = (data) => {
    if (selectedMessageId) {
      sendMessage({
        id: selectedMessageId,
        isSender: true,
        isRead: true,
        senderName: "Tegar Faris Nurhakim",
        bodyChat: data.bodyChat,
        createdAt: dayjs().format("YYYY-MM-DD"),
      });
      reset({ bodyChat: "" });
    }
  };

  if (pending) {
    return <SectionLoader />;
  }

  //  i create this condition because on mockapi.io when data not matching with keyword search they didn't return an empty array or null, but 404, so I made this because I set isEmpty on state rejected.
  if (isEmpty) {
    return (
      <Flex w="full" h="full" justifyContent="center" alignItems="center">
        <Text>Oops... Inbox is empty !</Text>
      </Flex>
    );
  }
  return (
    <Flex w="full" flexDir="column">
      <Flex
        display={selectedMessageId === null ? "flex" : "none"}
        flexDir="column"
      >
        {inboxList ? (
          inboxList.map((inbox) => (
            <>
              <InboxItem
                key={inbox.id}
                messageName={inbox.titleMessage}
                date={inbox.date}
                senderName={
                  inbox.messages[inbox?.messages.length - 1].senderName
                }
                bodyMessage={
                  inbox.messages[inbox?.messages.length - 1].bodyChat
                }
                read={
                  inbox.messages[inbox?.messages.length - 1].isRead as boolean
                }
                onClick={() => openInbox(inbox.id)}
                isSender={
                  inbox.messages[inbox?.messages.length - 1].isSender as boolean
                }
              />
              <Divider borderColor={BORDER.DEFAULT} />
            </>
          ))
        ) : (
          <Flex w="full" h="full" justifyContent="center" alignItems="center">
            <Text>Oops... Inbox is empty !</Text>
          </Flex>
        )}
      </Flex>

      <FormProvider {...methods}>
        {selectedMessageId !== null && (
          <InboxDetail
            selectedMessageId={selectedMessageId}
            onCloseDetail={onCloseDetail}
            send={send as SubmitHandler<FieldValues>}
            pending={pending}
          />
        )}
      </FormProvider>
    </Flex>
  );
};

export default InboxList;
