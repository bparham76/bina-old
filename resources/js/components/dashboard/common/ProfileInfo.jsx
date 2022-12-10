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
import DashboardPage, { DashboardPagePart } from "../DashboardPage";

const ProfileInfo = () => {
    const mobile = useMediaQuery("(max-width: 450px)");
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
                <TextField variant="outlined" label="شماره ملی" />
                <TextField variant="outlined" label="نام" />
                <TextField variant="outlined" label="نام خانوادگی" />
                <FormLabel>جنسیت</FormLabel>
                <RadioGroup row>
                    <FormControlLabel
                        value="m"
                        label="آقا"
                        control={<Radio />}
                    />
                    <FormControlLabel
                        value="f"
                        label="خانم"
                        control={<Radio />}
                    />
                </RadioGroup>
                <Typography variant="p" sx={{ fontSize: "0.8rem" }}>
                    اطلاعات تماس
                </Typography>
                <TextField variant="outlined" label="تلفن همراه" />
                <TextField variant="outlined" label="پست الکترونیکی" />
            </DashboardPagePart>
            <DashboardPagePart>
                <Typography variant="h6">اشخاص حقوقی</Typography>
                <TextField variant="outlined" label="شماره اقتصادی" />
                <TextField variant="outlined" label="شماره ثبت شرکت" />
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
                <TextField variant="outlined" label="شماره شبا حساب بانکی" />
                <TextField variant="outlined" label="شماره حساب بانکی" />
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
                >
                    ذخیره تغییرات
                </Button>
            </DashboardPagePart>
        </DashboardPage>
    );
};

export default ProfileInfo;
