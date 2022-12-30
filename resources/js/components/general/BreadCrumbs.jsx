import { Box, Typography, Link } from "@mui/material";
import { useSetWebPage } from "../../features/shop/ShopEcosystem";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const BreadCrumbs = () => {
    const goto = useSetWebPage();
    const { pathname } = useLocation();
    const [steps, setSteps] = useState();

    useEffect(() => {
        if (pathname.length > 1) setSteps(pathname.split("/"));
        else setSteps(null);
    }, [pathname]);

    const addressList = [
        { title: "صفحه اصلی", address: "" },
        { title: "داشبورد", address: "dashboard" },
        { title: "فروشگاه", address: "shop" },
        { title: "محصول", address: "product" },
        { title: "دسته بندی", address: "category" },
        { title: "تاریخچه سفارشات", address: "order-history" },
        { title: "سفارش", address: "order" },
        { title: "پروفایل", address: "profile" },
        { title: "محصولات", address: "products" },
        { title: "جدید", address: "new" },
        { title: "نمایش", address: "view" },
        { title: "مشاهده", address: "show" },
        { title: "ویرایش", address: "edit" },
        { title: "عکس", address: "picture" },
        { title: "گالری", address: "gallery" },
        { title: "نشانی ها", address: "addresses" },
        { title: "علاقه مندی ها", address: "favourites" },
        { title: "سبد خرید", address: "cart" },
        // { title: "", address: "" },
    ];

    const CurrentStep = ({ step, lastOne }) => {
        const info = addressList.filter((item) => item.address == step)[0];
        const linkTo = pathname.slice(
            0,
            pathname.indexOf(info.address) + info.address.length
        );

        const handleClick = () => {
            // alert(linkTo);
            if (linkTo == "") goto({ page: "/" });
            else goto({ page: linkTo });
        };

        return (
            <Link
                onClick={handleClick}
                sx={{
                    fontSize: "0.5rem",
                    color: "black",
                    textDecoration: "none",
                    cursor: lastOne ? "default" : "pointer",
                    "&:hover": lastOne
                        ? {}
                        : {
                              color: "red",
                          },
                }}
            >
                {info.title}
                {!lastOne && " >"}
            </Link>
        );
    };

    return (
        <Box sx={{ p: 2, display: "flex", gap: 1 }}>
            {steps?.map((step, index) => {
                return (
                    <CurrentStep
                        step={step}
                        key={index}
                        lastOne={steps.length - 1 == index}
                    />
                );
            })}
        </Box>
    );
};

export default BreadCrumbs;
