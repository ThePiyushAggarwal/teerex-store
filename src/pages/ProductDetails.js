import { useEffect } from 'react'
import { getProducts } from '../features/products/productSlice'
import { useSelector, useDispatch } from 'react-redux'

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
    <div>
      ProductDetails
      {products?.map((x) => (
        <p key={x.id}>{x.name}</p>
      ))}
    </div>
  )
}
export default ProductDetails
