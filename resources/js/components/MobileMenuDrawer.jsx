import MobileDrawer from "./MobileDrawer";

const MobileMenuDrawer = (props) => {
    const { show, onClose, ...others } = props;

    return (
        <MobileDrawer anchor="right" open={show} onClick={onClose} {...others}>
            Mega Menu
        </MobileDrawer>
    );
};

export default MobileMenuDrawer;
