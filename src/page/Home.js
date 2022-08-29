import React from "react";
import CategoryList from "../components/CategoryList";
import MealList from "../components/MealList";
import SearchForm from "../components/SearchForm";
import { useGlobalContext } from "../context";
import Loading from "../components/Loading";
const Home = () => {
    const { loading, toggleSideBar } = useGlobalContext();
    if (loading) {
        return <Loading />;
    }
    return (
        <div className="home_container">
            <div className={`sideBar ${toggleSideBar ? "toggle" : ""}`}>
                <SearchForm />
                <CategoryList />
            </div>
            <MealList />
        </div>
    );
};

export default Home;
