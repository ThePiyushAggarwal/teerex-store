import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<ProductDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
