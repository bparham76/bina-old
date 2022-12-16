import { CircularProgress, Box, Typography } from "@mui/material";

const LoadingSpinner = () => {
    return (
        <Box
            sx={{
                minHeight: "500px",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <CircularProgress disableShrink />
            <Typography variant="h6">در حال بارگذاری...</Typography>
        </Box>
    );
};

export default LoadingSpinner;
