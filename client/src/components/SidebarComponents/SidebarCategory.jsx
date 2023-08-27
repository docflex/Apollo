import React from "react";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ChevronRightOutlined } from "@mui/icons-material";
import { useTheme } from "@mui/material";

function SidebarCategory({ text, icon, isActive, onClick }) {
    const theme = useTheme();
    return (
        <ListItem key={text} disablePadding>
            <ListItemButton
                onClick={onClick}
                sx={{
                    backgroundColor: isActive ? theme.palette.secondary[300] : "transparent",
                    color: isActive ? theme.palette.primary[600] : theme.palette.secondary[100],
                }}
            >
                <ListItemIcon
                    sx={{
                        ml: "2rem",
                        color: isActive ? theme.palette.primary[600] : theme.palette.secondary[200],
                    }}
                >
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
                {isActive && <ChevronRightOutlined sx={{ ml: "auto" }} />}
            </ListItemButton>
        </ListItem>
    );
}

export default SidebarCategory;
