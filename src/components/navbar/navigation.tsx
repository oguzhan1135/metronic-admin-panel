import { useEffect, useState } from "react";
import { useLocation } from "react-router";

const pathMapping: { [key: string]: string } = {
    user: "User",
    publicProfiles: "Public Profiles",
    profiles: "Profiles",
    creator: "Creator",
    default: "Default",
    company: "Company",
    nft: "NFT",
    blogger: "NFT",
    crm: "CRM",
    gamer: "Gamer",
    feeds: "Feeds",
    plain: "Plain",
    modal: "Modal",
    threeColumns: "3 Column",
    twoColumns: "2 Column ",
    works:"Works",
    teams:"Teams",
    network:"Network"
};

const Navigation = () => {
    const location = useLocation();
    const [breadcrumbs, setBreadcrumbs] = useState<string[]>([]);

    useEffect(() => {
        const pathArray = location.pathname.split("/").filter((p) => p);
        const mappedBreadcrumbs = pathArray.map((segment) => pathMapping[segment] || segment);
        setBreadcrumbs(mappedBreadcrumbs);
    }, [location]);

    return (
        <nav className="text-b-14-14-500">
            {breadcrumbs.map((breadcrumb, index) => (
                <span
                    key={index}
                    className={index === breadcrumbs.length - 1 ? "text-gray-900 font-semibold text-b-14-14-500" : "text-gray-700 text-b-14-14-400"}
                >
                    {breadcrumb}
                    {index < breadcrumbs.length - 1 && <span className="mx-2">{">"}</span>}
                </span>
            ))}
        </nav>
    );
};

export default Navigation;
