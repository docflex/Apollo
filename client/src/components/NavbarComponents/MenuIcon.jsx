import React from "react";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

function MenuIconComponent() {
    return (
        <IconButton onClick={() => console.log("Toggle Sidebar")}>
            <MenuIcon />
        </IconButton>
    );
}

export default MenuIconComponent;
