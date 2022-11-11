import {
    Grid,
    Stack,
    Container,
    Typography,
    Paper,
    useMediaQuery,
    Link,
} from "@mui/material";
import DashboardController from "./DashboardController";
import MegaMenu from "./MegaMenu";
import SearchGeneral from "./SearchGeneral";

const Header = () => {
    const showHeader = useMediaQuery("(min-width: 450px)");

    if (!showHeader)
        return (
            <>
                <Paper
                    sx={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: 45,
                        p: 1,
                        zIndex: 1000,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                    elevation={4}
                    square
                >
                    <Link href="/" underline="none" sx={{ color: "black" }}>
                        نام فروشگاه
                    </Link>
                    {/* <Typography variant="h5">نام فروشگاه</Typography> */}
                </Paper>
                <div className="w-full h-[50px]"></div>
            </>
        );

    return (
        <>
            <Stack
                sx={{
                    position: "fixed",
                    width: "100vw",
                    zIndex: 5000,
                }}
            >
                <Paper elevation={2} square>
                    <Container sx={{ py: 2 }}>
                        <Grid
                            container
                            spacing={0}
                            rowSpacing={2}
                            alignItems="center"
                        >
                            <Grid item xs={12} sm={3}>
                                <Link
                                    href="/"
                                    underline="none"
                                    sx={{ color: "black" }}
                                >
                                    <Typography variant="h4">
                                        نام فروشگاه
                                    </Typography>
                                </Link>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Stack alignItems="start">
                                    <SearchGeneral />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Stack alignItems="end">
                                    <DashboardController />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                    {showHeader && <MegaMenu />}
                </Paper>
            </Stack>
            <div className="w-full h-[150px]"></div>
        </>
    );
};

export default Header;
