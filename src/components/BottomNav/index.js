import { Home, Wallet3, Setting, Ticket } from "iconsax-react";
import { AppWrapper } from "components/Wrappers";
import useTheme from "hooks/theme";
import BottomNavItem from "./BottomNavItem";
import { BottomNavWrapper } from "./BottomNav.style";

export default function BottomNav() {
  const { theme } = useTheme();

  const iconProps = {
    size: theme.iconMediumSize,
    color: theme.iconSix,
  };

  const menuOptions = [
    {
      icon: <Home {...iconProps} />,
      text: "Home",
    },
    {
      icon: <Ticket {...iconProps} variant="Outline" />,
      text: "Voucher",
    },
    {
      icon: <Wallet3 {...iconProps} />,
      text: "Wallet",
    },
    {
      icon: <Setting {...iconProps} />,
      text: "Settings",
    },
  ];
  return (
    <BottomNavWrapper>
      <AppWrapper>
        <div className="bottom-nav-content">
          {menuOptions.map((item) => (
            <BottomNavItem {...item} key={item.text} />
          ))}
        </div>
      </AppWrapper>
    </BottomNavWrapper>
  );
}
