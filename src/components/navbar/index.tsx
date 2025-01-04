
interface NavbarProps {
    isOpen: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen }) => {
    return (
        <div className={`flex w-full h-20 p-5 fixed bg-red-500 ml-0 ${isOpen ? 'lg:ml-[70px]' : 'lg:ml-[280px]'}  transition-all w-full duration-500 ease-in-out bg-transparent`}>Navbar yapısı</div>
    );
}

export default Navbar;