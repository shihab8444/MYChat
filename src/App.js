import Register from './pages/register'
import Login from './pages/login'
import Home from './pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.scss'
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
