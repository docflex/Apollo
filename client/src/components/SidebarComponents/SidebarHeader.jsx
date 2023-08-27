import React from "react";
import { Typography, IconButton, Box } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import FlexBetween from "components/Utils/FlexBetween";

function SidebarHeader({ isNonMobile, isSidebarOpen, setIsSidebarOpen }) {
    return (
        <Box m="1.5rem 2rem 2rem 3rem">
            <FlexBetween>
                <Box display="flex" alignItems="center" gap="0.5rem">
                    <Typography variant="h4" fontWeight="bold">
                        ECOMVISION
                    </Typography>
                </Box>
                {!isNonMobile && (
                    <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                        <ChevronLeft />
                    </IconButton>
                )}
            </FlexBetween>
        </Box>
    );
}

export default SidebarHeader;
