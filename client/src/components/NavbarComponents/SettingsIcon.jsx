import React from "react";
import { IconButton } from "@mui/material";
import { SettingsOutlined } from "@mui/icons-material";

function SettingsIconComponent() {
    return (
        <IconButton>
            <SettingsOutlined sx={{ fontSize: "25px" }} />
        </IconButton>
    );
}

export default SettingsIconComponent;
