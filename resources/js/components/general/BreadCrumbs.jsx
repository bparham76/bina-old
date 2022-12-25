import { Box, Typography, Link } from "@mui/material";
import { useSetWebPage, useShop } from "../../features/shop/ShopEcosystem";

const BreadCrumbs = () => {
    const goto = useSetWebPage();
    const { breadcrumbsItems } = useShop();

    // const steps = [
    //     { title: "خانه", address: "/" },
    //     { title: "فروشگاه", address: "/shop" },
    //     { title: "دسته بندی", address: "" },
    //     { title: "کالای خاص", address: "" },
    //     { title: "کالای خاص تر", address: "" },
    //     { title: "سفارش", address: "" },
    // ];

    return (
        // <Box sx={{ width: "100%" }}>
        <Box sx={{ p: 3 }}>
            {breadcrumbsItems.map((step, index) => (
                <Link
                    key={index}
                    underline="none"
                    // href={step.address}
                    onClick={(e) => goto({ page: step.address })}
                    sx={{
                        color: "black",
                        cursor: "pointer",
                        "&: hover": {
                            color: "blue",
                        },
                    }}
                >
                    <Typography variant="p">
                        {step.title}
                        {!(breadcrumbsItems.length - 1 == index) && " > "}
                    </Typography>
                </Link>
            ))}
        </Box>
        // </Box>
    );
};

export default BreadCrumbs;
