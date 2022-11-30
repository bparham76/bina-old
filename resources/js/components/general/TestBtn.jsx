import { useAuth } from "../../features/auth/AuthEcosystem";
import { Button } from "@mui/material";

const TestBtn = () => {
    const { setPhone, setCode } = useAuth();

    const handleClick = () => {
        setPhone("09117186757");
    };

    return <Button onClick={handleClick}>Click Me!</Button>;
};

export default TestBtn;
