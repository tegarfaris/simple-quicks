import { createReducer } from "@reduxjs/toolkit";
import {
  IInbox,
  IMessages,
} from "@simple-quicks/app/interface/inbox.interface";
import { AxiosError } from "axios";
import {
  REQUEST_DELETE_MESSAGE,
  REQUEST_EDIT_MESSAGE,
  REQUEST_GET_INBOXS,
  REQUEST_GET_MESSAGE,
  REQUEST_SEND_MESSAGE,
} from "./actions";

export type IInboxState = {
  inboxList: IInbox[] | null;
  inboxSuccess: boolean;
  inboxPending: boolean;
  inboxError: AxiosError | null;
  inboxIsEmpty: boolean;
  messageList: IMessages[] | null;
  messageSuccess: boolean;
  messagePending: boolean;
  messageError: AxiosError | null;
  messageIsEmpty: boolean;
  refetchMessage: boolean;
};

const initialState: IInboxState = {
  inboxList: null,
  inboxSuccess: false,
  inboxPending: false,
  inboxIsEmpty: false,
  inboxError: null,
  messageList: null,
  messageSuccess: false,
  messagePending: false,
  messageIsEmpty: false,
  messageError: null,
  refetchMessage: false,
};

export const INBOX_REDUCER = createReducer(initialState, (builder) => {
  builder

    // GET LIST INBOX
    .addCase(REQUEST_GET_INBOXS.pending, (state) => {
      state.inboxPending = true;
    })
    .addCase(REQUEST_GET_INBOXS.fulfilled, (state, { payload }) => {
      state.inboxPending = false;
      state.inboxList = payload;
      state.inboxSuccess = true;
      state.inboxIsEmpty = false;
    })
    .addCase(REQUEST_GET_INBOXS.rejected, (state, { payload }) => {
      state.inboxPending = false;
      state.inboxIsEmpty = true;
      state.inboxError = payload as AxiosError;
    })

    // GET MESSAGE
    .addCase(REQUEST_GET_MESSAGE.pending, (state) => {
      state.messagePending = true;
    })

    .addCase(REQUEST_GET_MESSAGE.fulfilled, (state, { payload }) => {
      state.messagePending = false;
      state.messageList = payload;
      state.messageSuccess = true;
    })

    .addCase(REQUEST_GET_MESSAGE.rejected, (state, { payload }) => {
      state.messageError = payload as AxiosError;
    })

    // SEND MESSAGE
    .addCase(REQUEST_SEND_MESSAGE.pending, (state) => {
      state.messagePending = true;
      state.refetchMessage = false;
    })

    .addCase(REQUEST_SEND_MESSAGE.fulfilled, (state) => {
      state.messagePending = false;
      state.messageSuccess = true;
      state.refetchMessage = true;
    })

    .addCase(REQUEST_SEND_MESSAGE.rejected, (state, { payload }) => {
      state.messageError = payload as AxiosError;
      state.refetchMessage = false;
    })

    // EDIT MESSAGE
    .addCase(REQUEST_EDIT_MESSAGE.pending, (state) => {
      state.messagePending = true;
      state.refetchMessage = false;
    })

    .addCase(REQUEST_EDIT_MESSAGE.fulfilled, (state) => {
      state.messagePending = false;
      state.messageSuccess = true;
      state.refetchMessage = true;
    })

    .addCase(REQUEST_EDIT_MESSAGE.rejected, (state, { payload }) => {
      state.messageError = payload as AxiosError;
      state.refetchMessage = false;
    })

    // DELETE MESSAGE
    .addCase(REQUEST_DELETE_MESSAGE.pending, (state) => {
      state.messagePending = true;
      state.refetchMessage = false;
    })

    .addCase(REQUEST_DELETE_MESSAGE.fulfilled, (state) => {
      state.messagePending = false;
      state.messageSuccess = true;
      state.refetchMessage = true;
    })

    .addCase(REQUEST_DELETE_MESSAGE.rejected, (state, { payload }) => {
      state.messageError = payload as AxiosError;
      state.refetchMessage = false;
    });
});
