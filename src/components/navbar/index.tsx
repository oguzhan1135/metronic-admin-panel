import { useEffect, useState } from "react";
import { metronicContext } from "../../context/layoutContet";
import Navigation from "./navigation";
import Search from '../../assets/icon/magnifier.svg'
import Notification from '../../assets/icon/notification-status.svg'
import Messages from '../../assets/icon/messages.svg'
import Apps from '../../assets/icon/apps.svg'
import ExampleUser from '../../assets/icon/example-user.svg'
import User from './dropdowns/user'

export interface Dropdown {
    id: number;
    tag: string;
    status: boolean;
    icon: React.ReactNode
}


const Navbar = () => {
    const { sidebarIsOpen } = metronicContext();
    const [selectedDropdown, setSelectedDropdown] = useState<Dropdown>()
   

    const [dropdowns, setDropdowns] = useState<Dropdown[]>([


        {
            id: 3,
            tag: "notifications",
            status: false,
            icon: <img src={Notification} alt="Notification" />
        },
        {
            id: 4,
            tag: "chat",
            status: false,
            icon: <img src={Messages} alt="chat" />
        },
        {
            id: 2,
            tag: "apps",
            status: false,
            icon: <img src={Apps} alt="Apps" />
        },
        {
            id: 1,
            tag: "user",
            status: false,
            icon: <span className="w-9 h-9 rounded-full border-2 border-green-600 overflow-hidden">
                <img src={ExampleUser} alt="ExampleUser" />
            </span>
        },
    ])
    const handleDropdownControl = (dropdownName: string) => {
        setDropdowns((prevDropdowns) => {
            const updatedDropdowns = prevDropdowns.map((item) =>
                item.tag === dropdownName
                    ? { ...item, status: !item.status }
                    : { ...item, status: false } 
            );

            const selected = updatedDropdowns.find((item) => item.tag === dropdownName);

            if (selected) setSelectedDropdown(selected);

            return updatedDropdowns;
        });
    };

    return (
        <div
            className={`flex w-full h-20 px-10 py-8 fixed  ${sidebarIsOpen ? "lg:pl-[110px]" : "lg:pl-[320px]"
                } transition-all duration-500 ease-in-out z-50`}
        >
            <div className="flex flex-row justify-between items-center w-full">
                <Navigation />
                <div className="flex flex-row gap-5 text-red-900 relative">

                    <img src={Search} alt="search" />

                    {
                        dropdowns.map((item) => (
                            <div onClick={() => { handleDropdownControl(item.tag) }} className="flex items-center justify-center">
                                {item.icon}
                            </div>
                        ))
                    }
                    {
                        selectedDropdown?.status === true ?
                            <>
                                {
                                    selectedDropdown.tag === "user" ?
                                        <>
                                            <User />
                                        </> : null //to be continued...
                                }
                            </> : null
                    }


                </div>
            </div>
        </div >
    );
}

export default Navbar;