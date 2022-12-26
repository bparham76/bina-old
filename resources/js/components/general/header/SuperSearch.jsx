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
                        width: "100%",
                        height: "90%",
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        p: 2,
                        // bgcolor: "red",
                        // width: "100%",
                        // height: "100%",
                        // alignItems: "center",
                    }}
                >
                    جستجو
                </Box>
            </SwipeableDrawer>
        </>
    );
};

export default SuperSearch;
