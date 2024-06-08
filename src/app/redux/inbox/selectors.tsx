import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const INBOX_SELECTOR = (state: RootState) => state.inbox;

export const INBOX_SELECTOR_COLLECTION = createSelector(
  INBOX_SELECTOR,
  (state) => state
);
