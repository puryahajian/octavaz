import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'categoryId',
  initialState: {
    categoryId: null,
  },
  reducers: {
    setCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
  },
});

export const { setCategoryId } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;
