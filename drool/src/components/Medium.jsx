import React from "react";
import CategoryCard from "./CategoryCard";

const Medium = () => {
  return (
    <div className="medium-container">
      <h4 className="text-center">Shop by medium</h4>
      <div className="d-flex justify-content-between">
        <CategoryCard
          image="/assets/images/illustration.webp"
          title="illustration"
          direction="view more"
        />
        <CategoryCard
          image="/assets/images/A-lighter-please-photography-print-by-Tom-Modol_720x900.webp"
          title="PHOTOGRAPHY"
          direction="view more"
        />
        <CategoryCard
          image="/assets/images/Blue-flower-fine-art-print-by-Juan-de-la-Rica_720x916.webp"
          title="PAINTINGS"
          direction="view more"
        />
        <CategoryCard
          image="/assets/images/Slavic-Glyphs-Festival-graphic-design-print-by-Vlad-Boyko_7100bb17-3d0d-4b5f-aee2-2564357be1a3_360x480.webp"
          title="GRAPHICS"
          direction="view more"
        />
      </div>
    </div>
  );
};

export default Medium;
