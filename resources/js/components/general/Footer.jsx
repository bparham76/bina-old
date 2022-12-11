import { Box, Typography } from "@mui/material";

const Footer = () => {
    return (
        <>
            <Box
                sx={{
                    py: 2,
                    width: "100%",
                    height: 400,
                    backgroundColor: "pink",
                }}
            >
                <Typography variant="p" sx={{ fontSize: "0.8rem", px: 4 }}>
                    کلیه حقوق محفوظ است.
                </Typography>
            </Box>
        </>
    );
};

export default Footer;
