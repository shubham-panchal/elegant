import React, { useEffect, useMemo, useState } from "react";
import classes from "./Navbar.module.scss";
import { icons } from "../../assets/imageKeyMapping";
import Cart from "../Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { CartActions } from "../../actions/CartActions";

const Navbar = () => {
  const [totalCartItems, setTotalCartItems] = useState(0);
  const cart = useSelector((store) => store?.cart?.cart);
  const showCart = useSelector((store) => store?.cart?.openCart);
  const navigate = useNavigate();
  const location = useLocation();
  const [currentPage, setCurrentPage] = useState(
    location?.pathname?.split("/")[1]
  );
  const dispatch = useDispatch();

  useMemo(() => {
    setCurrentPage(location?.pathname?.split("/")[1]);
  }, [location?.pathname]);

  useEffect(() => {
    setTotalCartItems(cart?.length);
  }, [cart]);

  const toggleCart = () => {
    dispatch(CartActions?.toggleCart());
  };

  const handleNavlinksNavigation = (link) => {
    setCurrentPage(link);
    let route = "/home";
    switch (link) {
      case "shop":
        route = "/shop";
        break;
      case "account":
        route = "/account";
        break;
      default:
        route = "/home";
    }
    navigate(route);
  };
  return (
    <>
      <div className={classes?.navbar_container}>
        <img
          src={icons?.logo}
          className={classes?.brand_logo}
          alt="brand logo"
          onClick={() => handleNavlinksNavigation("home")}
        />
        <div className={classes?.navlink_wrapper}>
          <div
            className={`${classes?.navlink} ${
              currentPage === "home" ? classes?.active : ""
            }`}
            onClick={() => handleNavlinksNavigation("home")}
          >
            Home
          </div>
          <div
            className={`${classes?.navlink} ${
              currentPage === "shop" ? classes?.active : ""
            }`}
            onClick={() => handleNavlinksNavigation("shop")}
          >
            Shop
          </div>
          {/* <div className={classes?.navlink}>Product</div>
          <div className={classes?.navlink}>Contact Us</div> */}
        </div>
        <div className={classes?.navicons_wrapper}>
          {/* <div className={classes?.navicon}>
            <img
              src={icons?.searchIcon}
              className={classes?.icon}
              alt="search icon"
            />
          </div> */}
          <div
            className={classes?.navicon}
            onClick={() => handleNavlinksNavigation("account")}
          >
            <img
              src={icons?.userIcon}
              className={classes?.icon}
              alt="user icon"
            />
          </div>
          <div className={classes?.navicon} onClick={toggleCart}>
            <img
              src={icons?.shoppingBagIcon}
              className={classes?.icon}
              alt="shopping cart"
            />
            {totalCartItems > 0 && (
              <div className={classes?.total_bag_items}>{totalCartItems}</div>
            )}
          </div>
        </div>
      </div>
      {showCart && (
        <div className={classes?.cart_container}>
          <Cart onClose={toggleCart} />
        </div>
      )}
    </>
  );
};

export default Navbar;
