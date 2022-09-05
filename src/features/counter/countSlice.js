import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const sleep = ms => new Promise( r => setTimeout(r,ms) )

export const incrementDelayedThunk = createAsyncThunk('posts/incrementDelayed', async()=>{ 
  await sleep(2000) 
  return 1
})
export const decrementDelayedThunk = createAsyncThunk('posts/decrementDelayed', async()=>{
  await sleep(2000)
  return -1
})


const initialState = { 
  count:0,
  status: null
}

const countSlice = createSlice( {
  name: 'counter', 
  initialState, 
  reducers:{
    increment: state => ({...state,count: state.count+1}),
    decrement: state => ({...state, count: state.count-1})
  },
  extraReducers:{
    [incrementDelayedThunk.pending]: state => {state.status='loading'},
    [incrementDelayedThunk.fulfilled]: (state, {payload}) => { state.status='success'; state.count= state.count +payload },
    [incrementDelayedThunk.rejected]: state => state.status='failed',
    [decrementDelayedThunk.pending]: state => {state.status='loading'},
    [decrementDelayedThunk.fulfilled]: (state, {payload}) => { state.status='success'; state.count= state.count +payload },
    [decrementDelayedThunk.rejected]: state => state.status='failed'
  }
},
)


export const { increment, decrement } = countSlice.actions;
export default countSlice.reducer;


