import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from 'src/store'

interface Produit {
  id: number
  nom: string
  stock: number
  prix: number
}

const initialState = {
  data: [
    {
      id: 1,
      nom: 'Produit mzenzen',
      stock: 0,
      prix: 0
    },
    {
      id: 2,
      nom: 'produit taha',
      stock: 0,
      prix: 0
    }
  ],
  isLoading: false,
  isSuccess: true
}

export const deleteProduct = createAsyncThunk('produits/delete', async (_, thunkApi) => {
  const { produits } = thunkApi.getState() as RootState

  return thunkApi.fulfillWithValue(produits.data.filter(prdt => prdt.id !== 1))
})

export const ajouterProduct = createAsyncThunk('/produits/add', async (_, thunkApi) => {
  const { produits } = thunkApi.getState() as RootState
  return thunkApi.fulfillWithValue([...produits.data, { id: 5, nom: 'Produit mzenzen', stock: 0, prix: 0 }])
})

const produits = createSlice({
  initialState,
  name: 'produits',
  reducers: {},
  extraReducers(builder) {
    builder.addCase(deleteProduct.pending, (state, action) => {
      state.isLoading = true
    })
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.data = action.payload
    })
    builder.addCase(ajouterProduct.fulfilled, (state, action) => {
      state.data = action.payload
    })
  }
})
export default produits.reducer
