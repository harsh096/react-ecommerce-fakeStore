import Navbar from "../components/Navbar/Navbar";
import Carousel from "../components/Carousel/Carousel";
import Categories from "../components/Categories/Categories";
import Newsletter from "../components/Newsletter/Newsletter";
import Footer from "../components/Footer/Footer";
import Cards from "../components/Cards/Cards";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <h3
        className="homepage-top-pics-heading"
        style={{ fontSize: "28px", fontWeight: "500", marginLeft: "10px" }}
      >
        Popular Picks
      </h3>
      <Cards heading="Top Picks in Electronics" category="electronics" />
      <Cards heading="Top Picks in Jewelery" category="jewelery" />
      <Cards heading="Top Picks in Men Wear" category="men's%20clothing" />
      <Cards heading="Top Picks in Women Wear" category="women's%20clothing" />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
