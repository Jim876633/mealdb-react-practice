import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context";
const SearchForm = () => {
    const {
        searchValue,
        searchValid,
        searchHandler,
        submitHandler,
        setSearchValid,
    } = useGlobalContext();
    const [searchFocus, setSearchFocus] = useState(false);

    const searchFocusHandler = () => {
        setSearchFocus(true);
        if (searchValue.trim() === "") {
            setSearchValid(false);
        }
    };
    const serachFormClass = searchValid
        ? searchFocus
            ? "search-Valid"
            : ""
        : searchFocus
        ? "search-inValid"
        : "";
    return (
        <form
            className={`searchForm ${serachFormClass}`}
            onSubmit={(e) => {
                setSearchFocus(true);
                submitHandler(e);
            }}
        >
            <input
                type="text"
                className="search-input"
                onChange={searchHandler}
                value={searchValue}
                onFocus={searchFocusHandler}
                onBlur={() => {
                    setSearchFocus(false);
                }}
            />
            <button className="search-btn">
                <FaSearch className="serch-icon" />
            </button>
        </form>
    );
};

export default SearchForm;
