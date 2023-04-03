import { motion } from "framer-motion";
import Banner from "components/Banner";
import Header from "components/Header";
import { AppWrapper } from "components/Wrappers";
import QuickActions from "components/QuickActions";
import ProductList from "components/ProductList";
import BottomNav from "components/BottomNav";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      // initial={{ y: 0 }}
      // animate={{ y: 0 }}
      // exit={{
      //   y: "-100vh",
      //   background: "white",
      //   opacity: 0,
      // }}
    >
      <Header />
      <Banner />
      <AppWrapper>
        <QuickActions />
      </AppWrapper>
      <ProductList />
      <BottomNav />
    </motion.div>
  );
}
