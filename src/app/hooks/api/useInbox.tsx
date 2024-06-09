import {
  INBOX_SELECTOR_COLLECTION,
  REQUEST_DELETE_MESSAGE,
  REQUEST_EDIT_MESSAGE,
  REQUEST_GET_INBOXS,
  REQUEST_GET_MESSAGE,
  REQUEST_SEND_MESSAGE,
} from "@simple-quicks/app/redux/inbox";
import {
  useAppDispatch,
  useAppSelector,
} from "@simple-quicks/app/redux/useRedux";
import useResponse from "../function/useResponse";
import { useCallback } from "react";
import {
  IMessages,
  IParamsGetInbox,
} from "@simple-quicks/app/interface/inbox.interface";

const useInbox = () => {
  const dispatch = useAppDispatch();
  const {
    inboxList,
    messageError,
    messageIsEmpty,
    messagePending,
    messageSuccess,
    messageList,
    inboxPending,
    inboxSuccess,
    inboxError,
    inboxIsEmpty,
    refetchMessage,
  } = useAppSelector(INBOX_SELECTOR_COLLECTION);
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

  const getMessage = useCallback(
    (params: { order: "desc" | "asc"; inboxId: string }) => {
      dispatch(REQUEST_GET_MESSAGE(params)).then((result) => {
        if (result.meta.requestStatus === "rejected") {
          handleError(
            result.payload?.response?.status,
            result.payload?.response?.data.message
          );
        }
      });
    },
    []
  );

  const sendMessage = useCallback(
    (payload: IMessages) => {
      dispatch(REQUEST_SEND_MESSAGE(payload)).then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          handleSuccess(
            "Your message has been sent. Scrolling to the newest message."
          );
        } else if (result.meta.requestStatus === "rejected") {
          handleError(
            result.payload?.response?.status,
            result.payload?.response?.data.message
          );
        }
      });
    },
    [dispatch, handleError]
  );

  const editMessage = useCallback(
    (payload: { data: IMessages; inboxId: string }) => {
      dispatch(REQUEST_EDIT_MESSAGE(payload)).then((result) => {
        if (result.meta.requestStatus === "rejected") {
          handleError(
            result.payload?.response?.status,
            result.payload?.response?.data.message
          );
        }
      });
    },
    [dispatch, handleSuccess, handleError]
  );

  const deleteMessage = useCallback(
    (data: { inboxId: string; id: string }) => {
      dispatch(REQUEST_DELETE_MESSAGE(data)).then((result) => {
        if (result.meta.requestStatus === "fulfilled") {
          handleSuccess("Chat Succesfully Deleted !");
        } else if (result.meta.requestStatus === "rejected") {
          handleError(
            result.payload?.response?.status,
            result.payload?.response?.data.message
          );
        }
      });
    },
    [dispatch, handleError, handleSuccess]
  );

  return {
    inboxList,
    inboxPending,
    inboxSuccess,
    inboxError,
    inboxIsEmpty,
    messageError,
    messageIsEmpty,
    messagePending,
    messageSuccess,
    messageList,
    refetchMessage,
    getMessage,
    getInboxList,
    sendMessage,
    editMessage,
    deleteMessage,
  };
};
export default useInbox;
