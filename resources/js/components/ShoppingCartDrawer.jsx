import MobileDrawer from "./MobileDrawer";

const ShoppingCartDrawer = (props) => {
    const { show, onClose, ...others } = props;

    return (
        <MobileDrawer anchor="left" open={show} onClick={onClose} {...others}>
            cart
        </MobileDrawer>
    );
};

export default ShoppingCartDrawer;
