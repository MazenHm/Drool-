import { Drawer } from "antd";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";
import "../styles/modules.css";
import { useCart } from "../context/cart/cartContext";
import { calculateAmount } from "../helpers/utilities";
import { Link } from "react-router-dom";
const MiniCart = ({ open, onClose }) => {
  const [productData, setProductData] = useState([]);
  const ecommerce = useCart();
  const { cartItems, auto } = ecommerce;
  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      setProductData(cartItems);
    }
  }, [auto, JSON.stringify(cartItems)]);

  const totalAmount = calculateAmount(productData);
  return (
    <>
      <Drawer onClose={onClose} open={open} closable={false}>
        <div className="header-cart">
          <span onClick={onClose} className="close">
            &times;
          </span>
          <h3>Cart</h3>

          <img src="/assets/icons/167787.png" alt="" height="18" width="20" />
        </div>
        <section className="card-items">
          {productData.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </section>
        <div className="cart-contaier d-flex flex-column gap-3 border-topp">
          <div className="d-flex justify-content-between">
            <span className="text-mdd">Subtotal</span>
            <span className="text-mdd">${totalAmount}</span>
          </div>
          <Link to="/Checkouts">
            <button className="btt-primary">
              <i className="fa fa-lock px-2" aria-hidden="true"></i>
              PROCEED TO CHECKOUT
            </button>
          </Link>
        </div>
      </Drawer>
    </>
  );
};
export default MiniCart;
