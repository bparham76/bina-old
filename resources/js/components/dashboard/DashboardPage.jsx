import { Grid, Stack, useMediaQuery } from "@mui/material";

const DashboardPage = ({ children, ...others }) => {
    const mobile = useMediaQuery("(max-width: 450px)");

    return (
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
