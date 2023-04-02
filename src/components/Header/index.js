import { useState } from "react";
import { SearchNormal1, Bag2, MessageText } from "iconsax-react";
import Badge from "components/Badge";
import useTheme from "hooks/theme";
import { AppWrapper } from "components/Wrappers";
import { HeaderWrapper } from "./Header.style";

export default function Header() {
  const [search, setSearch] = useState();
  const { theme } = useTheme();
  const { iconColor1, iconColor2, dimensions } = theme || {};
  return (
    <HeaderWrapper>
      <AppWrapper>
        <div className="header-content">
          <div className="search-input">
            <SearchNormal1 size={dimensions.iconSize} color={iconColor1} />
            <input
              type="text"
              value={search}
              setSearch={({ target: { value } }) => setSearch(value)}
              placeholder="Search..."
            />
          </div>

          <div className="header-actions-container">
            <div className="header-actions-icon icon-1">
              <Bag2 size={dimensions.iconMediumSize} color={iconColor2} />
              <Badge value="1" />
            </div>
            <div className="header-actions-icon icon-2">
              <MessageText
                size={dimensions.iconMediumSize}
                color={iconColor2}
                variant="Outline"
              />
              <Badge value="9+" />
            </div>
          </div>
        </div>
      </AppWrapper>
    </HeaderWrapper>
  );
}
