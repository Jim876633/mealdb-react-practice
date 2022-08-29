import React from "react";
import { useGlobalContext } from "../context";
const CategoryItem = ({ title, image, id }) => {
    const { filterHandler } = useGlobalContext();
    return (
        <li
            className="category-btn btn"
            onClick={() => {
                filterHandler(title);
            }}
        >
            <img src={image} alt={title} className="category-image" />
            <h2 className="category-title">{title}</h2>
        </li>
    );
};

export default CategoryItem;
