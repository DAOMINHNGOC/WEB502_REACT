import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import ProductDetailPage from './pages/ProductDetailPage'
import Dashboard from './pages/admin/Dashboard'
import AdminProductPage from './pages/admin/AdminProductPage'
import UpdateProductPage from './pages/admin/UpdateProductPage'
import AddNewProductPage from './pages/admin/AddNewProductPage'
import axios from 'axios'
import { AddProduct, getAllProduct, RemoveProduct, UpdateProduct } from './api/products'
import Signin from './pages/Auth/Signin'
import Signup from './pages/Auth/Signup'

function App() {
  const [products, setproducts] = useState([]);
  useEffect(() => {
    getAllProduct().then(({ data }) => setproducts(data.products));
  }, [])

  const onHandleRemove = (_id) => {
    RemoveProduct(_id).then(() => {
      setproducts(products.filter(item => item._id != _id));
    })
  }
  const onHandleAdd = (product) => {
    AddProduct(product).then(() => {
      setproducts([...products, product])
    });
  }

  const onHandleUpdate = (product) => {
    UpdateProduct(product).then(() => {
      setproducts(products.map(item => item._id = product._id ? product : item));
    })
  }
  const onHandleSignup = (user) => {
    axios.post("http://localhost:8080/api/signup", user).then(() => alert("Đăng ký thanfhc ong"));
  }
  const onHandleSignin = (user) => {
    console.log(1);
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<HomePage />} />
          <Route path='products'>
            <Route index element={<ProductPage products={products} onRemove={onHandleRemove} />} />
            <Route path=':id' element={<ProductDetailPage />} />
          </Route>

          <Route path='signin' element={<Signin onSignin={onHandleSignin} />} />
          <Route path='signup' element={<Signup onSignup={onHandleSignup} />} />
          {/* admin------------------------------------------------- */}
          <Route path='admin'>
            <Route index element={<Dashboard />} />
            <Route path='products' >
              <Route index element={<AdminProductPage products={products} onRemove={onHandleRemove} />} />
              <Route path='add' element={<AddNewProductPage onAdd={onHandleAdd} />} />
              <Route path=':id/update' element={< UpdateProductPage onUpdate={onHandleUpdate} products={products} />} />
            </Route>

          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
