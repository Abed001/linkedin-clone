import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counter/counterAPI';

const initialState = {
  user: null,
  value: 0,
  status: 'idle',
};



export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    login: (state,action) => {

      state.user=action.payload;
    },
   
    logout: (state) => {
      state.user = null;
    },
  },

});

export const {login,logout} = userSlice.actions;

//selectors
export const selectUser = (state) => state.user.user;


export default userSlice.reducer;
