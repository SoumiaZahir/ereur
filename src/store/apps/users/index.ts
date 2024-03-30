import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { Utilisateur } from 'src/views/agenda/TableStickyHeader'

const initialState: Utilisateur[] = [
  {
    email: '',
    nom: '',
    prenom: '',
    telephone: ''
  },
  {
    email: '',
    nom: '',
    prenom: '',
    telephone: ''
  }
]

const getUsers = createAsyncThunk('users/get', async (_, thunkAPI) => {
  return null
})

export const deleteUser = createAsyncThunk('users/delete', async (id: number, thunkAPI) => {
  if (true) {
    return thunkAPI.fulfillWithValue(id)
  } else {
    return thunkAPI.rejectWithValue(id)
  }
})

const usersSlice = createSlice({
  initialState,
  name: 'users',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(deleteUser.pending, (state, action) => {
      console.log('Pending user deleting')
      console.log(action.payload)
    })
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      console.log('Pending user fulfilled')
      console.log(action)
    })
    builder.addCase(deleteUser.rejected, (state, action) => {
      console.log('Pending user rejected')
      console.log(action)
    })
  }
})

export default usersSlice.reducer
