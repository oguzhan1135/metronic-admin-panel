import { useEffect, useState } from "react";
import { metronicContext } from "../../context/layoutContet";
import Navigation from "./navigation";
import Search from '../../assets/icon/magnifier.svg';
import NotificationImg from '../../assets/icon/notification-status.svg';
import Messages from '../../assets/icon/messages.svg';
import Apps from '../../assets/icon/apps.svg';
import ExampleUser from '../../assets/icon/example-user.svg';
import User from './dropdowns/user';
import DropdownApps from "../navbar/dropdowns/apps";
import Chats from '../navbar/dropdowns/chat'
import Notification from "./dropdowns/notification";
export interface Dropdown {
    id: number;
    tag: string;
    status: boolean;
    icon: React.ReactNode;
}

const Navbar = () => {
    const { sidebarIsOpen } = metronicContext();
    const [selectedDropdown, setSelectedDropdown] = useState<Dropdown | null>(null);

    const [dropdowns, setDropdowns] = useState<Dropdown[]>([
        {
            id: 3,
            tag: "notifications",
            status: false,
            icon: <img src={NotificationImg} alt="NotificationImg" />,
        },
        {
            id: 4,
            tag: "chat",
            status: false,
            icon: <img src={Messages} alt="chat" />,
        },
        {
            id: 2,
            tag: "apps",
            status: false,
            icon: <img src={Apps} alt="Apps" />,
        },
        {
            id: 1,
            tag: "user",
            status: false,
            icon: (
                <span className="w-9 h-9 rounded-full border-2 border-green-600 overflow-hidden">
                    <img src={ExampleUser} alt="ExampleUser" />
                </span>
            ),
        },
    ]);

    const handleDropdownControl = (dropdownName: string) => {
        setDropdowns((prevDropdowns) => {
            const updatedDropdowns = prevDropdowns.map((item) =>
                item.tag === dropdownName
                    ? { ...item, status: !item.status }
                    : { ...item, status: false }
            );

            const selected = updatedDropdowns.find((item) => item.tag === dropdownName && item.status);

            setSelectedDropdown(selected || null);
            return updatedDropdowns;
        });
    };

    const closeDropdowns = () => {
        setDropdowns((prevDropdowns) =>
            prevDropdowns.map((item) => ({ ...item, status: false }))
        );
        setSelectedDropdown(null);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest(".dropdown-container")) {
                closeDropdowns();
            }
        };

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeDropdowns();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    const location = window.location.pathname

    const modalPages = [
        "/user/publicProfiles/profiles/modal",
        "/user/myAccount/settingModal",
        "/user/authentication/welcomeMessage",
        "/user/authentication/accountDeactivatedModal",
    ]
    return (
        <div
            className={`flex w-full h-20 px-10 py-8 fixed ${sidebarIsOpen ? "lg:pl-[110px]" : "lg:pl-[320px]"
                } transition-all duration-500 ease-in-out ${modalPages.includes(location) ? " -z-10" : "z-10"}  bg-white dark:bg-coal-500`}
        >
            <div className="flex flex-row justify-between items-center w-full">
                <Navigation />
                <div className="flex flex-row gap-5 relative dropdown-container bg-white dark:bg-coal-500">
                    <img src={Search} alt="search" className="md:flex hidden cursor-pointer" />

                    {dropdowns.map((item, index) => (
                        <div
                            key={item.id}
                            onClick={() => handleDropdownControl(item.tag)}
                            className={`flex items-center justify-center ${index !== dropdowns.length - 1 ? "hidden md:flex" : "flex"
                                } cursor-pointer`}
                        >
                            {item.icon}
                        </div>
                    ))}


                    <div
                        className={`${selectedDropdown?.tag === "user" && selectedDropdown.status ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                            } absolute right-0 transition-all duration-300 ease-in-out`}
                    >
                        <User />
                    </div>
                    <div
                        className={`${selectedDropdown?.tag === "apps" && selectedDropdown.status ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                            } absolute right-0 transition-all duration-300 ease-in-out`}
                    >
                        <DropdownApps />
                    </div>
                    <div
                        className={`${selectedDropdown?.tag === "chat" && selectedDropdown.status ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                            } absolute right-0 transition-all duration-300 ease-in-out`}
                    >
                        <Chats closeDropdowns={closeDropdowns} />


                    </div>
                    <div
                        className={`${selectedDropdown?.tag === "notifications" && selectedDropdown.status ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                            } absolute right-0 transition-all duration-300 ease-in-out`}
                    >
                        <Notification closeDropdowns={closeDropdowns} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
