import React from "react";
import { Text } from "@chakra-ui/react";

import PopupQuicks from "@simple-quicks/app/page-modules/main-pages/_components/pop-up";
import { FormProvider, useForm } from "react-hook-form";

const TaskSection = () => {
  const methods = useForm({});

  return (
    <FormProvider {...methods}>
      <PopupQuicks onCloseDetail={() => false}>
        <Text>Task Section</Text>
      </PopupQuicks>
    </FormProvider>
  );
};

export default TaskSection;
