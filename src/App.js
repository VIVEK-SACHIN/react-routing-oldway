import './App.css';
import {Routes,Route} from 'react-router-dom';
import Navbar from './navbar/navbar';
import Home from './pages/home';
import About from './pages/about';
import Something from './pages/something';
function App() {
  return (
    <div className="App">
      <header><Navbar></Navbar></header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/something' element={<Something></Something>}></Route>
      </Routes>
    </div>
  );
}

export default App;
