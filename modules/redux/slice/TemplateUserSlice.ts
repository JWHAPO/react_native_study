import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    nickName: '',
    email: '',
    accessToken: ''
};

const TemplateUserSlice = createSlice({
    name: 'templateUser',
    initialState,
    reducers: {
        setUser(state, action) {
            state.name = action.payload.name;
            state.nickName = action.payload.nickName;
            state.email = action.payload.email;
            state.accessToken = action.payload.accessToken;
        },
        setName(state, action){
            state.name = action.payload.name;
        },
        setNickName(state, action){
            state.nickName = action.payload.nickName;
        },
        setEmail(state, action){
            state.email = action.payload.email;
        },
        setAccessToken(state, action){
            state.accessToken = action.payload.accessToken;
        },
    }
});

export const { setUser, setName, setNickName, setEmail, setAccessToken} = TemplateUserSlice.actions

export default TemplateUserSlice.reducer