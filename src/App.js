import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddInventory from './Pages/AddInventory/AddInventory';
import Blog from './Pages/Blog/Blog';
import Home from './Pages/Home/Home/Home';
import InventoryDetails from './Pages/InventoryDetails/InventoryDetails';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import MannageInventory from './Pages/MannageInventory/MannageInventory';
import MyInventory from './Pages/MyInventory/MyInventory';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
        <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/inventory/:Id" element={ <RequireAuth>
        <InventoryDetails/>
      </RequireAuth>} />
      <Route path="/mannageinventory" element={<RequireAuth>
        <MannageInventory />
      </RequireAuth>} />
      <Route path="/addinventory" element={<RequireAuth>
        <AddInventory />
      </RequireAuth>} />
      <Route path="/myinventory" element={<RequireAuth>
        <MyInventory/>
      </RequireAuth>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
