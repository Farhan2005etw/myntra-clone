import { configureStore } from "@reduxjs/toolkit"
import itemsSlice from "./itemSlice"
import FetchingStatusSlice from "./FetchingStatusSlice.js"
import bagSlice from "./bagSlice.js"





const myntraStore = configureStore({
    reducer: {
        items: itemsSlice.reducer,
        fetchStatus: FetchingStatusSlice.reducer,
        bag: bagSlice.reducer
    }
})

export default myntraStore