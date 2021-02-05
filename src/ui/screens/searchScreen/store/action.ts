import { defineAction } from "rd-redux-utils";

export const searchAction = defineAction<{value: string}>("SEARCH");
export const resetSearchList = defineAction<[]>('RESET');