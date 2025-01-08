import React, { createContext, useContext, ReactNode, useState, } from 'react';



interface LayoutProps {
    sidebarWidth: number;
    sidebarIsOpen: boolean;
    setSidebarWidth: React.Dispatch<React.SetStateAction<number>>
    setSidebarIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const LayoutContext = createContext<LayoutProps | undefined>(undefined);


export const LayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {


    const [sidebarWidth, setSidebarWidth] = useState(280);
    const [sidebarIsOpen, setSidebarIsOpen] = useState(false);


    return (
        <LayoutContext.Provider value={{
            sidebarWidth, setSidebarWidth, sidebarIsOpen, setSidebarIsOpen
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
