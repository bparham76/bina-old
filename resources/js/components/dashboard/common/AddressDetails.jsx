import DashboardPage, { DashboardPagePart } from "../DashboardPage";
import {
    Box,
    Typography,
    Button,
    TextField,
    useMediaQuery,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import MapSelector from "../../general/MapSelector";
import { useState } from "react";

const AddressDetails = ({ edit }) => {
    const mobile = useMediaQuery("(max-width: 450px)");
    const navigate = useNavigate();
    const { state } = useLocation();
    const [position, setPosition] = useState([35.65, 51.35]);

    return (
        <DashboardPage>
            <DashboardPagePart full>
                {edit ? (
                    <>
                        <Typography variant="h4">ویرایش نشانی</Typography>
                        <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                            در این بخش می توانید نشانی ثبت شده را ویرایش نمایید.
                        </Typography>
                    </>
                ) : (
                    <>
                        <Typography variant="h4">افزودن نشانی جدید</Typography>
                        <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                            در این بخش می توانید نشانی جدیدی به منظور دریافت
                            سفارش و فاکتور خود ثبت نمایید.
                        </Typography>
                    </>
                )}
            </DashboardPagePart>
            <DashboardPagePart>
                <TextField label="عنوان" />
                <TextField label="نام تحویل گیرنده" />
                <TextField label="تلفن ثابت" />
            </DashboardPagePart>
            <DashboardPagePart>
                <TextField select label="استان"></TextField>
                <TextField select label="شهرستان"></TextField>
                <TextField label="کد پستی" />
            </DashboardPagePart>
            <DashboardPagePart>
                <TextField label="نشانی" multiline rows={7}></TextField>
            </DashboardPagePart>
            <DashboardPagePart full>
                <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                    انتخاب مکان روی نقشه
                </Typography>
                <Box sx={{ height: mobile ? "300px" : "500px", width: "100%" }}>
                    <MapSelector
                        mobile={mobile}
                        data={{ position, setPosition }}
                    />
                </Box>
            </DashboardPagePart>
            {!mobile && (
                <>
                    <DashboardPagePart></DashboardPagePart>
                    <DashboardPagePart></DashboardPagePart>
                </>
            )}
            <DashboardPagePart>
                <Button variant="contained" size="large">
                    {edit ? "ثبت تغییرات" : "افزودن"}
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    onClick={(e) => navigate("/dashboard/addresses")}
                >
                    بازگشت
                </Button>
            </DashboardPagePart>
        </DashboardPage>
    );
};

export default AddressDetails;
