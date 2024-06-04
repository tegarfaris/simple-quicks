import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import PopupQuicks from "../../_components/pop-up";
import InputField from "@simple-quicks/app/components/input/input-field";
import { Flex, Image, Spinner, Text } from "@chakra-ui/react";
import { COLORS, SPINNER_COLORS } from "@simple-quicks/theme/theme.utility";
import SectionLoader from "../../_components/section-loader";
import InboxList from "./_screens/inbox-list";

const InboxSection = () => {
  const methods = useForm({});
  const isPending = false;
  const [selectedMessageId, setSelectedMessageId] = React.useState<
    number | null
  >(null);

  const openInbox = (id: number) => {
    setSelectedMessageId(id);
  };

  const closeInbox = () => {
    setSelectedMessageId(null);
  };

  const renderContent = () => {
    if (isPending) {
      return <SectionLoader />;
    } else {
      return (
        <InboxList
          selectedMessageId={selectedMessageId}
          openInbox={openInbox}
          closeInbox={closeInbox}
        />
      );
    }
  };

  return (
    <FormProvider {...methods}>
      <PopupQuicks
        header={selectedMessageId !== null}
        footer={selectedMessageId !== null}
        onCloseDetail={closeInbox}
      >
        {renderContent()}
      </PopupQuicks>
    </FormProvider>
  );
};

export default InboxSection;
