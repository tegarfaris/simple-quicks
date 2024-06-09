import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const TASK_SELECTOR = (state: RootState) => state.task;

export const TASK_SELECTOR_COLLECTION = createSelector(
  TASK_SELECTOR,
  (state) => state
);
