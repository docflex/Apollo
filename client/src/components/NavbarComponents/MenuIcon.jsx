import React from "react";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";

function MenuIconComponent({ isSidebarOpen, setIsSidebarOpen }) {
    return (
        <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
        </IconButton>
    );
}

export default MenuIconComponent;
