import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Main from './pages/Main'

function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Main' element={<Main />}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
