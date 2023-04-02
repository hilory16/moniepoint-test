import {
  Category,
  Airplane,
  ClipboardText,
  Global,
  Coin1,
} from "iconsax-react";
import useTheme from "hooks/theme";
import QuickActionItem from "./QuickActionItem";
import { QuickActionsWrapper } from "./QuickActions.style";

export default function QuickActions() {
  const { theme } = useTheme();
  const { iconColor2, dimensions } = theme || {};

  const iconProps = {
    color: iconColor2,
    size: dimensions.iconSize,
  };

  const actions = [
    {
      text: "Category",
      icon: <Category {...iconProps} />,
    },
    {
      text: "Flight",
      icon: <Airplane {...iconProps} />,
    },
    {
      text: "Bill",
      icon: <ClipboardText {...iconProps} />,
    },
    {
      text: "Data plan",
      icon: <Global {...iconProps} />,
    },
    {
      text: "Top Up",
      icon: <Coin1 {...iconProps} />,
    },
  ];

  return (
    <QuickActionsWrapper>
      {actions.map((item) => (
        <QuickActionItem {...item} key={item.text} />
      ))}
    </QuickActionsWrapper>
  );
}
