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
    // This function first checks if the cart already has the product
    // If product exists, sets the quantity if given
    // If not given, adds 1 to the present quanitity
    // If product doesn't exist, it sets quantity to 1 and adds it to cart array
    addToCart: (state, { payload }) => {
      if (state.cart.some((product) => product.id === payload.id)) {
        state.cart = state.cart.map((product) => {
          if (product.id === payload.id) {
            return {
              ...product,
              cartValue: payload.cartValue || product.cartValue + 1,
            }
          } else {
            return product
          }
        })
      } else {
        state.cart.push({ ...payload, cartValue: 1 })
      }
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

export const { addToCart, removeThisFromCart } = productSlice.actions

export default productSlice.reducer
