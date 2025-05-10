import CartPage from "@/components/cart/CartPage";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Login from "@/pages/authentication/Login";
import Signup from "@/pages/authentication/Signup";
import HomePage from "@/pages/landingPage/HomePage";
import NewArrivalSection from "@/pages/New_Arrivals/NewArrivalSection";
import PopularProductSection from "@/pages/popularProducts/PopularProductSection";
import SelectedProduct from "@/pages/selectedItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/new_arrival" element={<NewArrivalSection />} />
          <Route path="/popular_products" element={<PopularProductSection />} />
          <Route path="/product/:productId" element={<SelectedProduct />} />
          <Route path="/cartpage" element={<CartPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
