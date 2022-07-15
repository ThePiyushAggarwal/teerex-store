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
      if (state.cart.some((product) => product.id === payload.id)) {
        state.cart = state.cart.map((product) => {
          if (product.id === payload.id) {
            return {
              ...product,
              cartValue:
                product.quantity <= product.cartValue
                  ? product.quantity
                  : product.cartValue + 1 || 1,
            }
          } else {
            return product
          }
        })
      } else {
        state.cart.push({ ...payload, cartValue: payload.quantity !== 0 && 1 })
      }
    },
    removeFromCart: (state, { payload }) => {
      if (state.cart.some((product) => product.id === payload.id)) {
        state.cart = state.cart.map((product) => {
          if (product.id === payload.id) {
            return {
              ...product,
              cartValue: product.cartValue <= 0 ? 0 : product.cartValue - 1,
            }
          } else {
            return product
          }
        })
      }
    },
  },
  extraReducers: (builder) => {
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

export const { addToCart, removeFromCart } = productSlice.actions

export default productSlice.reducer
