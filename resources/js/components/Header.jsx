import {
    Grid,
    Stack,
    Container,
    Typography,
    Paper,
    // useScrollTrigger,
    useMediaQuery,
} from "@mui/material";
import DashboardController from "./DashboardController";
import MegaMenu from "./MegaMenu";
import SearchGeneral from "./SearchGeneral";

const Header = () => {
    // const scrollTrigger = useScrollTrigger();
    const showMegaMenu = useMediaQuery("(min-width:768px)");
    return (
        <>
            <Stack
                sx={{
                    position: "fixed",
                    width: "100vw",
                }}
            >
                <Paper
                    elevation={2} //{scrollTrigger ? 4 : 0}
                    square
                    sx={{ pt: 4, pb: 1, zIndex: 1000 }}
                >
                    <Container>
                        <Grid container spacing={1} alignItems="center">
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
