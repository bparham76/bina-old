import MobileDrawer from "./MobileDrawer";

const SearchDrawer = (props) => {
    const { show, onClose, ...others } = props;

    return (
        <MobileDrawer anchor="top" open={show} onClick={onClose} {...others}>
            search
        </MobileDrawer>
    );
};

export default SearchDrawer;
