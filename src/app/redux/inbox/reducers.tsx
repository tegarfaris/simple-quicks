import { createReducer } from "@reduxjs/toolkit";
import { IInbox } from "@simple-quicks/app/interface/inbox.interface";
import { AxiosError } from "axios";
import { REQUEST_GET_INBOXS } from "./actions";

export type IInboxState = {
  inboxList: IInbox[] | null;
  inboxSuccess: boolean;
  inboxPending: boolean;
  inboxError: AxiosError | null;
  inboxIsEmpty: boolean;
};

const initialState: IInboxState = {
  inboxList: null,
  inboxSuccess: false,
  inboxPending: false,
  inboxIsEmpty: false,
  inboxError: null,
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
      state.inboxIsEmpty = !payload;
      state.inboxSuccess = true;
    })
    .addCase(REQUEST_GET_INBOXS.rejected, (state, { payload }) => {
      state.inboxError = payload as AxiosError;
    });
});
