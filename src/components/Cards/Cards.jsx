import "./cards.css";
import Card from "../Card/Card";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

// const sampleData = [
//   {
//     id: 0,
//     imageUrl:
//       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2042528/2017/9/28/11506599316866-Mast--Harbour-Men-Red--Blue-Regular-Fit-Checked-Casual-Shirt-7991506599316924-1.jpg",
//     title: "Men Red & Blue Checked Casual Shirt",
//   },
//   {
//     id: 1,
//     imageUrl:
//       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/16169504/2021/11/19/1a1ad252-f981-48b4-839c-2118ecf8c99e1637308919783OrchidBluesPurpleNetFittedTop1.jpg",
//     title: "Purple Net Fitted Top",
//   },
//   {
//     id: 2,
//     imageUrl:
//       "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2020/7/16/913d5278-4a71-42cf-8102-dc52bb2c1ca51594850274502-1.jpg",
//     title: "Boys Pack Of 3 Multicoloured Printed T-shirts",
//   },
// ];

function Cards({ heading, category }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `https://fakestoreapi.com/products/category/${category}?limit=4`
        );
        console.log(res.data);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  return (
    <div className="cards-container">
      <h3 className="card-heading">
        {category === "men's%20clothing"
          ? "Mens Wear"
          : category === "women's%20clothing"
          ? "Women Wear"
          : category.charAt(0).toUpperCase() + category.slice(1)}
      </h3>
      <div className="cards-wrapper">
        {products.map((product) => {
          return (
            <Card
              key={product.id}
              id={product.id}
              source="homePage"
              imageUrl={product.image}
              title={product.title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
