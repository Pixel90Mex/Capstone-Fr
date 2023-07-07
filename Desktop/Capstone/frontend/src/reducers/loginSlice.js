import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    response: null,
    error: null,
    isLoading: false
}
export const LoginRequest = createAsyncThunk(
    "login/userLogin",
    async (data) => {
        try {
            const response = await fetch(`${process.env.REACT_APP_SERVER_BASE_URL}/login`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            console.log(response)
            return await response.json();
        } catch (error) {
            if (error) 
                throw new Error("Errore durante la ricezione dei dati")
        }
    }
)
const loginSlice = createSlice({
    name: "login",
    initialState,
    extraReducers: builder => {
        builder 
            .addCase(LoginRequest.pending, state => {
                state.isLoading = true
            })
            .addCase(LoginRequest.fulfilled, (state, action) => {
                state.isLoading = false
                state.response = action.payload

                if (action.payload.statusCode === 200) {
                    localStorage.setItem("auth", JSON.stringify(action.payload))
                }
            })
            .addCase(LoginRequest.rejected, state => {
                state.isLoading = false
                state.error = "Errore durante il login"
            })
    }
})
export const loginResponse = state => state.loginState.response
export const loginLoading = state => state.loginState.isLoading
export default loginSlice.reducer