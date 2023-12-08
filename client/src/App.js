import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from './page/MainPage';
import FoodDetels from "./page/FoodDetels";

import NavBar from "./components/utilt/NavBar";
import MenuPage from "./page/MenuPage";
import CartScreen from "./page/CartPage";
import SingUp from './page/SingUp';
import SingIn from "./page/SingIn";
import SopningScreen from "./page/SopningPage";
import PaymentMethod from "./page/PaymentMethod";
import PlaceOrderScreen from "./page/PlaceOrderScreen";
import OrderScreen from "./page/OrderSecreen";
import OrderHistoryScreen from "./page/OrderHistoryScreen";
import ProfileScreen from "./page/ProfileScreen";
import SearchPage from "./page/SearchPage";

 
function App() {
  return (
    <main className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/menu/:slug" element={<FoodDetels />} />
          <Route path="/shopping" element={<CartScreen />} />
          <Route path="/shipping" element={<SopningScreen />} />
          <Route path="/payment" element={<PaymentMethod />} />
          <Route path="/placeorder" element={<PlaceOrderScreen />} />
          <Route path="/singUp" element={<SingUp />} />
          <Route path="/signin" element={<SingIn />} />
          <Route path="/order/:id"element={ <OrderScreen /> }/>
          <Route path="/orderhistory"element={ <OrderHistoryScreen />}/>
          <Route path="/profile"element={ <ProfileScreen />}/>
          <Route path="/search" element={<SearchPage/>} /> 


        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
