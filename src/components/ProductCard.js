import { useDispatch } from 'react-redux'

function ProductCard({ product, addToCart }) {
  const dispatch = useDispatch()

  return (
    <div className='h-60 w-60 rounded-lg drop-shadow-md inline-block my-5 bg-slate-200'>
      {product.name}
      <button
        className='border-2 border-sky-500'
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </div>
  )
}
export default ProductCard
