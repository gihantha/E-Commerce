import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart} = useContext();
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>122</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            Rs.{product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            Rs.{product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Introducing our Men's Green Solid Zippered Full-Zip Slim Fit Bomber
          Jacket – the epitome of casual cool and contemporary style. Crafted
          with meticulous attention to detail, this jacket seamlessly blends
          comfort with a sleek design. Designed for the modern man who
          appreciates versatility, the jacket features a stylish full-zip design
          and a slim fit silhouette that effortlessly complements your physique.
          The vibrant green hue adds a bold touch, making it a standout piece
          for any occasion. Constructed with quality materials, this bomber
          jacket not only keeps you warm but also exudes an air of
          sophistication. The zippered front provides a modern edge, while the
          solid color allows for easy pairing with a variety of outfits – from
          casual jeans to tailored trousers. Whether you're headed for a night
          out with friends or a laid-back weekend adventure, this Green Solid
          Bomber Jacket is your go-to choice for a fashion-forward look. Elevate
          your wardrobe with this must-have piece that combines comfort, style,
          and a dash of urban flair.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button onClick={()=>{addToCart(product.id)}}>ADD TO CARD</button>
        <p className="productdisplay-right-category">
          <span>Category :</span>Women , T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags :</span>Modern, Latest
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
