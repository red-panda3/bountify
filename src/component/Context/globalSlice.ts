import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GlobalState {
    value: string;
    count: number;
}

const initialState: GlobalState = {
    value: "Hello, World!",
    count: 0,
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setValue: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
        setCount: (state, action: PayloadAction<number>) => {
            state.count = action.payload;
        },
    },
});

export const { setValue, setCount } = globalSlice.actions;
export default globalSlice.reducer;