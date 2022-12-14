//search meals by name https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
//all meal categories https://www.themealdb.com/api/json/v1/1/categories.php
//filter by category https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood

import React, { useContext, useState, useEffect } from "react";
const AppContext = React.createContext();
const categoryURL = "https://www.themealdb.com/api/json/v1/1/categories.php";
const searchURL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const filterCategoryURL =
    "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

const fetchAPI = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
};
const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [searchLoading, setSearchLoading] = useState(false);
    const [categoryList, setCategoryList] = useState([]);
    const [filterCategory, setFilterCategory] = useState("");
    const [mealList, setMealList] = useState([]);
    const [mealDetail, setMealDetail] = useState({});
    const [searchValue, setSearchValue] = useState("");
    const [searchValid, setSearchValid] = useState(true);
    const [toggleSideBar, setToggleSideBar] = useState(false);

    const fetchCategory = async (url) => {
        setLoading(true);
        const { categories } = await fetchAPI(url);
        setCategoryList(categories);
        setLoading(false);
    };

    const fetchMealList = async (url) => {
        setSearchLoading(true);
        const { meals } = await fetchAPI(url);
        if (!meals) {
            setMealList([]);
            setSearchLoading(false);
            return;
        }
        setMealList(meals);
        setSearchLoading(false);
    };

    const fetchMealId = async (url) => {
        setLoading(true);
        const { meals } = await fetchAPI(url);
        setMealDetail(meals[0]);
        setLoading(false);
    };

    const fetchFilterCategory = async (url) => {
        setSearchLoading(true);
        const { meals } = await fetchAPI(url);
        setMealList(meals);
        setSearchLoading(false);
    };

    const searchHandler = (e) => {
        setSearchValue(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (searchValue.trim() === "") {
            setSearchValid(false);
            return;
        }
        fetchMealList(`${searchURL}${searchValue}`);
        setToggleSideBar(!toggleSideBar);
        setSearchValue("");
        setSearchValid(true);
    };

    const filterHandler = (title) => {
        fetchFilterCategory(`${filterCategoryURL}${title}`);
        setFilterCategory(title);
    };

    useEffect(() => {
        fetchCategory(categoryURL);
        fetchMealList(`${searchURL}a`);
    }, []);
    useEffect(() => {
        if (searchValue.trim() === "") {
            setSearchValid(false);
        } else {
            setSearchValid(true);
        }
    }, [searchValue]);
    return (
        <AppContext.Provider
            value={{
                categoryList,
                mealList,
                loading,
                searchLoading,
                mealDetail,
                searchValue,
                searchValid,
                toggleSideBar,
                filterCategory,
                setSearchValid,
                fetchMealId,
                searchHandler,
                submitHandler,
                setToggleSideBar,
                filterHandler,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
export const useGlobalContext = () => {
    return useContext(AppContext);
};
export { AppProvider };
