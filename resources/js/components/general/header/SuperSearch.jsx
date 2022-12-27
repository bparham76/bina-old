import { Button, SwipeableDrawer, useMediaQuery, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const SuperSearch = () => {
    const mediumScreen = useMediaQuery("(max-width: 600px)");
    const smallScreen = useMediaQuery("(max-width: 450px)");
    const [searchOpen, setSearchOpen] = useState(false);

    return (
        <>
            <Button
                sx={{
                    color: "black",
                }}
                size="large"
                startIcon={!smallScreen && <SearchIcon />}
                onClick={(e) => setSearchOpen(true)}
            >
                {smallScreen ? <SearchIcon /> : "جستجو"}
            </Button>
            <SwipeableDrawer
                onClose={(e) => setSearchOpen(false)}
                onOpen={(e) => setSearchOpen(true)}
                open={searchOpen}
                anchor="bottom"
                PaperProps={{
                    style: {
                        width: mediumScreen ? "100%" : "60%",
                        marginLeft: !mediumScreen && "auto",
                        marginRight: !mediumScreen && "auto",
                        height: "90%",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    },
                }}
            >
                <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
                    جستجو
                </Box>
            </SwipeableDrawer>
        </>
    );
};

export default SuperSearch;
