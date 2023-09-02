import React from "react";
import { Typography, IconButton, Box } from "@mui/material";
import { ChevronLeft } from "@mui/icons-material";
import FlexBetween from "components/Utils/FlexBetween";
import Logo from "assets/Logo.png";

function SidebarHeader({ isNonMobile, isSidebarOpen, setIsSidebarOpen }) {
    return (
        <Box m="1.5rem 2rem 2rem 3rem">
            <FlexBetween>
                <Box display="flex" alignItems="center">
                    <Box
                        marginLeft="-5rem"
                        component="img"
                        alt="logo"
                        src={Logo}
                        height="5rem"
                        width="20rem"
                        sx={{ objectFit: "contain" }}
                    />
                </Box>
                {!isNonMobile && (
                    <Box marginLeft="-5rem">
                        <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                            <ChevronLeft />
                        </IconButton>
                    </Box>
                )}
            </FlexBetween>
        </Box>
    );
}

export default SidebarHeader;
