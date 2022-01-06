import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { quantity } = useSelector((state) => state);

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <Link to="/" className="link">
          <div className="navbar-logo">
            <p className="navbar-logo-item">eStore</p>
          </div>
        </Link>
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
        <div className="navbar-search-container">
          <input
            type="text"
            className="navbar-search-input"
            placeholder="Search"
          />
          <SearchIcon className="navbar-search-icon" />
        </div>
        <div className="navbar-right-menu">
          <div className="navbar-right-menu-item">
            <PermIdentityOutlinedIcon className="navbar-right-menu-icons" />
            <p className="navbar-right-menu-item">Profile</p>
          </div>
          <div className="navbar-right-menu-item">
            <FavoriteBorderOutlinedIcon className="navbar-right-menu-icons" />
            <p className="navbar-right-menu-item">Wishlist</p>
          </div>
          <Link to="/cart/1" className="link">
            <div className="navbar-right-menu-item">
              <Badge badgeContent={quantity} color="primary">
                <ShoppingBagOutlinedIcon className="navbar-right-menu-icons" />
              </Badge>
              <p className="navbar-right-menu-item">Bag</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
