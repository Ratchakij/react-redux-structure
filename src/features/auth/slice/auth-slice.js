import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import * as authApi from "../../../api/auth-api";

const initialState = {
  isAuthenticated: false,
  isOpenSidebar: true,
  loading: false,
  error: null,
  user: null,
  token: null,
};

export const register = createAsyncThunk(
  "auth/register",
  async (input, thunkApi) => {
    try {
      const res = await authApi.register(input);
      const newUser = res.data;
      thunkApi.dispatch(setToken(newUser.token));
      axios.defaults.headers.common["Authorization"] = `Bearer ${newUser.token}`;
      const getUser = await authApi.getUser();
      const { user } = getUser.data;
      return user; // return user data as payload
    } catch (err) {
      console.log(err);
      return thunkApi.rejectWithValue(err.response.data.message);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (input, thunkApi) => {
  try {
    const res = await authApi.login(input);
    const user = res.data;
    // thunkApi.dispatch(setUser(user));
    axios.defaults.headers.common["Authorization"] = `Bearer ${user.token}`;
    return user;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

export const getUser = createAsyncThunk("auth/getUser", async (_, thunkApi) => {
  try {
    const res = await authApi.getUser();
    const { user } = res.data;
    return user;
  } catch (err) {
    return thunkApi.rejectWithValue(err.response.data.message);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setOpenSidebar: (state) => {
      state.isOpenSidebar = !state.isOpenSidebar;
    },
    setToken: (state, action) => {
      console.log(action);
      state.token = action.payload;
    },
    setUser: (state, action) => {
      console.log(action);
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    setLogout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload; // unwrap payload directly
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        console.log(action);
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setOpenSidebar, setToken, setUser, setLogout } =
  authSlice.actions;
export default authSlice.reducer;
