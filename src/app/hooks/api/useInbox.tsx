import {
  INBOX_SELECTOR_COLLECTION,
  REQUEST_GET_INBOXS,
} from "@simple-quicks/app/redux/inbox";
import {
  useAppDispatch,
  useAppSelector,
} from "@simple-quicks/app/redux/useRedux";
import useResponse from "../function/useResponse";
import { useCallback } from "react";
import { IParamsGetInbox } from "@simple-quicks/app/interface/inbox.interface";
import InboxList from "@simple-quicks/app/page-modules/main-pages/_sub-modules/inbox/_screens/inbox-list";

const useInbox = () => {
  const dispatch = useAppDispatch();
  const { inboxList, inboxPending, inboxSuccess, inboxError, inboxIsEmpty } =
    useAppSelector(INBOX_SELECTOR_COLLECTION);
  const { handleError, handleSuccess } = useResponse();

  const getInboxList = useCallback(
    (params: IParamsGetInbox) => {
      dispatch(REQUEST_GET_INBOXS(params)).then((result) => {
        if (result.meta.requestStatus === "rejected") {
          handleError(
            result.payload?.response?.status,
            result.payload?.response?.data.message
          );
        }
      });
    },
    [dispatch, handleError]
  );

  return {
    inboxList,
    inboxPending,
    inboxSuccess,
    inboxError,
    inboxIsEmpty,
    getInboxList,
  };
};
export default useInbox;
