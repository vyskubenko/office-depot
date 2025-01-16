import React from "react";
import { Icon, Button } from "@faststore/ui";

const SearchOpenButton = ({ setOpenSearch }: any) => {
    const handleToggleModal = () => setOpenSearch((modalOpen: boolean) => !modalOpen);

    return (
        <Button data-fs-search-open-modal-button onClick={handleToggleModal}>
            <Icon name="MagnifyingGlass" data-fs-search-open-modal-button-icon />
            <p data-fs-search-open-modal-button-label>Search</p>
        </Button>
    );
};

export default SearchOpenButton;
