import { addToCart, removeFromCart } from '../features/products/productSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useMemo } from 'react'

function CartStatusTablet({ product }) {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.products)

  const cartValue = useMemo(() => {
    return cart?.find((item) => item.id === product.id)?.cartValue || 0
  }, [cart, product.id])

  return (
    <div className='border-2 border-sky-500 rounded-full px-3 inline'>
      <button onClick={() => dispatch(addToCart({ ...product }))}>+</button>
      <form className='inline'>
        <input
          type='number'
          value={cartValue}
          className='w-8'
          readOnly={true}
        />
      </form>
      <button onClick={() => dispatch(removeFromCart({ ...product }))}>
        -
      </button>
      {product.quantity === cartValue && 'max reached'}
    </div>
  )
}

export default CartStatusTablet
