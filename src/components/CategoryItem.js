import React from "react";

const CategoryItem = ({ title, image, id }) => {
    return (
        <li className="category-btn btn">
            <img src={image} alt={title} className="category-image" />
            <h2 className="category-title">{title}</h2>
        </li>
    );
};

export default CategoryItem;
