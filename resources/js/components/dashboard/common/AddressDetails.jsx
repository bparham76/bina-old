import {
    Box,
    Typography,
    Button,
    TextField,
    useMediaQuery,
    MenuItem,
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import { useSetWebPage } from "../../../features/shop/ShopEcosystem";

import DashboardPage, { DashboardPagePart } from "../DashboardPage";
import MapSelector from "../../general/MapSelector";

const AddressDetails = ({ edit }) => {
    const mobile = useMediaQuery("(max-width: 450px)");
    const goto = useSetWebPage();
    const { state } = useLocation();

    const [position, setPosition] = useState([35.65, 51.35]);

    const [provinces, setProvinces] = useState({});
    const [counties, setCounties] = useState({});
    const [cities, setCities] = useState({});

    const [province, setProvince] = useState(0);
    const [county, setCounty] = useState(0);
    const [city, setCity] = useState(0);

    useEffect(() => {
        axios.get("/api/provinces").then((r) => setProvinces(r.data));
    }, []);

    useEffect(() => {
        if (province != 0)
            axios
                .get("/api/counties?province=" + province)
                .then((r) => setCounties(r.data));
        setCounty(0);
        setCity(0);
        setCities([]);
    }, [province]);

    useEffect(() => {
        if (county != 0)
            axios
                .get("/api/cities?county=" + county)
                .then((r) => setCities(r.data));
        setCity(0);
    }, [county]);

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
                <TextField
                    select
                    defaultValue={0}
                    label="استان"
                    value={province}
                    onChange={(e) => setProvince(e.target.value)}
                >
                    <MenuItem value={0}>انتخاب کنید</MenuItem>
                    {provinces.length > 0 &&
                        provinces.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.name}
                            </MenuItem>
                        ))}
                </TextField>
                <TextField
                    select
                    defaultValue={0}
                    value={county}
                    label="شهرستان"
                    onChange={(e) => setCounty(e.target.value)}
                >
                    <MenuItem value={0}>انتخاب کنید</MenuItem>
                    {counties.length > 0 &&
                        counties.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.name}
                            </MenuItem>
                        ))}
                </TextField>
                <TextField
                    select
                    defaultValue={0}
                    value={city}
                    label="شهر"
                    onChange={(e) => setCity(e.target.value)}
                >
                    <MenuItem value={0}>انتخاب کنید</MenuItem>
                    {cities.length > 0 &&
                        cities.map((item) => (
                            <MenuItem key={item.id} value={item.id}>
                                {item.name}
                            </MenuItem>
                        ))}
                </TextField>
            </DashboardPagePart>

            <DashboardPagePart>
                <TextField label="کد پستی" />
                <TextField label="پلاک" />
            </DashboardPagePart>
            <DashboardPagePart full>
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
                    onClick={(e) =>
                        goto({ page: "/dashboard/addresses", authCheck: false })
                    }
                >
                    بازگشت
                </Button>
            </DashboardPagePart>
        </DashboardPage>
    );
};

export default AddressDetails;
