import { combineReducers } from "@reduxjs/toolkit";
import templateSlice from "./slice/TemplateSlice";
import TemplateUserSlice from "./slice/TemplateUserSlice";

const RootReducer = combineReducers({
    templateUser: TemplateUserSlice,
    template: templateSlice
});

export type RootState = ReturnType<typeof RootReducer>;
export default RootReducer;