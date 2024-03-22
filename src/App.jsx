import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import MenuList from './pages/menu/MenuList'
import ProductSearch from './components/ProductSearch'


function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/menu/:id' element={<MenuList />}/>
      <Route path='/menu/search' element={<ProductSearch />}/>
    </Routes>
  )
}

export default App
