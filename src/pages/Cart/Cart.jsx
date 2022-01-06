import "./cart.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";

function CartItem({ image, title, price }) {
  return (
    <div className="cart-product-container">
      <div className="cart-image-container">
        <img src={image} alt="" className="cart-product-img" />
      </div>
      <div className="cart-product-details-container">
        <span className="cart-product-name">{title}</span>
        <span className="cart-product-price">${price}</span>
      </div>
    </div>
  );
}

function Cart() {
  const { total, cartProducts } = useSelector((state) => state);

  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="cart-products-container">
          <div className="cart-products-wrapper">
            {cartProducts.map((cartProduct) => {
              return (
                <>
                  <CartItem
                    image={cartProduct.imageUrl}
                    title={cartProduct.title}
                    price={cartProduct.price}
                  />
                  <hr />
                </>
              );
            })}
          </div>
        </div>
        <div className="cart-summary-container">
          <h3 className="cart-summary-heading">Order Summary</h3>
          <hr />
          <div className="cart-summary-items">
            <p className="cart-summary-item-lg">Subtotal</p>
            <p className="cart-summary-item-sm">${total}</p>
          </div>
          <div className="cart-summary-items">
            <p className="cart-summary-item-lg">Shipping</p>
            <p className="cart-summary-item-sm">$19</p>
          </div>
          <div className="cart-summary-items">
            <p className="cart-summary-item-lg">Discount</p>
            <p className="cart-summary-item-sm">- $19</p>
          </div>
          <hr />
          <div className="cart-summary-items">
            <p className="cart-summary-item-lg">Total</p>
            <p className="cart-summary-item-sm">${total}</p>
          </div>
          <hr />
          <button
            className="cart-checkout-button"
            onClick={() => alert("Functionality coming soon...")}
          >
            Proceed to Pay
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
