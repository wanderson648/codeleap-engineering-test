import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'user',
  initialState: {
    username: ''
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload
    }
  }
})

export const { setUsername } = slice.actions
export default slice.reducer
