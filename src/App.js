import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
        <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/inventorydetails" element={<InventoryDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </div>
  );
}

export default App;
