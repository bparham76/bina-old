import { Button, Box, Paper } from "@mui/material";
import Footer from "../components/Footer";

export const Test = () => {
    const getApiMessage = () => {
        fetch("http://127.0.0.1:8000/api/test", { method: "post" })
            .then((res) => res.json())
            .then((res) => console.log(res.message))
            .catch(() => alert("fucked up connection"))
            .finally(() => alert("all is well"));
    };

    return (
        <>
            <Box margin={5}>
                <Paper>
                    <Box padding={2}>
                        <h1>این یک آزمایش است</h1>
                        <Button variant="contained" onClick={getApiMessage}>
                            سلام
                        </Button>
                    </Box>
                </Paper>
            </Box>
            <Footer />
        </>
    );
};
