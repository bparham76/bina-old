import React from "react";

import {
    Box,
    Typography,
    Button,
    TextField,
    useMediaQuery,
    MenuItem,
} from "@mui/material";
import { useEffect, useState, useReducer, useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";
import { useSetWebPage } from "../../../features/shop/ShopEcosystem";
import DashboardPage, { DashboardPagePart } from "../DashboardPage";
import MapSelector from "../../general/MapSelector";
import addressReducer, {
    defaultAddress,
    compareAddresses,
} from "../../../features/dashboard/addressReducer";

import useServer from "../../../features/useServer";

const AddressEdit = () => {
    const { state } = useLocation();
    const mobile = useMediaQuery("(max-width: 450px)");
    const goto = useSetWebPage();
    const [data, dispatch] = useReducer(addressReducer, defaultAddress);
    const defaultData = useRef();

    const { loading, response, sendRequest } = useServer();
    const [render, setRender] = useState(false);

    const [position, setPosition] = useState([35.65, 51.35]);

    const [provinces, setProvinces] = useState({});
    const [counties, setCounties] = useState({});
    const [cities, setCities] = useState({});

    const [province, setProvince] = useState(0);
    const [county, setCounty] = useState(0);
    const [city, setCity] = useState(0);

    const [canChangeLocation, setCanChangeLocation] = useState(false);

    const [send, setSend] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);

    const getProvinces = (callback = null) => {
        axios.get("/api/provinces").then((r) => {
            setProvinces(r.data);
            if (typeof callback == "function") callback();
        });
    };
    const getCounties = (province, callback = null) => {
        if (province != 0)
            axios.get("/api/counties?province=" + province).then((r) => {
                setCounties(r.data);
                if (typeof callback == "function") callback();
            });
    };
    const getCities = (county, callback = null) => {
        if (county != 0)
            axios.get("/api/cities?county=" + county).then((r) => {
                setCities(r.data);
                if (typeof callback == "function") callback();
            });
    };

    useEffect(() => {
        getProvinces(() => {
            sendRequest({
                url: "/api/address/get/single?id=" + state.id,
                method: "get",
            });
        });
    }, []);

    useEffect(() => {
        if (send) {
            sendRequest({
                url: "/api/address/update",
                method: "post",
                data: { id: state.id, ...data },
            });
        }
    }, [send]);

    useEffect(() => {
        if (!loading) {
            if (send) goto({ page: "/dashboard/addresses" });
            else if (response) {
                dispatch({ type: "all", payload: response });
                defaultData.current = response;
                setPosition([response?.latitude, response?.longitude]);
                getCounties(response?.province, () => {
                    getCities(response?.county, () => {
                        setProvince(response?.province);
                        setCounty(response?.county);
                        setCity(response?.city);
                        setRender(true);
                    });
                });
            }
        }
    }, [loading]);

    useEffect(() => {
        if (canChangeLocation) {
            getCounties(province, () => {
                setCounty(0);
                setCity(0);
                setCities([]);
            });
        }
    }, [province]);

    useEffect(() => {
        if (canChangeLocation) {
            getCities(county, () => {
                setCity(0);
            });
        }
    }, [county]);

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
            data?.city > 0 &&
            !compareAddresses(data, defaultData.current)
        )
            setCanSubmit(true);
        else setCanSubmit(false);
    }, [data]);

    return (
        <DashboardPage loading={loading || !render}>
            <DashboardPagePart full>
                <Typography variant="h4">ویرایش نشانی</Typography>
                <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                    در این بخش می توانید نشانی انتخاب شده را ویرایش نمایید.
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
                        if (!canChangeLocation) setCanChangeLocation(true);
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
                        if (!canChangeLocation) setCanChangeLocation(true);
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
                        if (!canChangeLocation) setCanChangeLocation(true);
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
                    onClick={(e) => {
                        Swal.fire({
                            title: "ثبت تغییرات",
                            text: "آیا مایل به ثبت تغییرات انجام شده هستید؟",
                            icon: "question",
                            showConfirmButton: true,
                            showDenyButton: true,
                            confirmButtonText: "بله",
                            denyButtonText: "خیر",
                            reverseButtons: true,
                        }).then((r) => r.isConfirmed && setSend(true));
                    }}
                >
                    افزودن
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    onClick={(e) => {
                        if (!canSubmit)
                            goto({
                                page: "/dashboard/addresses",
                                authCheck: false,
                            });
                        else {
                            Swal.fire({
                                title: "هشدار",
                                text: "آیا مایل به انصراف از ثبت تغییرات هستید؟",
                                icon: "warning",
                                showConfirmButton: true,
                                confirmButtonText: "بله",
                                showDenyButton: true,
                                denyButtonText: "خیر",
                                reverseButtons: true,
                            }).then(
                                (r) =>
                                    r.isConfirmed &&
                                    goto({
                                        page: "/dashboard/addresses",
                                        authCheck: false,
                                    })
                            );
                        }
                    }}
                >
                    بازگشت
                </Button>
            </DashboardPagePart>
        </DashboardPage>
    );
};

export default AddressEdit;
