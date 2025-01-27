import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Main from "./pages/main/Main";
import { Navigation } from "./Components/navigation/Navigation";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShoppingCart from "./pages/shoppingCart/ShoppingCart";
import ProductDescription from "./pages/product/ProductDescription";
import Checkout from "./pages/checkout/Checkout";
import MyAccount from "./pages/myaccount/MyAccount";

function App() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<ProductDescription />} />
        <Route path="/shop" element={<ShoppingCart />} />
        <Route path="/auth" element={<MyAccount />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <div>
        <Footer />
      </div>
      <ToastContainer position="top-center" color="red" />
    </div>
  );
}

export default App;
