import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const POST_URL = 'http://localhost:5000/ngo'

const initialState = {
  ngoData: {},
  allChild: true,
  status: 'idle',
  error: null,
}

export const fetchNgo = createAsyncThunk('ngo/fetchNgo', async () => {
  const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` }
  const responce = await axios.get(POST_URL, { headers })

  return responce.data
})

const ngoSlice = createSlice({
  name: 'ngo',
  initialState,
  reducers: {
    ngoAdded: {
      reducer(state, action) {
        state.ngoData = action.payload
      },
      prepare(name, address, isVerified, state, district) {
        return {
          payload: {
            name,
            address,
            isVerified,
            state,
            district,
          },
        }
      },
    },
  },

  extraReducers(builder) {
    builder
      .addCase(fetchNgo.pending, (state, action) => {
        state.status = 'Loading'
      })
      .addCase(fetchNgo.fulfilled, (state, action) => {
        state.status = 'Succeeded'
        state.ngoData = action.payload
      })
      .addCase(fetchNgo.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export const selectAllNgo = (state) => state.ngo.ngoData
export const getNgoStatus = (state) => state.ngo.status
export const getNgoError = (state) => state.ngo.error
export const getNgoAllChild = (state) => state.ngo.allChild

// export const selectNgoById = (state, userId) => {
//   return state.ngo.ngoData.find((id) => id._id === userId)
// }

// export const selectNgoByUserId = (state, userId) => {
//   return state.ngo.ngoData.find((person) => person.user === userId)
// }

export default ngoSlice.reducer
