import React from "react";
import { useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";
import { setMode } from "state"; // Import the Redux action
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";

function ToggleModesComponent() {
    const dispatch = useDispatch();
    const theme = useTheme();

    return (
        <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
                <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
                <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
        </IconButton>
    );
}

export default ToggleModesComponent;
