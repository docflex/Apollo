import React from "react";
import { CircularProgress, Typography, Box, useTheme } from "@mui/material";

function Loader({ loadingText }) {
    const theme = useTheme();
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="75vh"
        >
            <CircularProgress
                size={80}
                sx={{
                    color: theme.palette.secondary[100],
                }}
            />
            <Typography variant="h5" color={theme.palette.secondary[300]} mt={3}>
                Loading {loadingText} Data...
            </Typography>
        </Box>
    );
}

export default Loader;
