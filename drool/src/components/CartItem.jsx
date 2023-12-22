import React from "react";
import { useCart } from "../context/cart/cartContext";
import { baseUrlImage } from "../services/config";

const CartItem = ({item}) => {
  const ecommerce = useCart();
  const handleDecreaseItem = (e) => {
    e.preventDefault();
    ecommerce.decreaseQty(item);
  };
  const handleIncreaseItem = (e) => {
    e.preventDefault();
    ecommerce.increaseQty(item);
  };
  const handleRemoveItem = (e) => {
    e.preventDefault();
    ecommerce.removeItem(item);
  };
  return (
    <>
      <div className="cart-contaier">
        <div className="cart-basket d-flex align-items-center justify-content-between">
          <img src={baseUrlImage + item.images[0].url} alt="product" />
          <div className="d-flex flex-column">
            <div>
              <a href="#f" className="cart-item-name">
                {item.name}
              </a>
              <span className="d-block">{item.option.height}</span>
            </div>
            <span className="minicart-price ">
              <span>${item.option.price}</span>
            </span>
            <div className="d-flex gap-2 ">
              <span
                className=" text-secondary border-none plusAndMinus"
                onClick={(e) => handleDecreaseItem(e)}
              >
                -
              </span>
              <span>{item.qty}</span>
              <span
                className=" text-secondary border-none plusAndMinus"
                onClick={(e) => handleIncreaseItem(e)}
              >
                +
              </span>
            </div>
          </div>

          <i className="fa fa-trash" onClick={(e) => handleRemoveItem(e)}></i>
        </div>
      </div>
    </>
  );
};

export default CartItem;
