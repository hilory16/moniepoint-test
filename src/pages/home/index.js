import Banner from "components/Banner";
import Header from "components/Header";
import { AppWrapper } from "components/Wrappers";
import QuickActions from "components/QuickActions";
import ProductList from "components/ProductList";
import BottomNav from "components/BottomNav";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <AppWrapper>
        <QuickActions />
      </AppWrapper>
      <ProductList />
      <BottomNav />
    </div>
  );
}
