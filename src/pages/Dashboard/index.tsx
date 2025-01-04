import { Link } from "react-router";
interface DashboardProps {
    isOpen: boolean;
}
const Dashboard: React.FC<DashboardProps> = ({ isOpen }) => {
    return (
        <div className={`bg-gray-300 p-6 pt-24 ml-0 ${isOpen ? 'lg:ml-[280px]' : 'lg:ml-[70px]'}  transition-all w-full duration-500 ease-in-out  z-40`}>
            <div className="flex flex-col">
                <h1 className=" text-red-700 pb-40">
                    Dashboard
                </h1>
                <h1 className=" text-red-700 pb-40">
                    Dashboard
                </h1>

                <p className="text-gray-600">
                    Welcome to the Dashboard page.
                </p>
            </div>

            <nav className="flex justify-center space-x-4">
                <Link
                    to="/user"
                    className="text-blue-500 hover:text-blue-700 font-medium"
                >
                    User Page
                </Link>
            </nav>
        </div>
    );
};

export default Dashboard;
