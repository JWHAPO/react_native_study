import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slice/UserSlice";
import LevelSlice from "./slice/LevelSlice";
import UserSlice from "./slice/UserSlice";

const RootReducer = combineReducers({
    user: UserSlice,
    level: LevelSlice
});

export type RootState = ReturnType<typeof RootReducer>;
export default RootReducer;