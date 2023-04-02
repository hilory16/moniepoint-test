import { ReactComponent as HomeIcon } from "assets/icons/home.svg";
import { ReactComponent as VoucherIcon } from "assets/icons/voucher.svg";
import { ReactComponent as WalletIcon } from "assets/icons/wallet.svg";
import { ReactComponent as SettingIcon } from "assets/icons/setting.svg";

import { AppWrapper } from "components/Wrappers";
import useTheme from "hooks/theme";
import BottomNavItem from "./BottomNavItem";
import { BottomNavWrapper } from "./BottomNav.style";

export default function BottomNav() {
  const { theme } = useTheme();

  const iconProps = {
    size: theme.iconMediumSize,
    color: theme.grey1,
  };

  const menuOptions = [
    {
      icon: <HomeIcon {...iconProps} />,
      text: "Home",
      active: true,
    },
    {
      icon: <VoucherIcon {...iconProps} variant="Outline" />,
      text: "Voucher",
      active: false,
    },
    {
      icon: <WalletIcon {...iconProps} />,
      text: "Wallet",
      active: false,
    },
    {
      icon: <SettingIcon {...iconProps} />,
      text: "Settings",
      active: false,
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
