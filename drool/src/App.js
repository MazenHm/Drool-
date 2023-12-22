import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Checkout from "./pages/Checkouts";
import AuthProvider from "./context/auth/authProvider";
import CartProvider from "./context/cart/cartProvider";
import ProductDetails from "./modules/ProductDetails";

// import Checkouts from "./pages/Checkouts";

function Routers() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/checkouts" element={<Checkout />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Routers />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
