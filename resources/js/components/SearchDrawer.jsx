import MobileDrawer from "./MobileDrawer";

const SearchDrawer = (props) => {
    const { show, onClose, ...others } = props;

    return (
        <MobileDrawer anchor="bottom" open={show} onClick={onClose} {...others}>
            search
        </MobileDrawer>
    );
};

export default SearchDrawer;
