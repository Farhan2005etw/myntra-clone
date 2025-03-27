import {  createSlice } from "@reduxjs/toolkit"

const FetchingStatusSlice = createSlice({
    name: 'fetchingStatus',
    initialState: {
        fetchingDone: false,
        currentlyFetching: false,

    },
    reducers: {
        markFetchingDone: (state) => {
            return state.fetchingDone = true
        },
        markFetchingStarted: (state) => {
            return state.currentlyFetching = true
        },
        markFetchingFinished: (state) => {
            return state.currentlyFetching = false
        }
    }
})


export const fetchingStatusAction = FetchingStatusSlice.actions;
export default FetchingStatusSlice;