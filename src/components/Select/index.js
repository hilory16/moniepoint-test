import PropTypes from "prop-types";
import { SelectWrapper } from "./Select.style";

export default function Select() {
  return (
    <SelectWrapper>
      <select>
        <option>Popular</option>
        <option>Others</option>
      </select>
    </SelectWrapper>
  );
}
