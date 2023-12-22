import React from "react";
import GuaranteeCard from "./GuaranteeCard";

const Guarantee = () => {
  return (
    <div className="guarantee-container">
      <GuaranteeCard
        image="/assets/icons/smile-icon.webp"
        title="UNIQUE ART"
        description="Curated store of bold and expressive art prints"
      />
      <GuaranteeCard
        image="/assets/icons/diomond-quality-icon_x50.webp"
        title="HIGH QUALITY
        "
        description="Heavyweight fine art paper & handmade frames

        "
      />
      <GuaranteeCard
        image="/assets/icons/shipping-box-icon_x50.webp"
        title="SHIP GLOBALLY
        "
        description="Delivered anywhere, with a 14-day return period

        "
      />
    </div>
  );
};

export default Guarantee;
