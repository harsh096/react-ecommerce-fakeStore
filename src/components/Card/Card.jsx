import "./card.css";
import { Link } from "react-router-dom";

function Card({ source, imageUrl, title, id }) {
  return (
    <Link to={`/products/${id}`} className="link">
      <div className="card-container">
        <div className="card-image-container">
          <img src={imageUrl} alt="" className="card-img" />
        </div>

        <h4 className="card-title">{title}</h4>
      </div>
    </Link>
  );
}

export default Card;
