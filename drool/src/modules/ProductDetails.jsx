import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImages from "../components/ProductImages";
import { useCart } from "../context/cart/cartContext";
import "../styles/ProductDetails.css";

import { getProductById } from "../services/ProductService";
import Headers from "../pages/Headers";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const ecommerce = useCart();

  const handleAddItem = (e) => {
    e.preventDefault();
    let item = {
      ...product,
      qty: 1,
    };
    console.log(ecommerce);
    ecommerce.addItem(item);
  };

  async function getProduct() {
    let data = await getProductById(id);
    if (data) {
      setProduct(data);
    }
  }

  useEffect(() => {
    if (id) {
      getProduct();
    }
  }, []);

  return (
    <>
    <Headers />
      {product && (
        <div className="product-details-wrapper">
          <div className="d-flex justify-content-between w-100 sumary">
            <div className="img-product w-100">
              <ProductImages images={product.images} />
            </div>
            <div className="d-flex flex-column w-100 gap-2">
              <div className="product_title ">
                <h1>{product.name}</h1>
              </div>
              <div className="price">
                <span>{product.option.price} DT</span>
              </div>
              <div>
                <p className="product-description">{product.description}</p>
              </div>
              <div>
                <form className="d-flex flex-column gap-2 form-cart">
                  <div className="d-flex flex-column gap-2">
                    <label>Select size</label>
                    <select>
                      <option>Choose An Option</option>
                      <option></option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                  <div className="d-flex flex-column gap-2">
                    <label>Select size</label>
                    <select>
                      <option>Choose An Option</option>
                      <option></option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                  <div className="my-3">
                    <button
                      className="bt-product"
                      onClick={(e) => handleAddItem(e)}
                    >
                      ADD TO BASKET
                    </button>
                  </div>
                </form>
                <div className="product-widget">
                  <div className="d-flex flex-column gap-2 img-product-widget ">
                    <img
                      src="/assets/icons/Shipping-icon.webp"
                      alt="satisfaction"
                    />

                    <p>Global shipping</p>
                  </div>
                  <div className="d-flex flex-column gap-2 img-product-widget">
                    <img
                      src="/assets/icons/Satisfaction-icon.webp"
                      alt="satisfaction"
                    />
                    <p>Global shipping</p>
                  </div>
                  <div className="d-flex flex-column gap-2 img-product-widget">
                    <img
                      src="/assets/icons/returns-icon.webp"
                      alt="satisfaction"
                    />
                    <p>Global shipping</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
