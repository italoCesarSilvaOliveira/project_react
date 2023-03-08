import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Users from './pages/Users'
import Main from './pages/Main'
import Win from './pages/Win'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/Users" element={<Users />} />
        <Route path='/Main' element={<Main />} />
        <Route path='/Win' element={<Win />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
