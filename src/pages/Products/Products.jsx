import "./products.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Products() {
  let { category } = useParams();
  const categoryUpperCase =
    category.charAt(0).toUpperCase() + category.slice(1);
  console.log(category);
  const [products, setProducts] = useState([]);
  const [productDetailsFetched, setProductDetailsFetched] = useState(false);

  switch (category) {
    case "men":
      category = "men's%20clothing";
      break;

    case "women":
      category = "women's%20clothing";
      break;

    default:
      category = category;
  }

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/category/${category}`
        );
        setProducts(res.data);
        setProductDetailsFetched(true);
        // console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProducts();
    return setProducts([]);
  }, [category]);

  return (
    <>
      <Navbar />
      <h3 className="product-category-heading">{categoryUpperCase} Store</h3>
      {productDetailsFetched ? (
        <div className="products-container">
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                id={product.id}
                source="productsPage"
                imageUrl={product.image}
                title={product.title}
              />
            );
          })}
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

export default Products;
