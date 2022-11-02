import { Stack, Button } from "@mui/material";
import { AccountCircle, ShoppingBasket } from "@mui/icons-material";

const DashboardController = () => {
    const MyButton = (props) => (
        <Button variant="text" sx={{ color: "black" }}>
            {props.children}
        </Button>
    );

    return (
        <Stack direction="row">
            <MyButton>
                <ShoppingBasket />
            </MyButton>
            <MyButton>
                <AccountCircle />
            </MyButton>
        </Stack>
    );
};

export default DashboardController;
