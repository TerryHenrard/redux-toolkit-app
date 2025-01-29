import { createSlice } from "@reduxjs/toolkit";

export const picturesSlice = createSlice({
  name: "pictures",
  initialState: {
    pictures: null,
  },
  reducers: {
    setPictureData: (state, { payload }) => {
      state.pictures = payload;
    },

    addPicture: (state, { payload }) => {
      state.pictures.push(payload);
    },

    editPicture: (state, { payload }) => {
      state.pictures = state.pictures.map((picture) => {
        if (picture.id === payload[1]) {
          return {
            ...picture,
            artist: payload[0],
          };
        }

        return picture;
      });
    },

    deletePicture: (state, { payload }) => {
      state.pictures = state.pictures.filter((pic) => pic.id !== payload);
    },
  },
});

export const { setPictureData, addPicture, editPicture, deletePicture } =
  picturesSlice.actions;
export default picturesSlice.reducer;
