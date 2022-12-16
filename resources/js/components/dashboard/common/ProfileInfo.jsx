import {
    TextField,
    RadioGroup,
    Radio,
    FormLabel,
    FormControlLabel,
    Typography,
    Button,
    useMediaQuery,
} from "@mui/material";
import Swal from "sweetalert2";
import DashboardPage, { DashboardPagePart } from "../DashboardPage";
import LoadingSpinner from "../../general/LoadingSpinner";
import { useState, useEffect, useRef } from "react";
import useFetch from "../../../features/useFetch";

const ProfileInfo = () => {
    const mobile = useMediaQuery("(max-width: 450px)");
    const [loading, setLoading] = useState(true);
    const [info, setInfo] = useState(null);
    const infoOrigin = useRef();

    const [edit, setEdit] = useState(false);

    const { done, result } = useFetch("/api/user/info", "get");

    useEffect(() => {
        if (done) setInfo(result.data);
    }, [done]);

    useEffect(() => {
        if (!info) return;
        infoOrigin.current = info;
        setLoading(false);
    }, [info]);

    const cancelHandler = () => {
        Swal.fire({
            title: "انصراف",
            text: "آیا مایل به انصراف از ویرایش اطلاعات کاربری هستید؟",
            icon: "question",
            showCancelButton: true,
            showConfirmButton: true,
            cancelButtonText: "خیر",
            confirmButtonText: "بله",
            reverseButtons: true,
        }).then((r) => {
            if (r.isConfirmed) setEdit(false);
        });
    };

    const submitHandler = () => {
        if (!edit)
            Swal.fire({
                title: "ویرایش",
                text: "آیا مایل به ویرایش اطلاعات کاربری هستید؟",
                icon: "question",
                showCancelButton: true,
                showConfirmButton: true,
                cancelButtonText: "خیر",
                confirmButtonText: "بله",
                reverseButtons: true,
            }).then((result) => {
                if (result.isConfirmed) setEdit(true);
            });
        else
            Swal.fire({
                title: "ثبت تغییرات",
                text: "آیا از ثبت تغییرات انجام شده اطمینان دارید؟",
                icon: "question",
                showCancelButton: true,
                showConfirmButton: true,
                cancelButtonText: "خیر",
                confirmButtonText: "بله",
                reverseButtons: true,
            }).then((result) => {
                if (result.isConfirmed) {
                    setEdit(false);
                }
            });
    };

    const changeHandler = (input) => {};

    if (!done || loading) return <LoadingSpinner />;

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
                />
                <TextField
                    variant="outlined"
                    label="نام"
                    value={info.first_name}
                    disabled={!edit}
                />
                <TextField
                    variant="outlined"
                    label="نام خانوادگی"
                    value={info.last_name}
                    disabled={!edit}
                />
                <FormLabel>جنسیت</FormLabel>
                <RadioGroup row value={info.sex}>
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
                    disabled={!edit}
                />
                <TextField
                    variant="outlined"
                    label="پست الکترونیکی"
                    value={info.email}
                    disabled={!edit}
                />
            </DashboardPagePart>
            <DashboardPagePart>
                <Typography variant="h6">اشخاص حقوقی</Typography>
                <TextField
                    variant="outlined"
                    label="شماره اقتصادی"
                    value={info.eco_no}
                    disabled={!edit}
                />
                <TextField
                    variant="outlined"
                    label="شماره ثبت شرکت"
                    value={info.reg_no}
                    disabled={!edit}
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
                />
                <TextField
                    variant="outlined"
                    label="شماره حساب بانکی"
                    value={info.acc_no}
                    disabled={!edit}
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
