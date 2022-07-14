import { addToCart } from '../features/products/productSlice'
import { useSelector, useDispatch } from 'react-redux'

function CartStatusTablet({ product }) {
  const dispatch = useDispatch()
  const { cart } = useSelector((state) => state.products)

  const cartValueForThis =
    cart?.find((item) => item.id === product.id)?.cartValue || 0

  const onChange = (e) => {
    const cartValue =
      e.target.value >= product.quantity ? product.quantity : e.target.value

    dispatch(addToCart({ ...product, cartValue }))
  }

  return (
    <div className='border-2 border-sky-500 rounded-full px-3'>
      <button>+</button>
      <input type='number' value={cartValueForThis} onChange={onChange} />
      <button>-</button>
    </div>
  )
}
export default CartStatusTablet
