import { useAuth } from "../../features/AuthProvider";
import { Button } from "@mui/material";

const TestBtn = () => {
    const authState = useAuth();

    const handleClick = () => {
        console.info(authState);
    };

    return <Button onClick={handleClick}>Click Me!</Button>;
};

export default TestBtn;
