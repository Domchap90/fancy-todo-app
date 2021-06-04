import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import quoteAPI from '../../api/quoteAPI';

export const fetchQuote = createAsyncThunk(
    'quote/fetchQuote',
    async() => {
        const response = await quoteAPI.getQuote();
        console.log('quote is ', response)
        return response;
    });

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        quote: {},
        isQuoteLoading: false,
        quoteHasError: false
    },
    reducers: {},
    extraReducers: {
        [fetchQuote.fulfilled]: (state, action) => {
            state.quote = action.payload;
            state.isQuoteLoading = false;
            state.quoteHasError = false;
        },
        [fetchQuote.pending]: (state, action) => {
            state.isQuoteLoading = true;
            state.quoteHasError = false;
        },
        [fetchQuote.rejected]: (state, action) => {
            state.isQuoteLoading = false;
            state.quoteHasError = true;
        },

    }
});

export const selectQuote = state => state.quote.quote;
export const isQuoteLoading = state => state.quote.isQuoteLoading;

export default quoteSlice.reducer;