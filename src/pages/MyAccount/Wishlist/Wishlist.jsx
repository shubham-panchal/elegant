import React from "react";
import classes from "./Wishlist.module.scss";
import { icons, productImages } from "../../../assets/imageKeyMapping";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlistArray = useSelector((store) => store?.wishlist);

  const handleRemoveFromWishlist = (product) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product });
  };

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className={classes?.wishlist_component}>
      <div className={classes?.page_title}>Your Wishlist</div>
      {wishlistArray?.length > 0 && (
        <div className={classes?.container}>
          <table className={classes?.table}>
            <thead className={classes?.thead}>
              <tr>
                <th className={classes?.theading}>Product</th>
                <th className={classes?.theading}>Price</th>
                <th className={classes?.theading}>Action</th>
              </tr>
            </thead>
            <tbody className={classes?.tbody}>
              {wishlistArray?.map((item) => (
                <tr key={item?._id}>
                  <td>
                    <div className={classes?.product_block}>
                      <img
                        src={icons?.greyCrossIcon}
                        alt="cross"
                        className={classes?.cross_icon}
                        onClick={() => handleRemoveFromWishlist(item)}
                      />
                      <img
                        src={item?.imgURL}
                        alt="product"
                        className={classes?.product_img}
                      />
                      <div className={classes?.product_details}>
                        <div className={classes?.product_name}>
                          {item?.product_name}
                        </div>
                        <div className={classes?.product_color}>
                          Color: {item?.color}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>$ {item?.price}</td>
                  <td>
                    <div
                      className={classes?.add_cta}
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to cart
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
