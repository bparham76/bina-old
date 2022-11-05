import {
    Grid,
    Stack,
    Container,
    Typography,
    Paper,
    useMediaQuery,
} from "@mui/material";
import DashboardController from "./DashboardController";
import MegaMenu from "./MegaMenu";
import SearchGeneral from "./SearchGeneral";

const Header = () => {
    const showMegaMenu = useMediaQuery("(min-width:768px)");
    const showHeader = useMediaQuery("(min-width: 450px)");

    if (!showHeader) return;

    return (
        <>
            <Stack
                sx={{
                    position: "fixed",
                    width: "100vw",
                    zIndex: 5000,
                }}
            >
                <Paper
                    elevation={2} //{scrollTrigger ? 4 : 0}
                    square
                >
                    <Container sx={{ py: 2 }}>
                        <Grid container spacing={0} alignItems="center">
                            <Grid item xs={12} md={3}>
                                <Typography variant="h4">
                                    نام فروشگاه
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack alignItems="start">
                                    <SearchGeneral />
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Stack alignItems="end">
                                    <DashboardController />
                                </Stack>
                            </Grid>
                        </Grid>
                    </Container>
                    {showMegaMenu && <MegaMenu />}
                </Paper>
            </Stack>
        </>
    );
};

export default Header;
