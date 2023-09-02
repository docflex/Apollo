import React from "react";
import { CircularProgress, Typography, Box, useTheme } from "@mui/material";

function Loader({ loadingText }) {
    const theme = useTheme();
    return (
        <Box
            display="grid"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="100%"
        >
            <Box
                display="grid"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100%"
                marginTop="10%"
            >
                <CircularProgress
                    size={80}
                    sx={{
                        color: theme.palette.secondary[100],
                    }}
                />
            </Box>
            <Box
                display="block"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                height="100%"
                marginTop="10%"
            >
                <Typography variant="h5" color={theme.palette.secondary[300]} mt={3}>
                    Loading {loadingText} Data...
                </Typography>
            </Box>
        </Box>
    );
}

export default Loader;
