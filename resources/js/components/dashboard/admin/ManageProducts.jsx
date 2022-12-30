import { useEffect, useState } from "react";

import { Paper, Box, TextField, Typography } from "@mui/material";

import DashboardPage, {
    DashboardPagePart,
} from "../../dashboard/DashboardPage";
import LoadingSpinner from "../../general/LoadingSpinner";

import InventoryIcon from "@mui/icons-material/Inventory";
import GridViewIcon from "@mui/icons-material/GridView";
import MoreIcon from "@mui/icons-material/More";
import CollectionsIcon from "@mui/icons-material/Collections";

import useServer from "../../../features/useServer";
import { useSetWebPage } from "../../../features/shop/ShopEcosystem";

const ManageProducts = () => {
    const { loading, response, error, sendRequest } = useServer();
    const goto = useSetWebPage();

    useEffect(() => {
        if (!loading && response) console.log(response);
        else if (!loading && error) console.log(error);
    }, [loading]);

    const get = () =>
        sendRequest({
            url: "/api/admin/product/10",
            method: "get",
        });

    const add = () =>
        sendRequest({
            url: "/api/admin/product/add",
            method: "post",
            data: {
                name: "product 1",
                description: "some sample product to just test it all.",
                vat: false,
                properties: {
                    color: ["red", "blue", "yellow"],
                    size: ["s", "m", "l", "xl", "2xl"],
                },
                pictures: {
                    main: 1,
                    gallery: [10, 201, 112, 325, 1551],
                },
            },
        });

    const selection = [
        {
            url: "/view",
            title: "نمایش محصولات",
            icon: <GridViewIcon />,
        },
        {
            url: "/new",
            title: "افزودن محصول",
            icon: <InventoryIcon />,
        },
        {
            url: "/category",
            title: "دسته بندی",
            icon: <MoreIcon />,
        },
        {
            url: "/gallery",
            title: "گالری",
            icon: <CollectionsIcon />,
        },
    ];

    const PageSelector = ({ url = "", title = "", icon = null }) => {
        const handleClick = () =>
            goto({ page: "/dashboard/products" + url, authCheck: true });
        const [hover, setHover] = useState(false);

        return (
            <Paper
                elevation={hover ? 8 : 4}
                onMouseEnter={(e) => setHover(true)}
                onMouseLeave={(e) => setHover(false)}
                onClick={handleClick}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        p: 4,
                        cursor: "pointer",
                        gap: 2,
                    }}
                >
                    {icon}
                    <Typography variant="p">{title}</Typography>
                </Box>
            </Paper>
        );
    };

    return (
        <DashboardPage>
            <DashboardPagePart full>
                <Typography variant="h4">مدیریت محصولات</Typography>
                <Typography variant="p">
                    در این بخش می توانید محصولات جدیدی به فروشگاه اضافه کرده و
                    یا محصولات موجود را ویرایش کنید
                </Typography>
            </DashboardPagePart>
            {selection.map((item, index) => (
                <DashboardPagePart key={index}>
                    <PageSelector
                        url={item.url}
                        title={item.title}
                        icon={item.icon}
                    />
                </DashboardPagePart>
            ))}
        </DashboardPage>
    );
};

export default ManageProducts;
