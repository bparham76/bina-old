export default function Footer(props) {
    let classes = "w-full bg-slate-100 py-4 bottom-0 h-4 text-center";
    if (typeof props.stickToBottom == "boolean" && props.stickToBottom == true)
        classes += " fixed";

    return (
        <div className={classes}>
            <p className="text-sm">
                تمامی حقوق این سامانه برای بینا محفوظ است.
            </p>
        </div>
    );
}
