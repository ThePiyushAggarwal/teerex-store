import { useSelector } from 'react-redux'

function Navbar() {
  const { cart } = useSelector((state) => state.products)

  const totalCartValue = cart?.reduce((sum, order) => {
    return sum + order.cartValue
  }, 0)

  return (
    <>
      <div className='h-1/6 bg-orange-400 font-logo text-white text-7xl drop-shadow-md'>
        TeeRex Cart Value: {totalCartValue || 0}
      </div>
    </>
  )
}
export default Navbar
