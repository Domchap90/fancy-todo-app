import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import unsplashImageAPI from '../../api/imageAPI';

export const fetchImage = createAsyncThunk(
    'image/fetchImage',
    async() => {
        const response = await unsplashImageAPI.getImages();
        return response;
    });


export const imageSlice = createSlice({
    name: 'image',
    initialState: {
        images: [],
        isImageLoading: false,
        imageHasError: false
    },
    reducers: {},
    extraReducers: {
        [fetchImage.fulfilled]: (state, action) => {
            state.images = action.payload;
            state.isImageLoading = false;
            state.imageHasError = false;
        },
        [fetchImage.pending]: (state, action) => {
            state.isImageLoading = true;
            state.imageHasError = false;
        },
        [fetchImage.rejected]: (state, action) => {
            state.isImageLoading = false;
            state.imageHasError = true;
        }
    }
});

export const selectImages = state => state.image.images;
export const selectImagesLoading = state => state.image.isImageLoading;
export default imageSlice.reducer;