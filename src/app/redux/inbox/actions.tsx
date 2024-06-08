import { createAsyncThunk } from "@reduxjs/toolkit";
import { API_INBOX } from "@simple-quicks/app/config/api/api-inbox";
import { REQUEST } from "@simple-quicks/app/config/axios";
import { IParamsGetInbox } from "@simple-quicks/app/interface/inbox.interface";

// GET_LIST_INBOX
export const REQUEST_GET_INBOXS = createAsyncThunk(
  "inbox/list",
  async (params: IParamsGetInbox, { rejectWithValue }) => {
    try {
      const response = await REQUEST.get(API_INBOX.INBOXS, {
        params: params,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
