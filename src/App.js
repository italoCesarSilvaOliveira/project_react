import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Users from './pages/Users'
import Main from './pages/Main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Users" element={<Users />} />
        <Route path='/Main' element={<Main />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
