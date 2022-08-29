import React from "react";
import { useGlobalContext } from "../context";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
    const { categoryList } = useGlobalContext();
    return (
        <ul className="category-list">
            {categoryList.map((category, index) => {
                const {
                    strCategory: title,
                    strCategoryThumb: image,
                    idCategory: id,
                } = category;
                const categoryList = { title, image, id };
                return <CategoryItem key={id} {...categoryList} />;
            })}
        </ul>
    );
};

export default CategoryList;
