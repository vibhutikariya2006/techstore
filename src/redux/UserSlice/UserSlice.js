import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
    "user/login",
    async ({username,password}, thunkAPI) => {
        try {
            const response = await axios.post(
                "https://dummyjson.com/auth/login",
                {username, password,   expiresInMins: 30
},
                {headers:{"Content-Type" : "application/json"}},
            );
            return response.data;
        } catch (error) {
            console.log("API Error:", error.response?.data);
            return thunkAPI.rejectWithValue(error?.response.message || "Login Failed")
        }
    }
)

const UserSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        isAuth: false,
        user: null,
        message: null,
        error: null,
    },
    reducers:()=>{},

    extraReducers: (builder)=> {
     builder
     .addCase(login.pending, (state)=>{
        state.loading = true;
     })
     .addCase(login.fulfilled, (state, action)=>{
        state.loading = false;
        state.isAuth = true;
        state.user = action.payload.user;
state.message = action.payload?.message || null;

})
     .addCase(login.rejected, (state, action)=>{
         state.loading = false;
         state.isAuth = false;
         state.user = null;
state.message = action.payload?.message || null;         
state.error = action.payload;
     })

    }
})
export default UserSlice.reducer;