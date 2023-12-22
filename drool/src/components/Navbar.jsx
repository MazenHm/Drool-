import React, { useState } from "react";

import "../styles/pages.css";
import MiniCart from "../modules/MiniCart";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  // const toggleDropdown = () => {
  //   setDropdownOpen(!dropdownOpen);
  // };
  return (
    <>
      <nav className=" navbar-expand-lg navbar-light ">
        <div className="container-nav">
          <div className="d-flex justify-content-between">
            <div>
              <a href="/">
                <img
                  src="assets/images/logo.webp"
                  alt="logo"
                  width="133"
                  height="30"
                />
              </a>
            </div>
            <div className="navigation-items">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link menu-one" href="#home">
                    PRINTS & POSTERS
                  </a>
                  <div className="menu-dropdown">
                    <div className="d-flex justify-content-between gap-2 px-5 py-3">
                      <div className="d-flex flex-column gap-2 border-end-1 border-dark">
                        <span className="title-dropdown">Prints & Posters</span>
                        <span>View All</span>
                        <span>New Realease</span>
                        <span>Best Sellers</span>
                        <span>Shop Sets</span>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <span className="title-dropdown">Categories</span>
                        <span>All Catgegories</span>
                        <span>Illustration</span>
                        <span>Graphic Design</span>
                        <span>Photography</span>
                        <span>Painting</span>
                      </div>
                      <div className="d-flex flex-column gap-2">
                        <span className="title-dropdown">Themes</span>
                        <span>All Themes</span>
                        <span>Bold</span>
                        <span>Muted</span>
                        <span>Typographie</span>
                        <span>Minimal</span>
                        <span>Abstract</span>
                        <span>Chic</span>
                        <span>Cartoons&Comic</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    INSPO HUB
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#home">
                    GIFTS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link selected-one" href="#home">
                    BUNDELS
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="navbar-nav">
                <li className="nav-item icons">
                  <img
                    src="/assets/icons/heart-icon.png"
                    height="18"
                    width="20"
                    alt="favoris"
                  />
                </li>
                <li className="nav-item">
                  <img
                    src="/assets/icons/search-icon.webp"
                    height="18"
                    width="20"
                    alt="search"
                  />
                </li>
                <li className="nav-item">
                  <a onClick={showDrawer} >
                  <img
                    src="/assets/icons/167787.png"
                    height="18"
                    width="20"
                    alt="cart"
                  />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <MiniCart open={open} onClose={onClose} />
    </>
  );
};

export default Navbar;
