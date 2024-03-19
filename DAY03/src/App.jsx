import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import LoginRegister from "./pages/LoginRegister";
import { useEffect } from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import Profile from "./pages/user/Profile";
import User from "./pages/user/User";
import ApplyLoans from "./components/loans/ApplyLoans";
import { LoanTypes } from "./components/loans/LoanTypes";
import Calculator from "./pages/Calculator";
import TrackLoans from "./components/loans/TrackLoans";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Faq from "./pages/Faq";
import Dashboard from "./pages/user/Dashboard";
import AdminDashboard from "./pages/admin/AdminDashBoard";

const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const location = useLocation();
  const isAdmin = () => {
    return location.pathname.startsWith("/admin");
  };

  return (
    <>
      <ScrollTop />
      {!isAdmin() && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign" element={<LoginRegister />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/apply" element={<ApplyLoans />} />
        <Route path="/loan" element={<LoanTypes />} />
        <Route path="/user" element={<User />} />
        <Route path="/loans" element={<Calculator />} />
        <Route path="/trackloans" element={<TrackLoans />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      {!isAdmin() && <Footer />}
    </>
  );
}

export default App;
