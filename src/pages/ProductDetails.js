import { useEffect } from 'react'
import { getProducts } from '../features/products/productSlice'
import { useSelector, useDispatch } from 'react-redux'
import ProductCard from '../components/ProductCard'

function ProductDetails() {
  const dispatch = useDispatch()
  const { products, loading, error } = useSelector((state) => state.products)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  if (loading) {
    return <p>loading</p>
  }

  if (error) {
    return <p>error</p>
  }

  return (
    <div className='h-full'>
      <div>Products</div>
      <div className='h-full flex flex-wrap justify-around'>
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
export default ProductDetails
