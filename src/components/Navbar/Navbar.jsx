import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { quantity } = useSelector((state) => state);

  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        {/* drop down for mobile only */}
        {/* ------------------------- */}
        <div className="responsive-categories">
          <MenuIcon
            className="responsive-categories-icon"
            onClick={() => handleClick()}
          />

          {showDropdown && (
            <div className="dropdown-menu">
              <Link
                to="/product/electronics"
                className="link"
                onClick={() => handleClick()}
              >
                <div className="dropdown-menu-items">Electronics</div>
              </Link>
              <hr />
              <Link
                to="/product/jewelery"
                className="link"
                onClick={() => handleClick()}
              >
                <div className="dropdown-menu-items">Jewelery</div>
              </Link>
              <hr />
              <Link
                to="/product/men"
                className="link"
                onClick={() => handleClick()}
              >
                <div className="dropdown-menu-items">Men's Clothing</div>
              </Link>
              <hr />
              <Link
                to="/product/women"
                className="link"
                onClick={() => handleClick()}
              >
                <div className="dropdown-menu-items">Women's Clothing</div>
              </Link>
            </div>
          )}
        </div>
        <div className="navbar-left-menu">
          <Link to="/product/electronics" className="link">
            <p className="navbar-menu-item">Electronics</p>
          </Link>
          <Link to="/product/jewelery" className="link">
            <p className="navbar-menu-item">Jewelery</p>
          </Link>
          <Link to="/product/men" className="link">
            <p className="navbar-menu-item">Men's Clothing</p>
          </Link>
          <Link to="/product/women" className="link">
            <p className="navbar-menu-item">Women's Clothing</p>
          </Link>
        </div>
        <Link to="/" className="link">
          <div className="navbar-logo">
            <p className="navbar-logo-item">eStore</p>
          </div>
        </Link>
        <div className="navbar-search-container">
          <input
            type="text"
            className="navbar-search-input"
            placeholder="Search"
          />
          <SearchIcon className="navbar-search-icon" />
        </div>
        <div className="navbar-right-menu">
          <div className="navbar-right-menu-item" id="hidden-responsive">
            <PermIdentityOutlinedIcon className="navbar-right-menu-icons" />
            <p className="navbar-right-menu-item">Profile</p>
          </div>
          <div className="navbar-right-menu-item" id="hidden-responsive">
            <FavoriteBorderOutlinedIcon className="navbar-right-menu-icons" />
            <p className="navbar-right-menu-item">Wishlist</p>
          </div>
          <Link to="/cart/1" className="link">
            <div className="navbar-right-menu-item">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartIcon className="navbar-right-menu-icons" />
              </Badge>
              <p className="navbar-right-menu-item">Cart</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
