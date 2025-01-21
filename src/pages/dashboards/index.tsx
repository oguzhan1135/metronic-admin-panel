import { Link } from "react-router";

const Dashboard = () => {

    return (
        <div className={``}>
            <div className="flex flex-col">
                <div className="flex flex-row items-center justify-between pb-10">
                    <div className="flex flex-col gap-2 ">
                        <h1 className=" text-gray-900 text-b-20-20-500">
                            Dashboard
                        </h1>
                        <span className="text-b-14-14-400 text-gray-700">Central Hub for Personal Customization</span>
                    </div>

                    <div className="px-3 py-2.5 rounded-md border border-gray-300 flex justify-center">
                        <span className="text-b-12-12-500 text-gray-700">View Profile</span>
                    </div>

                </div>
                <div className=" grid grid-cols-12 gap-[30px]">
                    <div className="grid col-span-5 gap-[30px]">
                        <div className="flex flex-row gap-[30px]">
                            <div className="rounded-md p-3 flex flex-grow border border-gray-200">1.alan</div>
                            <div className="rounded-md p-3 flex flex-grow border border-gray-200">1.alan</div>

                        </div>
                        <div className="flex flex-row gap-[30px]">
                            <div className="rounded-md p-3 flex flex-grow border border-gray-200">1.alan</div>
                            <div className="rounded-md p-3 flex flex-grow border border-gray-200">1.alan</div>

                        </div>
                    </div>
                    <div className="grid col-span-7 p-5  border border-gray-200">Right-Area</div>
        
                    <div className="grid col-span-5 gap-[30px] rounded-md p-3 border border-gray-200">
                        <span>Highlights</span>                        
                    </div>
                    <div className="grid col-span-7 p-5  border border-gray-200">Earnings</div>
                    <div className="grid col-span-5 gap-[30px] rounded-md p-3 border border-gray-200">
                        <span>Team Meatings</span>                        
                    </div>
                    <div className="grid col-span-7 p-5  border border-gray-200">Teams Area</div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
