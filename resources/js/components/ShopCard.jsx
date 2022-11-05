import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Box,
    Collapse,
} from "@mui/material";
import { useState } from "react";

const ShopCard = (props) => {
    const { pic, ...others } = props;
    const [hover, setHover] = useState(false);

    // let elevate = false;

    return (
        <Card
            elevation={hover ? 8 : 2}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{
                "&:hover": {
                    cursor: "pointer",
                },
            }}
        >
            <CardMedia
                component="img"
                height="200"
                src={`https://picsum.photos/id/${pic}/200/200`}
                alt={pic}
            />
            <CardContent>اطلاعات محصول</CardContent>
            <CardActions>
                <Box
                    fullWidth
                    sx={{ display: "flex", alignContent: "space-between" }}
                >
                    <h1>yek</h1>
                    <h1>yek</h1>
                </Box>
            </CardActions>
        </Card>
    );
};

export default ShopCard;
