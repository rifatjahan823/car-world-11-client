import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddInventory from './Pages/AddInventory/AddInventory';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import MannageInventory from './Pages/MannageInventory/MannageInventory';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div>
        <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/inventory/:Id" element={<InventoryDetails/>} />
      <Route path="/mannageinventory" element={<MannageInventory />} />
      <Route path="/addinventory" element={<AddInventory />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    </div>
  );
}

export default App;
