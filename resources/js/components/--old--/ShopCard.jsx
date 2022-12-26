import {
    Button,
    Box,
    Card,
    Chip,
    CardMedia,
    CardContent,
    CardActions,
    Paper,
    Stack,
    Typography,
    useMediaQuery,
    Fade,
} from "@mui/material";

import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";

import { useState } from "react";

const ShopCard = (props) => {
    const { pic, ...others } = props;

    const [hover, setHover] = useState(false);
    useMediaQuery("(max-width: 900spx)");
    const ButtonList = () => (
        <>
            <Button
                size="small"
                sx={{
                    color: "white",
                    p: 4,
                    display: "flex",
                    gap: 2,
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    console.log("Ass");
                }}
            >
                <ManageSearchIcon />
                مشاهده جزئیات
            </Button>
            <Button
                size="small"
                sx={{
                    color: "white",
                    p: 4,
                    display: "flex",
                    gap: 2,
                }}
            >
                <FavoriteBorderIcon />
                افزودن به علاقه مندی ها
            </Button>
            <Button
                size="small"
                sx={{
                    color: "white",
                    p: 4,
                    display: "flex",
                    gap: 2,
                }}
            >
                <ShareIcon />
                اشتراک گذاری محصول
            </Button>
        </>
    );

    const FadeButtonList = (props) => (
        <Fade in={props.hover}>
            <Box
                sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    backgroundColor: "rgba(0,0,10,0.7)",
                }}
            >
                <ButtonList />
            </Box>
        </Fade>
    );

    const addToCartButton = (e) => {
        e.stopPropagation();
    };

    return (
        <Card
            {...others}
            onClick={() => (window.location.href = "/product")}
            square
            elevation={!mobile && hover ? 12 : 1}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{
                m: 1,
                position: "relative",
                cursor: "pointer",
                // cursor: "default",
            }}
        >
            <Paper square sx={{ overflow: "hidden", position: "relative" }}>
                <CardMedia
                    component="img"
                    height="200"
                    src={`https://picsum.photos/id/${pic}/200/200`}
                    alt={pic}
                    sx={{
                        transition: "all 400ms ease",
                        transform: !mobile && hover ? "scale(120%)" : "",
                    }}
                />
                {!mobile && <FadeButtonList hover={hover} />}
            </Paper>
            <Chip
                label="فروش ویژه"
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    m: 2,
                    backgroundColor: "red",
                    color: "white",
                }}
            />
            <CardContent>
                <Typography variant="p">عنوان محصول</Typography>
            </CardContent>
            <CardActions
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Button
                    variant="contained"
                    color="error"
                    onClick={addToCartButton}
                >
                    افزودن به سبد خرید
                </Button>
                <Stack direction="column">
                    <Typography variant="p">9.799.000</Typography>
                    <Typography
                        variant="p"
                        color="red"
                        sx={{ textDecoration: "line-through" }}
                    >
                        10.299.000
                    </Typography>
                </Stack>
            </CardActions>
        </Card>
    );
};

export default ShopCard;
