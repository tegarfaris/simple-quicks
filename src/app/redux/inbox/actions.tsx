import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  API_INBOX,
  API_INBOX_EDIT_MESSAGE,
  API_INBOX_MESSAGE,
} from "@simple-quicks/app/config/api/api-inbox";
import { REQUEST_INBOX } from "@simple-quicks/app/config/axios";
import {
  IMessages,
  IParamsGetInbox,
} from "@simple-quicks/app/interface/inbox.interface";

// GET LIST INBOX
export const REQUEST_GET_INBOXS = createAsyncThunk(
  "inbox/list",
  async (params: IParamsGetInbox, { rejectWithValue }) => {
    try {
      const response = await REQUEST_INBOX.get(API_INBOX.INBOXS, {
        params: params,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// GET DETAIL INBOX
export const REQUEST_DETAIL_INBOX = createAsyncThunk(
  "inbox/detail",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await REQUEST_INBOX.get(API_INBOX_MESSAGE(id));
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// GET MESSAGE
export const REQUEST_GET_MESSAGE = createAsyncThunk(
  "inbox/message-list",
  async (
    params: { order: "asc" | "desc"; inboxId: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await REQUEST_INBOX.get(
        API_INBOX_MESSAGE(params.inboxId),
        {
          params: params,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// SEND MESSAGE
export const REQUEST_SEND_MESSAGE = createAsyncThunk(
  "inbox/send",
  async (payload: IMessages, { rejectWithValue }) => {
    try {
      const response = await REQUEST_INBOX.post(
        API_INBOX_MESSAGE(payload.id),
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// EDIT MESSAGE
export const REQUEST_EDIT_MESSAGE = createAsyncThunk(
  "inbox/edit",
  async (
    payload: { data: IMessages; inboxId: string },
    { rejectWithValue }
  ) => {
    try {
      const response = await REQUEST_INBOX.put(
        API_INBOX_EDIT_MESSAGE(payload?.inboxId, payload?.data?.id),
        payload.data
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// DELETE MESSAGE
export const REQUEST_DELETE_MESSAGE = createAsyncThunk(
  "inbox/delete",
  async (data: { inboxId: string; id: string }, { rejectWithValue }) => {
    try {
      const response = await REQUEST_INBOX.delete(
        API_INBOX_EDIT_MESSAGE(data.inboxId, data.id)
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
