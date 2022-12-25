import {
    Box,
    Typography,
    Button,
    TextField,
    useMediaQuery,
    MenuItem,
} from "@mui/material";
import { useEffect, useState, useReducer } from "react";
import axios from "axios";
import { useSetWebPage } from "../../../features/shop/ShopEcosystem";
import DashboardPage, { DashboardPagePart } from "../DashboardPage";
import MapSelector from "../../general/MapSelector";
import addressReducer, {
    defaultAddress,
} from "../../../features/dashboard/addressReducer";

import useServer from "../../../features/useServer";

const AddressNew = () => {
    const mobile = useMediaQuery("(max-width: 800px)");
    const goto = useSetWebPage();
    const [data, dispatch] = useReducer(addressReducer, defaultAddress);

    const { loading, sendRequest } = useServer();

    const [position, setPosition] = useState([35.65, 51.35]);

    const [provinces, setProvinces] = useState({});
    const [counties, setCounties] = useState({});
    const [cities, setCities] = useState({});

    const [province, setProvince] = useState(0);
    const [county, setCounty] = useState(0);
    const [city, setCity] = useState(0);

    const [send, setSend] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);

    const getProvinces = () => {
        axios.get("/api/provinces").then((r) => setProvinces(r.data));
    };
    const getCounties = (province) => {
        if (province != 0)
            axios
                .get("/api/counties?province=" + province)
                .then((r) => setCounties(r.data));
    };
    const getCities = (county) => {
        if (county != 0)
            axios
                .get("/api/cities?county=" + county)
                .then((r) => setCities(r.data));
    };

    useEffect(() => {
        getProvinces();
    }, []);

    useEffect(() => {
        getCounties(province);
        setCities([]);
        setCounty(0);
        setCity(0);
    }, [province]);

    useEffect(() => {
        getCities(county);
        setCity(0);
    }, [county]);

    useEffect(() => {
        if (send)
            sendRequest({
                url: "/api/address/add",
                method: "post",
                data: data,
            });
    }, [send]);

    useEffect(() => {
        if (!loading && send) {
            goto({ page: "/dashboard/addresses" });
        }
    }, [loading]);

    useEffect(() => {
        dispatch({ type: "latitude", payload: position[0] });
        dispatch({ type: "longitude", payload: position[1] });
    }, [position]);

    useEffect(() => {
        if (
            data?.title?.length > 0 &&
            data?.owner?.length > 0 &&
            data?.text?.length > 0 &&
            data?.po_box?.length == 10 &&
            data?.no?.length > 0 &&
            data?.phone?.length == 11 &&
            data?.latitude > 0 &&
            data?.longitude > 0 &&
            data?.province > 0 &&
            data?.county > 0 &&
            data?.city > 0
        )
            setCanSubmit(true);
        else setCanSubmit(false);
    }, [data]);

    return (
        <DashboardPage loading={loading}>
            <DashboardPagePart full>
                <Typography variant="h4">افزودن نشانی جدید</Typography>
                <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                    در این بخش می توانید نشانی جدیدی به منظور دریافت سفارش و
                    فاکتور خود ثبت نمایید.
                </Typography>
            </DashboardPagePart>
            <DashboardPagePart>
                <TextField
                    label="عنوان"
                    value={data?.title}
                    onChange={(e) =>
                        dispatch({
                            type: "title",
                            payload: e.target.value,
                        })
                    }
                />
                <TextField
                    label="نام تحویل گیرنده"
                    value={data?.owner}
                    onChange={(e) =>
                        dispatch({
                            type: "owner",
                            payload: e.target.value,
                        })
                    }
                />
                <TextField
                    label="تلفن ثابت"
                    value={data?.phone}
                    onChange={(e) =>
                        dispatch({
                            type: "phone",
                            payload: e.target.value,
                        })
                    }
                />
            </DashboardPagePart>
            <DashboardPagePart>
                <TextField
                    select
                    defaultValue={0}
                    label="استان"
                    value={province}
                    onChange={(e) => {
                        setProvince(e.target.value);
                        dispatch({
                            type: "province",
                            payload: e.target.value,
                        });
                    }}
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
                    onChange={(e) => {
                        setCounty(e.target.value);
                        dispatch({
                            type: "county",
                            payload: e.target.value,
                        });
                    }}
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
                    onChange={(e) => {
                        setCity(e.target.value);
                        dispatch({
                            type: "city",
                            payload: e.target.value,
                        });
                    }}
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
                <TextField
                    label="کد پستی"
                    value={data?.po_box}
                    onChange={(e) =>
                        dispatch({
                            type: "po_box",
                            payload: e.target.value,
                        })
                    }
                />
                <TextField
                    label="پلاک"
                    value={data?.no}
                    onChange={(e) =>
                        dispatch({
                            type: "no",
                            payload: e.target.value,
                        })
                    }
                />
            </DashboardPagePart>
            <DashboardPagePart full>
                <TextField
                    label="نشانی"
                    multiline
                    rows={7}
                    value={data?.text}
                    onChange={(e) =>
                        dispatch({
                            type: "text",
                            payload: e.target.value,
                        })
                    }
                ></TextField>
            </DashboardPagePart>
            <DashboardPagePart full>
                <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                    انتخاب مکان روی نقشه
                </Typography>
                <Box
                    sx={{
                        height: mobile ? "300px" : "500px",
                        width: "100%",
                    }}
                >
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
                <Button
                    variant="contained"
                    size="large"
                    disabled={!canSubmit}
                    onClick={(e) => setSend(true)}
                >
                    افزودن
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    onClick={(e) =>
                        goto({
                            page: "/dashboard/addresses",
                            authCheck: false,
                        })
                    }
                >
                    بازگشت
                </Button>
            </DashboardPagePart>
        </DashboardPage>
    );
};

export default AddressNew;
