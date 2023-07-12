import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    response: null,
    error: null,
    isLoading: false,
    classes: []
};
export const getClasses = createAsyncThunk(
    "class/getClasses",
    async ({page, pageSize}, {rejectWithValue}) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/class?page=${page}&pageSize=${pageSize}`);
            console.log(response)
            return await response.json();
        } catch (error) {
            if (error)
                console.log("Errore durante la ricezione dei dati");
                return rejectWithValue(error);
        }
    }
)
const classSlice = createSlice({
    name: "classes",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getClasses.pending, state => {
                state.isLoading = true;
            })
            .addCase(getClasses.fulfilled, (state, action) => {
                state.isLoading = false;
                state.classes = action.payload;
            })
            .addCase(getClasses.rejected, (state) => {
                state.isLoading = false;
                state.error = "Impossibile ricevere le informazioni";
            })
    }
})

export const classResponse = (state) => state.classesState.response;
export const classLoading = (state) => state.classesState.isLoading;
export const classesArray = (state) => state.classesState.classes;
export default classSlice.reducer;