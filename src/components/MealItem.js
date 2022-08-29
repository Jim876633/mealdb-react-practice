import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
const MealItem = ({ title, image, id, category }) => {
    const { filterCategory } = useGlobalContext();
    return (
        <div className="card">
            <div className="card-image">
                <span>Loading...</span>
                <img src={image} className="card-img-top" alt={title} />
            </div>
            <div className="card-body">
                <h5 className="card-title">
                    {title.length > 15 ? title.slice(0, 15) + "..." : title}
                </h5>
                <p className="card-text"> {category || filterCategory}</p>
                <Link className="btn meal-btn" to={`meal/${id}`}>
                    Details
                </Link>
            </div>
        </div>
    );
};

export default MealItem;
