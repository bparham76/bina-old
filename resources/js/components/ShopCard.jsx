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
    Slide,
    Fade,
} from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
import ShareIcon from "@mui/icons-material/Share";

import { useState } from "react";

const ShopCard = (props) => {
    const { pic, ...others } = props;

    const [hover, setHover] = useState(false);
    const [buttonHover, setButtonHover] = useState(false);

    const mobile = useMediaQuery("(max-width: 450px)");

    return (
        <Card
            square
            elevation={!mobile && hover ? 12 : 1}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{
                my: mobile ? 2 : 0,
                position: "relative",
                cursor: "default",
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
                        transform: !mobile && hover ? "scale(140%)" : "",
                    }}
                />
                {/* <Slide in={hover} direction="up"> */}
                <Fade in={hover}>
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
                        <Button size="small" sx={{ color: "white", p: 4 }}>
                            <PlaylistAddIcon />
                            افزودن به سبد خرید
                        </Button>
                        <Button size="small" sx={{ color: "white", p: 4 }}>
                            <FavoriteBorderIcon />
                            افزودن به علاقه مندی ها
                        </Button>
                        <Button size="small" sx={{ color: "white", p: 4 }}>
                            <ShareIcon />
                            اشتراک گذاری محصول
                        </Button>
                    </Box>
                </Fade>
                {/* </Slide> */}
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
                <Typography variant="p">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
                    با استفاده از طراحان گرافیک است.
                </Typography>
            </CardContent>
            <CardActions
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Button variant="contained" color="error">
                    مشاهده جزئیات
                </Button>
                {/* <div></div> */}
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
