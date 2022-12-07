import DashboardPage, { DashboardPagePart } from "../DashboardPage";
import {
    Box,
    Button,
    Paper,
    Typography,
    useMediaQuery,
    Grid,
} from "@mui/material";
import { useState } from "react";
import { useDashboardSettings } from "../../../features/dashboard/DashboardEcosystem";
import { Edit, PlaylistAdd } from "@mui/icons-material";
import MapViewer from "../../general/MapViewer";

import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

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
                        endIcon={<PlaylistAdd />}
                    >
                        افزودن نشانی جدید
                    </Button>
                </Box>
            </DashboardPagePart>
            <DashboardPagePart full>
                <Typography variant="h6">فهرست نشانی های ثبت شده</Typography>
                {[...new Array(5)].map((item, index) => (
                    <AddressEntry key={index} mobile={mobile} />
                ))}
            </DashboardPagePart>
        </DashboardPage>
    );
};

export default Addresses;

export const AddressEntry = (props) => {
    const { mobile } = props;
    const [hoverOn, setHoverOn] = useState(false);

    return (
        <Paper
            elevation={hoverOn ? 8 : 4}
            onMouseEnter={() => setHoverOn(true)}
            onMouseLeave={() => setHoverOn(false)}
        >
            <Grid container>
                <Grid item xs={12} md={4}>
                    <MapViewer
                        mobile={mobile}
                        height={180}
                        width={mobile ? "100%" : 300}
                        mapCenter={[36.82, 50.86]}
                        attributionControl={false}
                        zoomControl={false}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={8}
                    gap={2}
                    sx={{
                        pt: 2,
                        px: mobile ? 2 : 0,
                    }}
                >
                    <Grid item>عنوان:‌ {"محل کار"}</Grid>
                    <Grid item>
                        استان: {"مازندران"} - شهرستان: {"تنکابن"} -{" "}
                        {"الباقی نشانی"}
                    </Grid>
                    <Grid item>کد پستی: {"4681983933"}</Grid>
                    <Grid item>تلفن ثابت: {"01154236634"}</Grid>
                    <Grid
                        item
                        container
                        sx={{
                            p: 2,
                            justifyContent: mobile
                                ? "space-between"
                                : "flex-start",
                        }}
                    >
                        <Button
                            endIcon={<EditIcon />}
                            sx={{ px: 4, color: "grey" }}
                        >
                            ویرایش
                        </Button>
                        <Button
                            endIcon={<DeleteForeverIcon />}
                            sx={{ px: 4, color: "red" }}
                        >
                            حذف
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    );
};
