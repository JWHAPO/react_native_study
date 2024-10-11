import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    id: string,
    name: string,
    birth: string,
    etc: string;
  }

const initialState: User = {
    id: "",
    name: "",
    birth: "",
    etc: ""
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser : (state, action) => {
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.birth = action.payload.birth;
            state.etc = action.payload.etc;
        },
        setId : (state, action) => {
            state.id = action.payload;
        },
        setName : (state, action) => {
            state.name = action.payload;
        },
        setBirth : (state, action) => {
            state.birth = action.payload;
        },
        setEtc : (state, action) => {
            state.etc = action.payload;
        },
    }
});

export const { setUser, setId, setName, setBirth, setEtc } = userSlice.actions;
export default userSlice.reducer;