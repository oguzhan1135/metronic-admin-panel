import { Link } from "react-router";

const Dashboard = () => {

    return (
        <div className={``}>
            <div className="flex flex-col">
                <h1 className=" text-red-700 pb-40">
                    Dashboardasds
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
