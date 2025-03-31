import React, { useEffect, useMemo, useState } from "react";
import classes from "./Shop.module.scss";
import Navbar from "../../components/Navbar/Navbar";
import { icons, shopImages } from "../../assets/imageKeyMapping";
import { FILTER, PRODUCTS } from "../../constants/app-constant";
import ProductCard from "../../components/ProductCard/ProductCard";

const Shop = () => {
  const defaultMinPrice = 0;
  const defaultMaxPrice = 999999;
  const [layout, setLayout] = useState("3");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  useEffect(() => {
    if (selectedFilters?.length) {
      let min = null;
      let max = null;
      selectedFilters.forEach((sf) => {
        min = min !== null ? Math.min(min, sf.min) : sf.min;
        max = max !== null ? Math.max(max, sf.max) : sf.max;
      });
      setMinPrice(min);
      setMaxPrice(max);
    } else {
      setDefaultMinAndMaxPrices();
    }
  }, [selectedFilters]);

  const setDefaultMinAndMaxPrices = () => {
    setMinPrice(defaultMinPrice);
    setMaxPrice(defaultMaxPrice);
  };

  const handleFilterSelection = (option) => {
    let arr = [...selectedFilters];
    if (arr?.findIndex((i) => i?._id === option?._id) === -1) {
      arr.push(option);
    } else {
      arr = arr.filter((a) => a?._id !== option?._id);
    }
    setSelectedFilters(arr);
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(
      (product) =>
        minPrice !== null &&
        maxPrice !== null &&
        product?.price >= minPrice &&
        product?.price <= maxPrice
    );
  }, [PRODUCTS, minPrice, maxPrice]);

  const handleResetFilter = () => {
    setSelectedFilters([]);
    setDefaultMinAndMaxPrices();
  };

  return (
    <React.Fragment>
      {/* <Navbar></Navbar> */}
      <div className={classes?.shop_page}>
        <div className={classes?.hero_image_wrapper}>
          <img src={shopImages?.shopHeroImage} alt="hero image" />
          <div className={classes?.overlay_container}>
            <div className={classes?.pagetitle}>Shop Page</div>
            <div className={classes?.subtext}>
              Let’s design the place you always imagined.
            </div>
          </div>
        </div>
        <div className={classes?.content_container}>
          <div className={classes?.filter_container}>
            <div className={classes?.title}>
              <img
                src={icons?.filterIcon}
                className={classes?.filter_icon}
                alt="filter icon"
              />{" "}
              Filter
            </div>
            {FILTER?.map((items) => (
              <div className={classes?.category} key={items?._id}>
                <div className={classes?.name}>{items?.type}</div>
                <div className={classes?.resetCTA} onClick={handleResetFilter}>
                  Reset
                </div>
                {items?.options?.map((opt) => (
                  <div
                    className={classes?.options_wrapper}
                    key={opt?._id}
                    onClick={() => handleFilterSelection(opt)}
                  >
                    <div className={classes?.option_text}>{opt?.text}</div>
                    <div
                      className={`${classes?.option_checkbox} ${
                        selectedFilters?.findIndex(
                          (o) => o?._id === opt?._id
                        ) !== -1
                          ? classes?.selected
                          : ""
                      }`}
                    >
                      <img src={icons?.whiteCheck} alt="checked icon" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className={classes?.products_wrapper}>
            <div className={classes?.layout_container}>
              <div
                className={`${classes?.icons_wrapper} ${
                  layout === "3" && classes?.active
                }`}
                onClick={() => setLayout("3")}
              >
                <img
                  src={icons?.gridIcon3x3}
                  alt="3x3 grid"
                  className={classes?.icon}
                />
              </div>
              <div
                className={`${classes?.icons_wrapper} ${
                  layout === "2" && classes?.active
                }`}
                onClick={() => setLayout("2")}
              >
                <img
                  src={icons?.gridIcon2x2}
                  alt="2x2 grid"
                  className={classes?.icon}
                />
              </div>
              <div
                className={`${classes?.icons_wrapper} ${
                  layout === "1" && classes?.active
                }`}
                onClick={() => setLayout("1")}
              >
                <img
                  src={icons?.gridIcon1x2}
                  alt="1x2 grid"
                  className={classes?.icon}
                />
              </div>
            </div>
            <div
              className={`${classes?.products_grid} ${
                classes[`products_grid_${layout}`]
              }`}
            >
              {filteredProducts?.map(
                (product) =>
                  minPrice !== null &&
                  maxPrice !== null &&
                  product?.price >= minPrice &&
                  product?.price <= maxPrice && (
                    <div
                      className={classes?.product_container}
                      key={product?._id}
                    >
                      <ProductCard product={product} />
                    </div>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Shop;
