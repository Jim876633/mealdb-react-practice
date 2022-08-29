import React from "react";
import { Link } from "react-router-dom";
const MealItem = ({ title, image, id, category }) => {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text"> {category}</p>
                <Link className="btn meal-btn" to={`meal/${id}`}>
                    Details
                </Link>
            </div>
        </div>
    );
};

export default MealItem;
