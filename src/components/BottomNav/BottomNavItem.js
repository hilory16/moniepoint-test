import { object, string } from "prop-types";
import { BottomNavItemWrapper } from "./BottomNav.style";

export default function BottomNavItem({ icon, text }) {
  return (
    <BottomNavItemWrapper>
      <div className="bottom-nav-icon">{icon}</div>
      <p className="menu-text">{text}</p>
    </BottomNavItemWrapper>
  );
}

BottomNavItem.propTypes = {
  icon: object,
  text: string,
};
