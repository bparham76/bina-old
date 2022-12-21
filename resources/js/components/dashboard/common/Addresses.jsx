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
import { useSetWebPage } from "../../../features/shop/ShopEcosystem";
import MapViewer from "../../general/MapViewer";
import { PlaylistAdd } from "@mui/icons-material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import LoadingSpinner from "../../general/LoadingSpinner";
import { useEffect } from "react";
import Swal from "sweetalert2";
import useServer from "../../../features/useServer";

const Addresses = () => {
    const mobile = useMediaQuery("(max-width: 450px)");
    const [data, setData] = useState(null);
    const [delItem, setDelItem] = useState(0);
    const goto = useSetWebPage();
    const { loading, response, sendRequest } = useServer();

    useEffect(() => {
        sendRequest({ url: "/api/address/get", method: "get" });
    }, []);

    useEffect(() => {
        if (loading) return;

        if (delItem == 0) setData(response);
        else {
            setData(data.filter((item) => item.id != delItem));
            setDelItem(0);
        }
    }, [loading]);

    useEffect(() => {
        if (delItem == 0) return;

        sendRequest({
            url: "/api/address/delete",
            method: "post",
            data: { id: delItem },
        });
    }, [delItem]);

    const AddressEntry = ({ entry }) => {
        const [hoverOn, setHoverOn] = useState(false);

        const editHandler = () => {
            goto({
                page: "/dashboard/addresses/edit",
                data: { id: entry.id },
            });
        };

        const deleteHandler = () => {
            Swal.fire({
                text: `آیا از حذف نشانی ${entry.title} اطمینان دارید؟`,
                title: "حذف نشانی",
                icon: "warning",
                showConfirmButton: true,
                showDenyButton: true,
                denyButtonText: "خیر",
                confirmButtonText: "بله",
                reverseButtons: true,
            }).then((r) => {
                if (r.isConfirmed) setDelItem(entry.id);
            });
        };

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
                            mapCenter={[entry.latitude, entry.longitude]}
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
                                            {entry.title}
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
                                            {entry.owner}
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
                                            {entry.text}
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
                                            {entry.po_box}
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
                                            {entry.phone}
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
                                onClick={editHandler}
                            >
                                ویرایش
                            </Button>
                            <Button
                                endIcon={<DeleteForeverIcon />}
                                sx={{ px: 4, color: "lightcoral" }}
                                onClick={deleteHandler}
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
        <DashboardPage loading={loading}>
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
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: 2,
                    }}
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
                {data
                    ? data.map((item, index) => (
                          <AddressEntry
                              entry={item}
                              key={index}
                              mobile={mobile}
                          />
                      ))
                    : "داده ای برای نمایش وجود ندارد."}
            </DashboardPagePart>
        </DashboardPage>
    );
};

export default Addresses;
