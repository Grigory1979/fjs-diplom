import "./Header.css";
import HeaderRightColumn from "./HeaderRightColumn";

const Header = () => {
  return (
    <div className="global__header">
      <div className="shadowed_box header_left_column col">Booka</div>
      <div className="shadowed_box header_right_column col-7">
        <HeaderRightColumn />
      </div>
    </div>
  );
};

export default Header;
