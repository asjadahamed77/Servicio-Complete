import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import AddService from "./pages/AddService";
import BrowseServices from "./pages/BrowseServices";
import AllServices from "./pages/AllServices";
import ProviderProfile from "./pages/ProviderProfile";
import { useEffect } from "react";
import MyProviders from "./pages/MyProviders";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import HelpPage from "./pages/HelpPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <div className=" text-mainColor ">
     <BrowserRouter>
     <ToastContainer position='top-center' autoClose={1000} draggable    />
     <Navbar />
     <div className="px-4 sm:px-[10%] bg-gray-50">
     <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/my-profile" element={<Profile />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/add-service" element={<AddService />} />
      <Route path="/all-services" element={<AllServices />} />
      <Route path="/my-providers" element={<MyProviders />} />
      <Route path="/browse-services" element={<BrowseServices />} />
      <Route path="/browse-services/:category" element={<BrowseServices />} />
      <Route path="/:providerId" element={<ProviderProfile />} />
     </Routes>
     </div>
     <Footer />
     </BrowserRouter>
    </div>
  );
}

export default App;
