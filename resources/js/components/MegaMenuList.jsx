import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vtp-${index}`}
            aria-labelledby={`vtp-${index}`}
            {...other}
        >
            {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
        </div>
    );
};
const MegaMenuList = () => {
    const [value, setValue] = useState(1);

    const handleChange = (event, value) => setValue(value);
    const handleChangeOnHover = (value) => setValue(value);

    return (
        <Box fullwidth sx={{ display: "flex" }}>
            <Tabs orientation="vertical" value={value} onChange={handleChange}>
                <Tab
                    label="salam"
                    aria-controls="vtp-0"
                    onMouseEnter={() => handleChangeOnHover(0)}
                />
                <Tab
                    label="salam"
                    aria-controls="vtp-1"
                    onMouseEnter={() => handleChangeOnHover(1)}
                />
                <Tab
                    label="salam"
                    aria-controls="vtp-2"
                    onMouseEnter={() => handleChangeOnHover(2)}
                />
                <Tab
                    label="salam"
                    aria-controls="vtp-3"
                    onMouseEnter={() => handleChangeOnHover(3)}
                />
            </Tabs>
            <TabPanel value={value} index={0}>
                hello
            </TabPanel>
            <TabPanel value={value} index={1}>
                hi
            </TabPanel>
            <TabPanel value={value} index={2}>
                how are you
            </TabPanel>
            <TabPanel value={value} index={3}>
                damn
            </TabPanel>
        </Box>
    );
};

export default MegaMenuList;
