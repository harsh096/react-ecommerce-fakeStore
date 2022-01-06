import "./categories.css";

const data = [
  { id: 1, cat: "https://i.ibb.co/723gYhL/shirts.webp" },
  { id: 2, cat: "https://i.ibb.co/Rh6M7Gf/handbags.webp" },
  { id: 3, cat: "https://i.ibb.co/yhGyZ3c/casual-shoes.webp" },
  { id: 4, cat: "https://i.ibb.co/jkg4m4v/heels.webp" },
  { id: 5, cat: "https://i.ibb.co/tp7PXTj/shorts.webp" },
  { id: 6, cat: "https://i.ibb.co/rfzrFVz/dresses.webp" },
  { id: 7, cat: "https://i.ibb.co/Kw47QQF/jeans.webp" },
  { id: 8, cat: "https://i.ibb.co/Lzc7BNk/sarees.webp" },
  { id: 9, cat: "https://i.ibb.co/cyPkCwK/men-tshirt.webp" },
  { id: 10, cat: "https://i.ibb.co/PwWbC52/kurta.webp" },
];

const Categories = () => {
  return (
    <div className="categories-container">
      <h2 className="categories-heading"> Categories to Bag </h2>
      <div className="categories-wrapper">
        {data.map((img) => {
          return (
            <img key={img.id} src={img.cat} alt="" className="category-img" />
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
