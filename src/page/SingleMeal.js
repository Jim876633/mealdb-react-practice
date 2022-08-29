//lookup details by id https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772

import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loading from "../components/Loading";
import { useGlobalContext } from "../context";
const detailURL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const SingleMeal = () => {
    const { fetchMealId, mealDetail, loading } = useGlobalContext();
    const { id } = useParams();
    const {
        strMeal: title,
        strArea: area,
        strCategory: category,
        strMealThumb: image,
        strIngredient1: ingredient1,
        strIngredient2: ingredient2,
        strIngredient3: ingredient3,
        strIngredient4: ingredient4,
        strIngredient5: ingredient5,
    } = mealDetail;
    const ingredients = [
        ingredient1,
        ingredient2,
        ingredient3,
        ingredient4,
        ingredient5,
    ];
    useEffect(() => {
        fetchMealId(`${detailURL}${id}`);
    }, []);
    if (loading) {
        return <Loading />;
    }
    return (
        <div className="card card-detail">
            <div className=" row flex-md-row flex-column">
                <div className="detail-image-block col-6">
                    <img src={image} className="detail-image" alt={title} />
                </div>
                <div className="card-body col-6">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">
                        <span>area:</span>
                        {area}
                    </p>
                    <p className="card-text">
                        <span>category:</span>
                        {category}
                    </p>
                    <p className="card-text">
                        <span>ingredients:</span>
                        {ingredients.join("、")}
                    </p>
                    <Link to="/" className="btn meal-btn">
                        Go back
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleMeal;
