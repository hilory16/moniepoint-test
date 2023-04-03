import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatedPresence } from "framer-motion";
import Home from "pages/Home";
import Product from "pages/Product";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatedPresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </AnimatedPresence>
  );
}
