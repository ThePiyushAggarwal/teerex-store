import { useDispatch } from 'react-redux'
import { addToCart } from '../features/products/productSlice'
import CartStatusTablet from './CartStatusTablet'

function ProductCard({ product }) {
  const dispatch = useDispatch()

  return (
    <div className='h-60 w-60 rounded-lg drop-shadow-md inline-block my-5 bg-slate-200'>
      {product.name}
      <button
        className='border-2 border-sky-500 rounded-full px-3'
        onClick={() => dispatch(addToCart({ id: product.id }))}
      >
        Add to Cart
      </button>
      <CartStatusTablet product={product} />
    </div>
  )
}
export default ProductCard
