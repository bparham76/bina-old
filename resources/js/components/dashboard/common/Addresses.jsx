import DashboardPage, { DashboardPagePart } from "../DashboardPage";
import { Box, Button, Paper, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { useDashboardSettings } from "../../../features/dashboard/DashboardEcosystem";

const Addresses = () => {
    const mobile = useMediaQuery("(max-width: 450px)");
    const { createNewAddress } = useDashboardSettings();

    return (
        <DashboardPage>
            <DashboardPagePart full>
                <Typography variant="h4">نشانی ها</Typography>
            </DashboardPagePart>
            <DashboardPagePart mdSize={6}>
                <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                    نشانی های مورد استفاده برای ارسال سفارش و فاکتور ها را در
                    این صفحه ثبت نمایید.
                </Typography>
            </DashboardPagePart>
            <DashboardPagePart mdSize={6}>
                <Box
                    sx={{ display: "flex", justifyContent: "flex-end", gap: 2 }}
                >
                    <Button
                        variant="outlined"
                        sx={{ p: 2, width: mobile ? "100%" : "50%" }}
                        onClick={createNewAddress}
                    >
                        افزودن نشانی جدید
                    </Button>
                </Box>
            </DashboardPagePart>
            <DashboardPagePart full>
                <Typography variant="h6">فهرست نشانی های ثبت شده</Typography>
                {[...new Array(5)].map((index) => (
                    <AddressEntry key={index} />
                ))}
            </DashboardPagePart>
        </DashboardPage>
    );
};

export default Addresses;

export const AddressEntry = (props) => {
    const [hoverOn, setHoverOn] = useState(false);

    return (
        <Paper
            elevation={hoverOn ? 8 : 4}
            onMouseEnter={() => setHoverOn(true)}
            onMouseLeave={() => setHoverOn(false)}
        >
            <Box
                sx={{
                    p: 2,
                    px: 4,
                    width: "100%",
                }}
            >
                Hello
            </Box>
        </Paper>
    );
};
