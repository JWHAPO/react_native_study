import { createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    tempId: '',
    tempName: '',
    tempMenu: '',
};

const TemplateSlice = createSlice({
    name: 'template',
    initialState,
    reducers: {
        setTemplate(state, action) {
            state.tempId = action.payload.tempId;
            state.tempName = action.payload.tempName;
            state.tempMenu = action.payload.tempMenu;
        },

        setTempId(state, action) {
            state.tempId = action.payload;
        },

        setTempName(state, action) {
            state.tempName = action.payload;
        },

        setTempMenu(state, action) {
            state.tempMenu = action.payload;
        },
    }
});

export const { setTemplate, setTempId, setTempName, setTempMenu} = TemplateSlice.actions
export default TemplateSlice.reducer