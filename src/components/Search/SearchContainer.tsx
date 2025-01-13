import React from "react";
import SearchInput from "./SearchInput";

const SearchContainer = ({ openSearch }: any) => {
    return (
        <div data-fs-search-container-row data-fs-container-open={openSearch}>
            <SearchInput data-fs-search-input />
        </div>
    );
};

export default SearchContainer;
