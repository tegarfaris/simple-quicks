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

  const renderContent = () => {
    if (isPending) {
      return <SectionLoader />;
    } else {
      return <InboxList />;
    }
  };

  return (
    <FormProvider {...methods}>
      <PopupQuicks>
        <InputField
          id="search"
          name="search"
          placeholder="Search"
          required
          type="text"
          rightElement={<Image src="/assets/icons/search_black.svg" w="20px" />}
        />
        {renderContent()}
      </PopupQuicks>
    </FormProvider>
  );
};

export default InboxSection;
