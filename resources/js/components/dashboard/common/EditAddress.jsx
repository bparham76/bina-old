import { useLocation } from "react-router-dom";

const EditAddress = () => {
    const { state } = useLocation();
    return (
        <div>
            {state.fuck} {state.id}
        </div>
    );
};

export default EditAddress;
