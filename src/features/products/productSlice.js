import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, thunkAPI) => {
    try {
      return await axios
        .get(process.env.REACT_APP_TSHIRT_API)
        .then((res) => res.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    cart: [],
    error: false,
    loading: false,
  },
  reducers: {
    addToCart: (state, { payload }) => {
      state.cart.push(payload)
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(getProducts.pending)
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.loading = false
        state.products = payload
      })
      .addCase(getProducts.rejected, (state) => {
        state.loading = false
        state.error = true
      })
  },
})

export const { addToCart } = productSlice.actions

export default productSlice.reducer
