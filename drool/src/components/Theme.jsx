import React from "react";
import ThemeCard from "./ThemeCard";

const Theme = () => {
  return (
    <div className="theme-container">
      <h4 className="text-center">Shop by theme</h4>
      <div className="d-flex justify-content-between">
        <ThemeCard
          image="/assets/images/balaclava_illustration_artwork.jpg"
          title="BOLD"
          direction="view more"
          height="310"
          width="218"
        />
        <ThemeCard
          image="/assets/images/balaclava_illustration_artwork.jpg"
          title="MUTED"
          direction="view more"
          height="310"
          width="218"
        />
        <ThemeCard
          image="/assets/images/balaclava_illustration_artwork.jpg"
          title="MONOCHROME"
          direction="view more"
          height="310"
          width="218"
        />
        <ThemeCard
          image="/assets/images/balaclava_illustration_artwork.jpg"
          title="MINIMAL"
          direction="view more"
          height="310"
          width="218"
        />
        <ThemeCard
          image="/assets/images/balaclava_illustration_artwork.jpg"
          title="CHIC"
          direction="view more"
          height="310"
          width="218"
        />
        <ThemeCard
          image="/assets/images/balaclava_illustration_artwork.jpg"
          title="TYPOGRAPHY"
          direction="view more"
          height="310"
          width="218"
        />
      </div>
    </div>
  );
};

export default Theme;
