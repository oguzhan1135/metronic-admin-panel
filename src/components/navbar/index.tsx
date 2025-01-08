import { useEffect, useState } from "react";
import { metronicContext } from "../../context/layoutContet";
import Navigation from "./navigation";
import Search from '../../assets/icon/magnifier.svg'
import Notification from '../../assets/icon/notification-status.svg'
import Messages from '../../assets/icon/messages.svg'
import Apps from '../../assets/icon/apps.svg'
import ExampleUser from '../../assets/icon/example-user.svg'



const Navbar = () => {
    const { sidebarIsOpen } = metronicContext();

    return (
        <div
            className={`flex w-full h-20 px-10 py-8 fixed  ${sidebarIsOpen ? "lg:pl-[110px]" : "lg:pl-[320px]"
                } transition-all duration-500 ease-in-out`}
        >
            <div className="flex flex-row justify-between items-center w-full">
                <Navigation />
                <div className="flex flex-row gap-5 text-red-900">
                    <img src={Search} alt="search" />
                    <img src={Notification} alt="Notification" />
                    <img src={Messages} alt="search" />
                    <img src={Apps} alt="Apps" />
                    <span className="w-9 h-9 rounded-full border-2 border-green-600 overflow-hidden">
                    <img src={ExampleUser}  alt="ExampleUser" />
                    </span>

                </div>
            </div>
        </div>
    );
}

export default Navbar;