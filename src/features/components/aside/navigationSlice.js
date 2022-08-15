import { createSlice,createEntityAdapter} from "@reduxjs/toolkit";
import {navigationData} from './navigationData'


export const navigationAdapter = createEntityAdapter({
    selectId: (item) =>item.id,
    sortComparer: (prevItem,nexItem) => prevItem.id.localCompare(nexItem.id)
})


const initialState = {
    status: 'idle',
    error: null,
    links:navigationData
   
}

const navigationSlice = createSlice({
    name:'links',
    initialState,
    reducers:{},
    extraReducers:{}
})

export const navigationSelector = navigationAdapter.getSelectors(state=>state.links.links)
export default navigationSlice.reducer;