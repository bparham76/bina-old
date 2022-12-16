import {
    TextField,
    RadioGroup,
    Radio,
    FormLabel,
    FormControlLabel,
    Typography,
    Button,
    useMediaQuery,
    Tooltip,
    Zoom,
    InputAdornment,
} from "@mui/material";
import Swal from "sweetalert2";
import DashboardPage, { DashboardPagePart } from "../DashboardPage";
import LoadingSpinner from "../../general/LoadingSpinner";
import { useState, useEffect, useRef, useReducer } from "react";
import axios from "axios";
import { useAuthenticate } from "../../../features/auth/AuthEcosystem";
import profileInfoReducer, {
    profileInfoCompare,
} from "../../../features/dashboard/profileInfoReducer";

const ProfileInfo = () => {
    const mobile = useMediaQuery("(max-width: 450px)");
    const { token, checkAuthState } = useAuthenticate();
    const [loading, setLoading] = useState(true);
    const [update, setUpdate] = useState(false);
    const [info, dispatch] = useReducer(profileInfoReducer, null);
    const infoOrigin = useRef(null);
    const [mailError, setMailError] = useState(false);
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        const get = async () => {
            setLoading(true);
            try {
                const res = await axios.get("/api/user/info", {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                });
                if (res != null) {
                    dispatch({ type: "all", payload: res.data });
                    infoOrigin.current = res.data;
                }
            } catch (e) {
                if (e.response.status == 401) checkAuthState();
            }
        };
        get();
    }, []);

    useEffect(() => {
        if (info == null) return;
        setLoading(false);
    }, [info]);

    useEffect(() => {
        if (!update) return;
        setUpdate(false);
        setLoading(true);
        const send = async () => {
            try {
                const res = axios.post("/api/user/add", info, {
                    headers: {
                        Accept: "application/json",
                        Authorization: "Bearer " + token,
                    },
                });
            } catch (e) {
            } finally {
                setLoading(false);
            }
        };
        send();
    }, [update]);

    const cancelHandler = () => {
        if (profileInfoCompare(info, infoOrigin.current)) {
            setEdit(false);
            return;
        }

        Swal.fire({
            title: "انصراف",
            text: "آیا مایل به انصراف از ویرایش اطلاعات کاربری هستید؟",
            icon: "question",
            showDenyButton: true,
            showConfirmButton: true,
            denyButtonText: "خیر",
            confirmButtonText: "بله",
            reverseButtons: true,
        }).then((r) => {
            if (r.isConfirmed) {
                setEdit(false);
                dispatch({ type: "all", payload: infoOrigin.current });
            }
        });
    };

    const submitHandler = () => {
        if (!edit)
            Swal.fire({
                title: "ویرایش",
                text: "آیا مایل به ویرایش اطلاعات کاربری هستید؟",
                icon: "question",
                showDenyButton: true,
                showConfirmButton: true,
                denyButtonText: "خیر",
                confirmButtonText: "بله",
                reverseButtons: true,
            }).then((result) => {
                if (result.isConfirmed) setEdit(true);
            });
        else {
            if (
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]+$/i.test(
                    info.email
                ) != true
            ) {
                setMailError(true);
                setTimeout(() => {
                    setMailError(false);
                }, 2000);
                return;
            }

            Swal.fire({
                title: "ثبت تغییرات",
                text: "آیا از ثبت تغییرات انجام شده اطمینان دارید؟",
                icon: "question",
                showDenyButton: true,
                showConfirmButton: true,
                denyButtonText: "خیر",
                confirmButtonText: "بله",
                reverseButtons: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    setUpdate(true);
                    setEdit(false);
                }
            });
        }
    };

    if (loading) return <LoadingSpinner />;

    return (
        <DashboardPage>
            <DashboardPagePart full>
                <Typography variant="h4">اطلاعات کاربر</Typography>
                <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                    اطلاعات هویتی، مالی و حقوقی مربوط به خود را در این صفحه
                    مشاهده و در صورت لزوم ویرایش نمایید.
                </Typography>
            </DashboardPagePart>
            <DashboardPagePart>
                <Typography variant="h6">اشخاص حقیقی</Typography>
                <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                    اطاعات هویتی
                </Typography>
                <TextField
                    variant="outlined"
                    label="شماره ملی"
                    value={info.pid}
                    disabled={!edit}
                    onChange={(e) =>
                        dispatch({ type: "pid", payload: e.target.value })
                    }
                />
                <TextField
                    variant="outlined"
                    label="نام"
                    value={info.first_name}
                    disabled={!edit}
                    onChange={(e) =>
                        dispatch({
                            type: "first_name",
                            payload: e.target.value,
                        })
                    }
                />
                <TextField
                    variant="outlined"
                    label="نام خانوادگی"
                    value={info.last_name}
                    disabled={!edit}
                    onChange={(e) =>
                        dispatch({
                            type: "last_name",
                            payload: e.target.value,
                        })
                    }
                />
                <FormLabel>جنسیت</FormLabel>
                <RadioGroup
                    row
                    value={info.sex}
                    onChange={(e) =>
                        dispatch({
                            type: "sex",
                            payload: e.target.value,
                        })
                    }
                >
                    <FormControlLabel
                        value={0}
                        label="آقا"
                        control={<Radio />}
                        disabled={!edit}
                    />
                    <FormControlLabel
                        value={1}
                        label="خانم"
                        control={<Radio />}
                        disabled={!edit}
                    />
                </RadioGroup>
                <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                    اطلاعات تماس
                </Typography>
                <TextField
                    variant="outlined"
                    label="تلفن همراه"
                    value={info.phone}
                    disabled
                />
                <Tooltip
                    open={mailError}
                    title="پست الکترونیکی را بصورت صحیح وارد کنید."
                    TransitionComponent={Zoom}
                >
                    <TextField
                        variant="outlined"
                        label="پست الکترونیکی"
                        value={info.email}
                        disabled={!edit}
                        onChange={(e) =>
                            dispatch({
                                type: "email",
                                payload: e.target.value,
                            })
                        }
                    />
                </Tooltip>
            </DashboardPagePart>
            <DashboardPagePart>
                <Typography variant="h6">اشخاص حقوقی</Typography>
                <TextField
                    variant="outlined"
                    label="شماره اقتصادی"
                    value={info.eco_no}
                    disabled={!edit}
                    onChange={(e) =>
                        dispatch({
                            type: "eco_no",
                            payload: e.target.value,
                        })
                    }
                />
                <TextField
                    variant="outlined"
                    label="شماره ثبت شرکت"
                    value={info.reg_no}
                    disabled={!edit}
                    onChange={(e) =>
                        dispatch({
                            type: "reg_no",
                            payload: e.target.value,
                        })
                    }
                />
                <Typography
                    variant="p"
                    sx={{
                        fontSize: "0.8rem",
                    }}
                >
                    به منظور استفاده از خدمات مختص مشتریان حقوقی، داشتن شماره
                    اقتصادی الزامی است.
                </Typography>
            </DashboardPagePart>
            <DashboardPagePart>
                <Typography variant="h6">اطلاعات مالی</Typography>
                <TextField
                    variant="outlined"
                    label="شماره شبا حساب بانکی"
                    value={info.shaba_no}
                    disabled={!edit}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">IR</InputAdornment>
                        ),
                    }}
                    onChange={(e) =>
                        dispatch({
                            type: "shaba_no",
                            payload: e.target.value,
                        })
                    }
                />
                <TextField
                    variant="outlined"
                    label="شماره حساب بانکی"
                    value={info.acc_no}
                    disabled={!edit}
                    onChange={(e) =>
                        dispatch({
                            type: "acc_no",
                            payload: e.target.value,
                        })
                    }
                />
                <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                    ارائه شماره شبا معتبر به منظور انجام مراودات بانکی همانند
                    برگشت وجه مابه التفاوت سفارشات ثبت شده، الزامی است.
                </Typography>
            </DashboardPagePart>
            {!mobile && (
                <>
                    <DashboardPagePart></DashboardPagePart>
                    <DashboardPagePart></DashboardPagePart>
                </>
            )}
            <DashboardPagePart>
                <Button
                    size="large"
                    variant="contained"
                    disabled={
                        edit && profileInfoCompare(info, infoOrigin.current)
                            ? true
                            : false
                    }
                    sx={{
                        bgcolor: "lightcoral",
                        "&:hover": { bgcolor: "red" },
                    }}
                    onClick={submitHandler}
                >
                    {edit ? "ذخیره تغییرات" : "ویرایش"}
                </Button>
                {edit && (
                    <Button
                        size="large"
                        variant="outlined"
                        onClick={cancelHandler}
                    >
                        انصراف
                    </Button>
                )}
            </DashboardPagePart>
        </DashboardPage>
    );
};

export default ProfileInfo;
