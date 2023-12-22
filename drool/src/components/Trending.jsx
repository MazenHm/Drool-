import React, { useEffect, useState } from "react";
import "../styles/pages.css";
import Card from "./Card";
import { getLastProduct } from "../services/ProductService";
import { baseUrlImage } from "../services/config";
const Trending = () => {
  const [product, setProduct] = useState([]);

  async function getProducts() {
    let data = await getLastProduct();
    if (data) {
      setProduct(data);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  let productView;
  if (product && product.length > 0) {
    productView = product.map((product) => (
      <Card
        id={product._id}
        image={baseUrlImage + product.images[0].url}
        title={product.name}
        description={product.description}
        price={product.option.price}
      />
    ));
  }
  return (
    <div className="cards-container">
      <h1 className="text-center mb-5">Trending Now</h1>
      <div className="d-flex justify-content-around">
        {productView}
        {/* <Card
          image="/assets/images/open-mind.webp"
          title="Open Mind By John Schulisch"
          price="$33.00"
        />
        <Card
          image="/assets/images/Alexander.webp"
          title="Don't settle for boring"
          price="$33.00"
        />
        <Card
          image="/assets/images/Fllower.webp"
          title="Mazen Hammouda Edition"
          price="$33.00"
        />
        <Card
          image="/assets/images/open-mind.webp"
          title="Open Mind By John Schulisch"
          price="$33.00"
        /> */}
      </div>
    </div>
  );
};

export default Trending;
