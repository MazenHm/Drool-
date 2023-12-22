import React from "react";
import "../styles/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column gap-2">
          <h4>DROOL</h4>
          <a href="#f">About us</a>
          <a href="#f">Careers</a>
          <a href="#f">Artists - get involved</a>
          <a href="#f">Environment</a>
          <a href="#f">Policies</a>
        </div>
        <div className="d-flex flex-column gap-2">
          <h4>WHAT WE DO</h4>
          <a href="#f">Shop prints & posters</a>
          <a href="#f">Printing spec</a>
          <a href="#f">Framing spec</a>
          <a href="#f">DROOL Goods</a>
          <a href="#f">Trade professionals</a>
          <a href="#f">How it works</a>
        </div>
        <div className="d-flex flex-column gap-2">
          <h4>HELP</h4>
          <a href="#f">Need help?</a>
          <a href="#f">Returns</a>
          <a href="#f">Shipping</a>
          <a href="#f">Account</a>
          <a href="/sign-in">Register/login</a>
        </div>
        <div className="d-flex flex-column gap-2">
          <p>
            Join our newsletter to keep up-to-date with the latest releases,
            exclusive discounts + more
          </p>
          <button>subscribe</button>
          <span className="text-center">connect with us</span>
          <div className="d-flex justify-content-center gap-2">
            <img
              src="/assets/icons/social-media/facebook-icon.webp"
              alt=""
              heigh="35"
              width="35"
            />
            <img
              src="/assets/icons/social-media/tiktok-icon.webp"
              alt=""
              heigh="35"
              width="35"
            />
            <img
              src="/assets/icons/social-media/pinterest-icon.webp"
              alt=""
              heigh="35"
              width="35"
            />
            <img
              src="/assets/icons/social-media/instagram-icon.webp"
              alt=""
              heigh="35"
              width="35"
            />
          </div>
        </div>
      </div>
      <h2 className="text-center">Copyright © 2023 DROOL</h2>
    </div>
  );
};

export default Footer;
