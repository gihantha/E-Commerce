import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          An ecommerce website is an online platform where businesses sell
          products or services to customers over the internet. These websites
          typically allow users to browse through a catalog of products, add
          items to a virtual shopping cart, and securely complete transactions
          using various payment methods.
        </p>
        <p>
          Ecommerce websites often include features such as product search,
          reviews, ratings, and personalized recommendations to enhance the
          shopping experience.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
