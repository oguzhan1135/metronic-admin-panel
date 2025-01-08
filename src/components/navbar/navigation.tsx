import { useLocation } from "react-router";
import { useEffect, useState } from "react";

const Navigation = () => {
    const [pagePath, setPagePath] = useState("");
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === "/") {
            setPagePath("Dashboards")
        }
        else if (location.pathname = "/user") {
            setPagePath("User")
        }
    }, [location.pathname])
    return (
        <span className="text-gray-900 text-b-14-14-500">{pagePath}</span>
    );
}

export default Navigation;