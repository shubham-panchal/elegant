import React from "react";
import classes from "./Home.module.scss";
import HomeCarousel from "../../components/HomeCarousel/HomeCarousel";
import ProductCarousel from "../../components/ProductCarousel/ProductCarousel";
import { homeSectionImages, icons } from "../../assets/imageKeyMapping";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { VALUES } from "../../constants/app-constant";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* <Navbar /> */}
      <div className={classes?.home_page}>
        <div className={classes?.home_carousel}>
          <HomeCarousel></HomeCarousel>
        </div>

        <div className={classes?.info_section}>
          <div className={classes?.moto}>
            Simply Unique<span>/</span> <br />
            Simply Better<span>.</span>
          </div>
          <div className={classes?.info_text}>
            <span>3legant</span> is a gift & decorations store based in HCMC,
            Vietnam. Est since 2019.
          </div>
        </div>

        <div className={classes?.home_sections_component}>
          <div className={classes?.home_sections}>
            <img src={homeSectionImages?.livingRoomImage} alt="livingroom" />
            <div className={classes?.section_details}>
              <div className={classes?.section_name}>Living Room</div>
              <div
                className={classes?.section_cta}
                onClick={() => navigate("/shop")}
              >
                Shop Now
                <img src={icons?.rightArrowIcon} alt="arrow right" />
              </div>
            </div>
          </div>
          <div className={classes?.home_sections}>
            <img src={homeSectionImages?.bedroomImage} alt="bedroom" />
            <div className={classes?.section_details}>
              <div className={classes?.section_name}> Bedroom</div>
              <div
                className={classes?.section_cta}
                onClick={() => navigate("/shop")}
              >
                Shop Now
                <img src={icons?.rightArrowIcon} alt="arrow right" />
              </div>
            </div>
          </div>
          <div className={classes?.home_sections}>
            <img src={homeSectionImages?.kitchenImage} alt="kitchen" />
            <div className={classes?.section_details}>
              <div className={classes?.section_name}>Kitchen</div>
              <div
                className={classes?.section_cta}
                onClick={() => navigate("/shop")}
              >
                Shop Now
                <img src={icons?.rightArrowIcon} alt="arrow right" />
              </div>
            </div>
          </div>
        </div>

        <div className={classes?.new_arrivals_section}>
          <div className={classes?.new_arrivals_text}>
            New <br /> Arrivals
          </div>
          <div className={classes?.more_products_cta}>
            More Products
            <img src={icons?.rightArrowIcon} alt="right arrow" />
          </div>
        </div>

        <div className="product_carousel_component">
          <ProductCarousel></ProductCarousel>
        </div>

        <div className={classes?.values_container}>
          {VALUES.map((value) => (
            <div className={classes?.values} key={value?._id}>
              <img
                src={value?.imgURL}
                className={classes?.values_icon}
                alt=""
              />
              <div className={classes?.values_maintext}>{value?.value}</div>
              <div className={classes?.values_subtext}>{value?.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
