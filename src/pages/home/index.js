import Banner from "components/Banner";
import Header from "components/Header";
import { AppWrapper } from "components/Wrappers";
import QuickActions from "components/QuickActions";
import ProductList from "components/ProductList";
import BottomNav from "components/BottomNav";
import useTheme from "hooks/theme";

export default function Home() {
  const { switchTheme } = useTheme();
  return (
    <div>
      {/* <p onClick={() => switchTheme("dark")}>Change</p> */}
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
