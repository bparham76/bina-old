import { Box } from "@mui/material";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";
import Carousel from "react-material-ui-carousel";

const ImageSlider = ({ mobile, productId }) => {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
        },
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
        },
    ];

    const Item = ({ name, imgAddress }) => (
        <Box
            sx={{
                height: 300,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <img src={imgAddress} />
        </Box>
    );
    // return <Box sx={{ height: 300 }}>ImageSlider for product #{productId}</Box>;
    return (
        <Carousel
            animation="slide"
            height={300}
            fullHeightHover
            PrevIcon={<NavigateNext />}
            NextIcon={<NavigateBefore />}
        >
            {items.map((item, index) => (
                <Item
                    key={index}
                    name={item.name}
                    imgAddress="https://picsum.photos/300"
                />
            ))}
        </Carousel>
    );
};

export default ImageSlider;
