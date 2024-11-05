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

const dataCategorySlice = createSlice({
  name: 'dataCategory',
  initialState: {
    dataCategory: [], 
    loading: false,
    error: null,
  },
  reducers: {
    setDataCategory: (state, action) => {
      state.dataCategory = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setCategoryId } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;

export const { setDataCategory, setLoading, setError } = dataCategorySlice.actions;
export const dataCategoryReducer = dataCategorySlice.reducer;
