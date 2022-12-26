import { Grid, Stack, useMediaQuery, Fade } from "@mui/material";
import LoadingSpinner from "../general/LoadingSpinner";

const DashboardPage = ({ children, loading, ...others }) => {
    const mobile = useMediaQuery("(max-width: 900px)");
    if (loading) return <LoadingSpinner />;
    return (
        <Fade in={true} timeout={700}>
            <Grid
                {...others}
                container
                spacing={mobile ? 4 : 2}
                sx={{
                    px: mobile ? 0 : 4,
                    mb: mobile ? 8 : 4,
                    zIndex: 2,
                }}
            >
                {children}
            </Grid>
        </Fade>
    );
};

export default DashboardPage;

export const DashboardPagePart = (props) => {
    const { children, mdSize, row, full, ...others } = props;
    return (
        <Grid
            item
            xs={12}
            md={full ? 12 : mdSize != null ? mdSize : 4}
            {...others}
        >
            <Stack direction={row && "row"} spacing={2}>
                {children}
            </Stack>
        </Grid>
    );
};
