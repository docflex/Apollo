import React, { useState } from "react";
import FlexBetween from "components/Utils/FlexBetween";
import {
    AppBar,
    Button,
    Toolbar,
    useTheme,
    Box,
    Typography,
    Menu,
    MenuItem,
    Slide,
} from "@mui/material";

// Left Side Components of the Navbar
import MenuIconComponent from "components/NavbarComponents/MenuIcon";
import SearchBarComponent from "components/NavbarComponents/SearchBar";

// Right Side Components of the Navbar
import ToggleModesComponent from "components/NavbarComponents/ToggleModes";
import SettingsIconComponent from "components/NavbarComponents/SettingsIcon";
import ProfileDropdown from "components/NavbarComponents/ProfileDropdown";

function Navbar({ user, isSidebarOpen, setIsSidebarOpen }) {
    const theme = useTheme();

    return (
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none",
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* LEFT SIDE OF THE NAVBAR */}
                <FlexBetween>
                    {/* MENU ICON COMPONENT */}
                    <MenuIconComponent
                        isSidebarOpen={isSidebarOpen}
                        setIsSidebarOpen={setIsSidebarOpen}
                    />
                    {/* SEARCH BAR COMPONENT */}
                    <SearchBarComponent
                        backgroundColor={theme.palette.background.alt}
                        borderRadius="9px"
                    />
                </FlexBetween>

                {/* RIGHT SIDE OF THE NAVBAR */}
                <FlexBetween gap="1.5rem">
                    {/* TOGGLE MODES */}
                    <ToggleModesComponent />
                    {/* SETTINGS BUTTON */}
                    <SettingsIconComponent />
                    {/* USER PROFILE DROPDOWN */}
                    <ProfileDropdown user={user} />
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
