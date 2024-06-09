import { createReducer } from "@reduxjs/toolkit";
import { ITask } from "@simple-quicks/app/interface/task.interface";
import { AxiosError } from "axios";
import {
  REQUEST_ADD_TASK,
  REQUEST_DELETE_TASK,
  REQUEST_EDIT_TASK,
  REQUEST_GET_TASK,
} from "./actions";

export type ITaskState = {
  taskList: ITask[] | null;
  taskPending: boolean;
  taskIsEmpty: boolean;
  taskError: AxiosError | null;
  refetch: boolean;
};

const initialState: ITaskState = {
  taskList: null,
  taskPending: false,
  taskIsEmpty: false,
  taskError: null,
  refetch: false,
};

export const TASK_REDUCER = createReducer(initialState, (builder) => {
  builder

    // GET LIST TASK
    .addCase(REQUEST_GET_TASK.pending, (state) => {
      state.taskPending = true;
    })
    .addCase(REQUEST_GET_TASK.fulfilled, (state, { payload }) => {
      state.taskPending = false;
      state.taskList = payload;
    })
    .addCase(REQUEST_GET_TASK.rejected, (state, { payload }) => {
      state.taskError = payload as AxiosError;
      state.taskIsEmpty = true;
    })

    // ADD TASK
    .addCase(REQUEST_ADD_TASK.pending, (state) => {
      state.taskPending = true;
      state.refetch = false;
    })
    .addCase(REQUEST_ADD_TASK.fulfilled, (state) => {
      state.taskPending = false;
      state.refetch = true;
    })
    .addCase(REQUEST_ADD_TASK.rejected, (state, { payload }) => {
      state.taskError = payload as AxiosError;
      state.refetch = false;
    })

    // EDIT TASK
    .addCase(REQUEST_EDIT_TASK.pending, (state) => {
      state.taskPending = true;
      state.refetch = false;
    })
    .addCase(REQUEST_EDIT_TASK.fulfilled, (state) => {
      state.taskPending = false;
      state.refetch = true;
    })
    .addCase(REQUEST_EDIT_TASK.rejected, (state, { payload }) => {
      state.taskError = payload as AxiosError;
      state.refetch = false;
    })

    // DELETE TASK
    .addCase(REQUEST_DELETE_TASK.pending, (state) => {
      state.taskPending = true;
      state.refetch = false;
    })
    .addCase(REQUEST_DELETE_TASK.fulfilled, (state) => {
      state.taskPending = false;
      state.refetch = true;
    })
    .addCase(REQUEST_DELETE_TASK.rejected, (state, { payload }) => {
      state.taskError = payload as AxiosError;
      state.refetch = false;
    });
});
