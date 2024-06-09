import React from "react";
import InboxList from "./_screens/inbox-list";
import { FormProvider, useForm } from "react-hook-form";
import PopupQuicks from "../../_components/pop-up";
import useInbox from "@simple-quicks/app/hooks/api/useInbox";
import {
  IInbox,
  IParamsGetInbox,
} from "@simple-quicks/app/interface/inbox.interface";
import { Box, Image } from "@chakra-ui/react";
import InputField from "@simple-quicks/app/components/input/input-field";
import { ICONS } from "@simple-quicks/app/helper/icons.helper";

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
    <PopupQuicks>
      <Box display={selectedMessageId === null ? "initial" : "none"}>
        <FormProvider {...methods}>
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
        </FormProvider>
      </Box>
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
  );
};

export default InboxSection;
