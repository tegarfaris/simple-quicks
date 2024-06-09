import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  API_TASK,
  API_TASK_DETAIL,
} from "@simple-quicks/app/config/api/api-task";
import { REQUEST_TASK } from "@simple-quicks/app/config/axios";
import {
  IParamsTask,
  ITask,
} from "@simple-quicks/app/interface/task.interface";

// GET LIST TASK
export const REQUEST_GET_TASK = createAsyncThunk(
  "task/list",
  async (params: IParamsTask, { rejectWithValue }) => {
    try {
      const response = await REQUEST_TASK.get(API_TASK.TASKS, {
        params: params,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// ADD TASK
export const REQUEST_ADD_TASK = createAsyncThunk(
  "task/add",
  async (payload: ITask, { rejectWithValue }) => {
    try {
      const response = await REQUEST_TASK.post(API_TASK.TASKS, payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// EDIT TASK
export const REQUEST_EDIT_TASK = createAsyncThunk(
  "task/edit",
  async (payload: ITask, { rejectWithValue }) => {
    try {
      const response = await REQUEST_TASK.put(
        API_TASK_DETAIL(payload.id as string),
        payload
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// DELETE TASK
export const REQUEST_DELETE_TASK = createAsyncThunk(
  "task/delete",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await REQUEST_TASK.delete(API_TASK_DETAIL(id));
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
