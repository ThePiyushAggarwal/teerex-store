import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/products/productSlice'
import CartStatusTablet from './CartStatusTablet'

function ProductCard({ product }) {
  const dispatch = useDispatch()
  const [hideButton, setHideButton] = useState(false)
  const outOfStock = product.quantity !== 0

  return (
    <div className='h-60 w-60 rounded-lg drop-shadow-md inline-block my-5 bg-slate-200'>
      {product.name}
      {outOfStock &&
        (!hideButton ? (
          <button
            className='border-2 border-sky-500 rounded-full px-3'
            onClick={() => {
              dispatch(addToCart({ ...product }))
              setHideButton(true)
            }}
          >
            Add to Cart
          </button>
        ) : (
          <CartStatusTablet product={product} />
        ))}
    </div>
  )
}
export default ProductCard
