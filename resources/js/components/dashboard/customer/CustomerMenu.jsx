import DashboardMenuButton from "../DashboardMenuButton";

const CustomerMenu = (props) => {
    const { onSelect } = props;

    return (
        <>
            <DashboardMenuButton onClick={(e) => onSelect("fuck")}>
                salam
            </DashboardMenuButton>
            <DashboardMenuButton onClick={(e) => onSelect("fuck")}>
                salam
            </DashboardMenuButton>
            <DashboardMenuButton onClick={(e) => onSelect("fuck")}>
                salam
            </DashboardMenuButton>
            <DashboardMenuButton onClick={(e) => onSelect("fuck")}>
                salam
            </DashboardMenuButton>
        </>
    );
};

export default CustomerMenu;
