import React from "react";
import MealItem from "./MealItem";
import { useGlobalContext } from "../context";
import Loading from "./Loading";
const MealList = () => {
    const { mealList, searchLoading } = useGlobalContext();
    if (searchLoading) {
        return <Loading />;
    }
    if (mealList.length === 0) {
        return <p className="loading">Not found the search</p>;
    }
    return (
        <ul className="mealList">
            {mealList.map((meal) => {
                const {
                    idMeal: id,
                    strMeal: title,
                    strMealThumb: image,
                    strCategory: category,
                } = meal;
                const mealList = { id, title, image, category };
                return <MealItem key={id} {...mealList} />;
            })}
        </ul>
    );
};

export default MealList;
