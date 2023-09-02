import React, { useState } from "react";
import {
    Card,
    CardActions,
    CardContent,
    Collapse,
    Button,
    Typography,
    Rating,
    useTheme,
} from "@mui/material";

const Product = ({ _id, name, description, price, rating, category, supply, stat }) => {
    const theme = useTheme();
    const [isExpanded, setIsExpanded] = useState(false);
    // console.log(stat[0].yearlySalesTotal);

    return (
        <Card
            sx={{
                backgroundImage: "none",
                backgroundColor: theme.palette.background.alt,
                borderRadius: "0.55rem",
            }}
        >
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color={theme.palette.secondary[700]} gutterBottom>
                    {category.toUpperCase()}
                </Typography>
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ mb: "1.5rem" }} color={theme.palette.secondary[400]}>
                    ${Number(price).toFixed(2)}
                </Typography>
                <Rating defaultValue={2.5} precision={0.5} value={rating} readOnly />

                <Typography variant="body2">{description}</Typography>
            </CardContent>
            <CardActions>
                <Button variant="primary" size="small" onClick={() => setIsExpanded(!isExpanded)}>
                    {!isExpanded ? "See More" : "Minimize"}
                </Button>
            </CardActions>
            <Collapse
                in={isExpanded}
                timeout="auto"
                unmountOnExit
                sx={{
                    color: theme.palette.neutral[300],
                }}
            >
                <CardContent>
                    <Typography>id: {_id}</Typography>
                    <Typography>Supply Left: {supply}</Typography>
                    <Typography>Yearly Sales This Year: {stat[0].yearlySalesTotal}</Typography>
                    <Typography>
                        Yearly Units Sold This Year: {stat[0].yearlyTotalSoldUnits}
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default Product;
