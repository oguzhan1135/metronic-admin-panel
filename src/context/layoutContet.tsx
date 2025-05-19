import React, { createContext, useContext, ReactNode, useState, useEffect, } from 'react';
import { useLocation } from "react-router-dom";


interface LayoutProps {
    sidebarWidth: number;
    sidebarIsOpen: boolean;
    setSidebarWidth: React.Dispatch<React.SetStateAction<number>>
    setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    settingModalOpen: boolean;
    setSettingModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const LayoutContext = createContext<LayoutProps | undefined>(undefined);

const modalPages = [
    "/user/publicProfiles/profiles/modal",
    "/user/myAccount/accountHome/settingModal",
    "/user/authentication/welcomeMessage",
    "/user/authentication/accountDeactivatedModal",
]
export const LayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {


    const [sidebarWidth, setSidebarWidth] = useState(280);
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
    const [settingModalOpen, setSettingModalOpen] = useState(true);
    const location = useLocation();
    const [modalOpen, setModalOpen] = useState(false);
    useEffect(() => {
        if (modalPages.includes(location.pathname)) {
            setModalOpen(true)
        } else {
            setModalOpen(false)
        }
    }, [location.pathname])

    return (
        <LayoutContext.Provider value={{
            sidebarWidth, setSidebarWidth, sidebarIsOpen, setSidebarIsOpen, modalOpen, setModalOpen, settingModalOpen, setSettingModalOpen
        }}>
            {children}
        </LayoutContext.Provider>
    );
};

export const metronicContext = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error('LayoutContext must be used within a LayoutProvider');
    }
    return context;
};
