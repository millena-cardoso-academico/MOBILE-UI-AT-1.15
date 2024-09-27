import PropTypes from "prop-types";
import "../styles/Header.css";
import MenuItems from "./MenuItems.jsx";

function Header({ sections }) {
  return (
    <header className="header-container">
      <h1 className="title">CrochetFriends</h1>
      <MenuItems sections={sections} />
    </header>
  );
}

Header.propTypes = {
  sections: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;