import { useMediaQuery } from "@mui/material";
import BottomNavigation from "./BottomNavigation";

export default function Footer(props) {
    const mobile = useMediaQuery("(max-width: 450px)");

    let classes = "w-full bg-slate-100 py-4 bottom-0 h-4 text-center";
    if (typeof props.stickToBottom == "boolean" && props.stickToBottom == true)
        classes += " fixed";

    return (
        <>
            <div className={classes}>
                <p className="text-sm">
                    تمامی حقوق این سامانه برای بینا محفوظ است.
                </p>
            </div>
            {props.showBottomNavigation && <BottomNavigation />}
            {mobile && (
                <div className="w-full bg-slate-100 p-0 m-0 h-[100px]"></div>
            )}
        </>
    );
}
