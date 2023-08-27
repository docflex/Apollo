import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "components/Utils/FlexBetween";
import profileImage from "assets/profileImage.JPG";
import { SettingsOutlined } from "@mui/icons-material";

function SidebarProfile({ user }) {
    const theme = useTheme();

    return (
        <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
            <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
            />
            <Box textAlign="left">
                <Typography
                    fontWeight="bold"
                    fontSize="0.9rem"
                    sx={{ color: theme.palette.secondary[100] }}
                >
                    {user.name}
                </Typography>
                <Typography fontSize="0.8rem" sx={{ color: theme.palette.secondary[200] }}>
                    {user.occupation}
                </Typography>
            </Box>
            <SettingsOutlined
                sx={{
                    color: theme.palette.secondary[300],
                    fontSize: "25px ",
                }}
            />
        </FlexBetween>
    );
}

export default SidebarProfile;
