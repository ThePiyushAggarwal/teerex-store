import { useSelector } from 'react-redux'

function Navbar() {
  const { cart } = useSelector((state) => state.products)

  return (
    <>
      <div className='h-1/6 bg-orange-400 font-logo text-white text-7xl drop-shadow-md'>
        TeeRex Cart Value: {cart?.length}
      </div>
    </>
  )
}
export default Navbar
