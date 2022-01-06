import "./product.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart/cartActions";

function Product() {
  const productId = useParams();
  // console.log(productId.id);
  const [product, setProduct] = useState({});
  const [productDetailsFetched, setProductDetailsFetched] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/${productId.id}`
        );
        setProduct(res.data);
        setProductDetailsFetched(true);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
    return setProduct({});
  }, [productId]);

  const handleAddToCartClick = () => {
    const dispatchProduct = {
      imageUrl: product.image,
      title: product.title,
      price: product.price,
    };
    dispatch(addToCart(dispatchProduct));
  };

  return (
    <>
      <Navbar />

      {productDetailsFetched ? (
        <div className="product-container">
          <div className="product-img-container">
            <img src={product.image} alt="" className="product-img" />
          </div>
          <div className="product-details-container">
            <div className="product-details-wrapper">
              <p className="product-name">{product.title}</p>
              <p className="product-desc">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <button
                className="product-buy-button"
                onClick={() => handleAddToCartClick()}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="product-loading-container">
          <h3>Loading</h3>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Product;
