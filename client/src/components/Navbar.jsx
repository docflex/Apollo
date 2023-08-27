import React from "react";
import FlexBetween from "components/Utils/FlexBetween";
import { AppBar, Toolbar, useTheme } from "@mui/material";

// Left Side Components of the Navbar
import MenuIconComponent from "components/NavbarComponents/MenuIcon";
import SearchBarComponent from "components/NavbarComponents/SearchBar";

// Right Side Components of the Navbar
import ToggleModesComponent from "components/NavbarComponents/ToggleModes";
import SettingsIconComponent from "components/NavbarComponents/SettingsIcon";

function Navbar() {
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
                    <MenuIconComponent />
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
                </FlexBetween>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;