import React from "react";
import { IconButton, InputBase } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import FlexBetween from "components/Utils/FlexBetween";

function SearchBarComponent({ backgroundColor, borderRadius }) {
    return (
        <FlexBetween
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            gap="3rem"
            p="0.1rem 1.5rem"
        >
            <InputBase placeholder="Search..." />
            <IconButton>
                <SearchIcon />
            </IconButton>
        </FlexBetween>
    );
}

export default SearchBarComponent;
