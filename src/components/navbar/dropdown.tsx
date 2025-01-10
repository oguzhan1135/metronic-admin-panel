import React from "react";


interface DropdownProps {
    // handleOpenDropdown: (open: boolean) => void;
    isOpen: boolean;
}
const Dropdown: React.FC<DropdownProps> = ({ isOpen }) => {


    return (
        <div className={`bg-red-600 p-5 absolute top-12 right-1 ${isOpen?'flex':'hidden'}`}>
            Örnek Dropdown
        </div>
    )
}
export default Dropdown;