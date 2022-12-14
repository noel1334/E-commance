import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import MyAccount from "./Components/MyAccount";
import { Navegation } from "./Components/Navegation";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ShoppingCart from "./Components/ShoppingCart";
import ProductDiscription from "./Components/ProductDiscription";
import CheckoutPage from "./Components/CheckoutPage";

function App() {
  return (
    <div className="max-w-[1000px] mx-auto">
      <Header />
      <Navegation />
      {/* <CheckoutPage /> */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product/:id" element={<ProductDiscription />} />
        <Route path="/shop" element={<ShoppingCart />} />
        <Route path="/auth" element={<MyAccount />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <div>
        <Footer />
      </div>
      <ToastContainer position="top-center" color="red" />
    </div>
  );
}

export default App;
