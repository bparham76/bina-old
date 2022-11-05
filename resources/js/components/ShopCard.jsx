import {
    Button,
    Card,
    Chip,
    CardMedia,
    CardContent,
    CardActions,
    Modal,
    Paper,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useState } from "react";
// import { Paper } from "@mui/material";

const ShopCard = (props) => {
    const { pic, ...others } = props;

    const [hover, setHover] = useState(false);

    const mobile = useMediaQuery("(max-width: 450px)");

    return (
        <Card
            elevation={!mobile && hover ? 12 : 1}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            sx={{
                my: mobile ? 2 : 0,
                position: "relative",
                "&:hover": {
                    cursor: "pointer",
                },
            }}
        >
            <Paper sx={{ overflow: "hidden" }}>
                <CardMedia
                    component="img"
                    height="200"
                    src={`https://picsum.photos/id/${pic}/200/200`}
                    alt={pic}
                    sx={{
                        transition: "all 1000ms ease-out",
                        transform: !mobile && hover ? "scale(140%)" : "",
                    }}
                />
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
                {/* <Stack direction="column">
                    <Button color="secondary" size="small">
                        نمایش سریع
                    </Button>
                    <Button color="secondary" size="small">
                        افزودن به سبد خرید
                    </Button>
                </Stack> */}
                <div></div>
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
