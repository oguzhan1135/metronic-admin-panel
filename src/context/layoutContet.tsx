import React, { createContext, useContext, ReactNode, useState, useEffect, } from 'react';
import { useLocation } from "react-router-dom";

interface LayoutProps {
    sidebarWidth: number;
    sidebarIsOpen: boolean;
    setSidebarWidth: React.Dispatch<React.SetStateAction<number>>
    setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    searchModal: boolean;
    setSearchModal: React.Dispatch<React.SetStateAction<boolean>>
    settingModalOpen: boolean;
    setSettingModal: React.Dispatch<React.SetStateAction<boolean>>
    giveModal: boolean;
    setGiveModal: React.Dispatch<React.SetStateAction<boolean>>
    reportModal: boolean;
    setReportModal: React.Dispatch<React.SetStateAction<boolean>>
    shareModal: boolean;
    setShareModal: React.Dispatch<React.SetStateAction<boolean>>
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
    const [settingModalOpen, setSettingModal] = useState(true);
    const location = useLocation();
    const [modalOpen, setModalOpen] = useState(false);
    const [searchModal, setSearchModal] = useState(false);
    const [giveModal, setGiveModal] = useState(false);
    const [reportModal, setReportModal] = useState(false);
    const [shareModal, setShareModal] = useState(false);


    useEffect(() => {
        if (modalPages.includes(location.pathname)) {
            setModalOpen(true)
        } else {
            setModalOpen(false)
        }
    }, [location.pathname])

    return (
        <LayoutContext.Provider value={{
            sidebarWidth, setSidebarWidth, sidebarIsOpen, setSidebarIsOpen, modalOpen, setModalOpen, settingModalOpen, setSettingModal, searchModal, setSearchModal, giveModal, setGiveModal, reportModal, setReportModal, shareModal, setShareModal
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
