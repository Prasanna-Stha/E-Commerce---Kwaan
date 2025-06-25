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
import { NAVIGATION_ROUTES } from "./routes.constant";
import Admin from "@/admin";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path={NAVIGATION_ROUTES.PRODUCT_LIST} element={<HomePage />} />
          <Route path={NAVIGATION_ROUTES.LOGIN} element={<Login />} />
          <Route path={NAVIGATION_ROUTES.SIGNUP} element={<Signup />} />
          <Route path={NAVIGATION_ROUTES.NEW_ARRIVAL} element={<NewArrivalSection />} />
          <Route path={NAVIGATION_ROUTES.POPOULAR_PRODUCT} element={<PopularProductSection />} />
          <Route path={NAVIGATION_ROUTES.SELECTED_PRODUCT} element={<SelectedProduct />} />
          <Route path={NAVIGATION_ROUTES.CART_PAGE} element={<CartPage />} />
          <Route path={NAVIGATION_ROUTES.ADMIN_DASHBOARD} element={<Admin />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRoutes;
