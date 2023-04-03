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
      initial={{
        opacity: 0,
        y: "100px",
        transition: { duration: 0.5, delay: 0.5 },
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.5 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
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
