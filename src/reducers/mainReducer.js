import {createSlice} from '@reduxjs/toolkit';

const mainReducer = createSlice({
  name: 'mainReducer',
  initialState: {
    photos: [],
    loading: false,
    error: false,
  },
  reducers: {
    loadPhotos: (state, {payload}) => {
      state.photos = payload;
      state.error = false;
      state.loading = false;
    },

    loadError: state => {
      state.error = true;
      state.loading = false;
    },

    startLoading: state => {
      state.loading = true;
    },
  },
});

export default mainReducer.reducer;
export const {loadPhotos, loadError, startLoading} = mainReducer.actions;
