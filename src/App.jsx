import AuthForm from "./kwaan_components/AuthForm";
import HomePage from "./kwaan_components/HomePage";
import Navbar from "./kwaan_components/Navbar";
import NewArrivalSection from "./kwaan_components/New_Arrivals/NewArrivalSection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/authentication" element={<AuthForm />} />
          <Route path="/new_arrival" element={<NewArrivalSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
