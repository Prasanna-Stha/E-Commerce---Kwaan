import Login from "./kwaan_components/authentication/Login";
import Signup from "./kwaan_components/authentication/Signup";
import HomePage from "./kwaan_components/landingPage/HomePage";
import Navbar from "./kwaan_components/commonComponents/Navbar";
import Footer from "./kwaan_components/commonComponents/Footer";
import NewArrivalSection from "./kwaan_components/New_Arrivals/NewArrivalSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PopularProductSection from "./kwaan_components/popularProducts/PopularProductSection";
import SelectedProduct from "./kwaan_components/selectedItem/SelectedProduct";

import { ContextProvider } from "./context/Context";
import CartPage from "./kwaan_components/cart/CartPage";

const App = () => {
  return (
    <>
      <ContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/new_arrival" element={<NewArrivalSection />} />
            <Route path="/popular_products" element={<PopularProductSection />} />
            <Route path="/:productName/:productId" element={<SelectedProduct />} />
            <Route path="/cartpage" element={<CartPage />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </ContextProvider>
    </>
  );
}

export default App
