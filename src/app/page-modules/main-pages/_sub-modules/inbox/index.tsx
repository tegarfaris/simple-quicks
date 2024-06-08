import React from "react";
import InboxList from "./_screens/inbox-list";
import { FormProvider, useForm } from "react-hook-form";
import PopupQuicks from "../../_components/pop-up";
import useInbox from "@simple-quicks/app/hooks/api/useInbox";
import {
  IInbox,
  IParamsGetInbox,
} from "@simple-quicks/app/interface/inbox.interface";

const InboxSection: React.FC = () => {
  const methods = useForm({});
  const { inboxList, getInboxList, inboxIsEmpty, inboxPending, inboxSuccess } =
    useInbox();
  const [paramsInbox, setParamsInbox] = React.useState<IParamsGetInbox>();
  const [selectedMessageId, setSelectedMessageId] = React.useState<
    string | null
  >(null);

  const openInbox = (id: string) => {
    setSelectedMessageId(id);
  };

  const closeInbox = () => {
    setSelectedMessageId(null);
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      getInboxList({
        search: paramsInbox?.search,
        sortBy: paramsInbox?.sortBy,
      });
    }, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [getInboxList, paramsInbox?.search, paramsInbox?.sortBy]);

  return (
    <FormProvider {...methods}>
      <PopupQuicks>
        <InboxList
          selectedMessageId={selectedMessageId}
          paramsInbox={paramsInbox as IParamsGetInbox}
          setParamsInbox={setParamsInbox}
          inboxList={inboxList as IInbox[]}
          openInbox={openInbox}
          pending={inboxPending}
          success={inboxSuccess}
          isEmpty={inboxIsEmpty}
          onCloseDetail={closeInbox}
        />
      </PopupQuicks>
    </FormProvider>
  );
};

export default InboxSection;
