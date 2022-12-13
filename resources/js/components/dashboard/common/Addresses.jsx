import DashboardPage, { DashboardPagePart } from "../DashboardPage";
import {
    Box,
    Button,
    Paper,
    Typography,
    useMediaQuery,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableRow,
} from "@mui/material";
import { useState } from "react";
import { useShop, useSetWebPage } from "../../../features/shop/ShopEcosystem";
import MapViewer from "../../general/MapViewer";
import { useNavigate } from "react-router-dom";
import { PlaylistAdd } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Addresses = () => {
    const mobile = useMediaQuery("(max-width: 450px)");
    const navigate = useNavigate();

    const goto = useSetWebPage();

    const { userAddresses } = useShop();

    const AddressEntry = ({ mobile, id }) => {
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
                            height={200}
                            width={mobile ? "100%" : "auto"}
                            mapCenter={[36.82, 50.86]}
                            attributionControl={false}
                            zoomControl={false}
                            touchZoom={false}
                            scrollWheelZoom={false}
                            doubleClickZoom={false}
                        />
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        md={8}
                        sx={{
                            pt: 2,
                        }}
                    >
                        <Grid
                            item
                            xs={12}
                            md={9}
                            sx={{
                                px: 2,
                            }}
                        >
                            <Table>
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                p: 0,
                                                borderBottom: "none",
                                                width: "30%",
                                            }}
                                            variant="head"
                                        >
                                            عنوان
                                        </TableCell>
                                        <TableCell
                                            sx={{ p: 0, borderBottom: "none" }}
                                        >
                                            محل کار {id}
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                p: 0,
                                                borderBottom: "none",
                                                width: "30%",
                                            }}
                                            variant="head"
                                        >
                                            نام تحویل گیرنده
                                        </TableCell>
                                        <TableCell
                                            sx={{ p: 0, borderBottom: "none" }}
                                        >
                                            پرهام باقی زاده
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                p: 0,
                                                borderBottom: "none",
                                                width: "30%",
                                            }}
                                            variant="head"
                                        >
                                            نشانی
                                        </TableCell>
                                        <TableCell
                                            sx={{
                                                p: 0,
                                                borderBottom: "none",
                                            }}
                                        >
                                            مازندران، تنکابن، خیابان میرزا طاهر
                                            تنکابنی، پاساژ طالقانی، طبقه همکف،
                                            واحد b8
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                p: 0,
                                                borderBottom: "none",
                                                width: "30%",
                                            }}
                                            variant="head"
                                        >
                                            کد پستی
                                        </TableCell>
                                        <TableCell
                                            sx={{ p: 0, borderBottom: "none" }}
                                        >
                                            4681983933
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell
                                            sx={{
                                                p: 0,
                                                borderBottom: "none",
                                                width: "30%",
                                            }}
                                            variant="head"
                                        >
                                            تلفن
                                        </TableCell>
                                        <TableCell
                                            sx={{ p: 0, borderBottom: "none" }}
                                        >
                                            01154236634
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={3}
                            sx={{
                                px: 2,
                                py: mobile ? 2 : 0,
                                display: "flex",
                                flexDirection: mobile ? "row" : "column",
                                justifyContent: mobile
                                    ? "center"
                                    : "flex-start",
                            }}
                        >
                            <Button
                                endIcon={<EditIcon />}
                                sx={{ px: 4, color: "gray" }}
                                onClick={(e) =>
                                    goto({
                                        page: "/dashboard/addresses/edit",
                                        data: { show: "show me" },
                                    })
                                }
                            >
                                ویرایش
                            </Button>
                            <Button
                                endIcon={<DeleteForeverIcon />}
                                sx={{ px: 4, color: "lightcoral" }}
                                onClick={() => alert("delete")}
                            >
                                حذف
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );
    };

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
                        sx={{
                            p: 2,
                            width: mobile ? "100%" : "50%",
                            color: "lightcoral",
                            borderColor: "lightcoral",
                            "&:hover": { borderColor: "lightcoral" },
                        }}
                        onClick={(e) =>
                            goto({ page: "/dashboard/addresses/new" })
                        }
                        endIcon={<PlaylistAdd />}
                    >
                        افزودن نشانی جدید
                    </Button>
                </Box>
            </DashboardPagePart>
            <DashboardPagePart full>
                <Typography variant="h6">نشانی های ثبت شده</Typography>
                {userAddresses.map((item, index) => (
                    <AddressEntry key={index} mobile={mobile} id={item.id} />
                ))}
            </DashboardPagePart>
        </DashboardPage>
    );
};

export default Addresses;
