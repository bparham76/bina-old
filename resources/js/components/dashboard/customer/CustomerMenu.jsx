import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomerMenu = (props) => {
    const navigate = useNavigate();
    const { onSelect } = props;

    return (
        <>
            <Button onClick={() => onSelect("fuckboy")}>salam</Button>
            <Button onClick={() => onSelect("fuckboy-asshole")}>khubi</Button>
            <Button onClick={() => onSelect("asshole")}>asshole</Button>
            <Button onClick={() => onSelect("dickhead")}>dickhead</Button>
            <Button onClick={() => onSelect("butthole")}>butthole</Button>
            <Button onClick={() => onSelect("bitch")}>whore</Button>
        </>
    );
};

export default CustomerMenu;
