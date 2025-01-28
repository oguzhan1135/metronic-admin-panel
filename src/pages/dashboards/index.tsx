import { Link } from "react-router";
import Widget from "../../components/dashboards/widget";
import Linkedin from '../../assets/icon/linkedin.svg'
import Youtube from '../../assets/icon/youtube.svg'
import Instagram from '../../assets/icon/instagram.svg'
import Tiktok from '../../assets/icon/tiktok.svg'
import AvatarGroup from "../../assets/icon/avatar-group.svg"
import WidgetBackground from '../../assets/icon/widget-background.svg'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { CiLocationOn, CiShop } from "react-icons/ci";
import { FaArrowUp, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
import Meeting from '../../assets/icon/meeting.svg';
import { FiUsers } from "react-icons/fi";

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

                    <Link to={"/user/publicProfiles/profiles/default"} className="px-3 py-2.5 rounded-md border border-gray-300 flex justify-center hover: group">
                        <span className="text-b-12-12-500 text-gray-700 group-hover:text-gray-900">View Profile</span>
                    </Link>

                </div>

                <div className="grid grid-cols-12 gap-[30px]">
                    {/* widget area */}
                    <div className="grid lg:col-span-4 col-span-12 grid-cols-4 grid-rows-1 gap-[30px]">
                        <div className="grid col-span-2">
                            <Widget
                                image={Linkedin}
                                name="Amazing mates"
                                count={9300}
                            />
                        </div>
                        <div className="grid col-span-2">
                            <Widget
                                image={Youtube}
                                name="Lessons Views"
                                count={24000}
                            />
                        </div>
                        <div className="grid col-span-2">
                            <Widget
                                image={Instagram}
                                name="New subscribers"
                                count={608}
                            />
                        </div>
                        <div className="grid col-span-2">
                            <Widget
                                image={Tiktok}
                                name="Stream audience"
                                count={2500}
                            />
                        </div>

                    </div>
                    {/* Get started area */}
                    <div className="grid lg:col-span-8 col-span-12 relative  border rounded-md min-h-[350px] ">
                        <div className="flex flex-col  ">
                            <div className="flex flex-row">
                                <div className="flex flex-col gap-4 p-5">
                                    <img src={AvatarGroup} className="w-32 h-10" />
                                    <div className="max-w-[255px]">
                                        <span className="text-[22px] leading-8 font-semibold text-gray-900">Connect Today & Join
                                        </span>
                                        <span className="text-primary leading-8 font-semibold text-[22px]"> the KeenThemes Network</span>
                                    </div>
                                    <p className="max-w-[360px] text-b-14-22-400 text-gray-700">Enhance your projects with premium themes and templates. Join the KeenThemes community today for top-quality designs and resources.</p>
                                </div>
                                <img src={WidgetBackground} alt="" className="absolute right-0 -z-10 size-auto" />
                            </div>
                            <div className="bg-white rounded-b-md border-l border border-gray-200 p-4 flex justify-center items-center absolute bottom-0 w-full">
                                <span className="text-b-13-14-500 text-primary">Get Started</span>
                            </div>
                        </div>
                    </div>
                    {/* Highlights area */}
                    <div className="grid lg:col-span-4 col-span-12 border rounded-md border-gray-300">

                        <div className="flex flex-col w-full">
                            <div className=" flex flex-row px-[30px] py-5 border-b  justify-between items-center ">
                                <span>Highlights</span>
                                <HiOutlineDotsVertical />
                            </div>
                            <div className="flex flex-col py-5 px-[30px] gap-2">

                                <span>All time sales</span>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-h-30-30-600">$295.7k</span>
                                    <div className="rounded-md px-1.5 py-[5px] flex flex-row items-center justify-center bg-success-light border border-success">
                                        <span className="text-success">+2.7%</span>
                                    </div>

                                </div>
                                <div className="flex flex-col gap-5 pt-3 border-b border-gray-300 pb-5">
                                    <div className="grid grid-cols-12 gap-1 ">
                                        <span className="grid col-span-7 bg-success rounded-md "></span>
                                        <span className="grid col-span-3 bg-orange-500 rounded-md"></span>
                                        <span className="grid col-span-2 bg-purple-600 rounded-md lg:p-2 p-1"></span>

                                    </div>

                                    <div className="flex flex-row items-center gap-4 flex-wrap">
                                        <div className="flex flex-row gap-[7px] items-center">
                                            <span className="bg-success rounded-full p-2"></span>
                                            <span className="text-b-14-22-400 text-gray-800">Metronic</span>
                                        </div>
                                        <div className="flex flex-row gap-[7px] items-center">
                                            <span className="bg-orange-500 rounded-full p-2"></span>
                                            <span className="text-b-14-22-400 text-gray-800">Bundle</span>
                                        </div>
                                        <div className="flex flex-row gap-[7px] items-center">
                                            <span className="bg-purple-600 rounded-full p-2"></span>
                                            <span className="text-b-14-22-400 text-gray-800">MetronicNest</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4 items-center ">
                                    <div className="flex flex-row justify-between items-center w-full flex-wrap ">
                                        <div className="flex flex-row items-center gap-[6px]">
                                            <CiShop />
                                            <span className="text-b-14-14-400 text-gray-900 ">Online Store</span>
                                        </div>
                                        <div className="flex flex-row items-center  gap-7 ">
                                            <span className="">$172k</span>
                                            <div className="flex flex-row items-center gap-1">
                                                <FaArrowUp className="text-success" />
                                                <span className="text-b-14-14-500 text-gray-800">3.9 %</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row justify-between items-center w-full flex-wrap">
                                        <div className="flex flex-row items-center gap-[6px]">
                                            <FaFacebook />
                                            <span className="text-b-14-14-400 text-gray-900">Facebook</span>
                                        </div>
                                        <div className="flex flex-row items-center flex-wrap gap-7 ">
                                            <span className="">$85k</span>
                                            <div className="flex flex-row items-center gap-1">
                                                <FaArrowDown className="text-danger" />
                                                <span className="text-b-14-14-500 text-gray-800">0.7 %</span>
                                            </div>
                                        </div>


                                    </div>

                                    <div className="flex flex-row justify-between items-center w-full flex-wrap">
                                        <div className="flex flex-row items-center gap-[6px]">
                                            <FaInstagram />
                                            <span className="text-b-14-14-400 text-gray-900">Instagram</span>
                                        </div>
                                        <div className="flex flex-row items-center flex-wrap gap-7 ">
                                            <span className="">$36k</span>
                                            <div className="flex flex-row items-center gap-1">
                                                <FaArrowUp className="text-success" />
                                                <span className="text-b-14-14-500 text-gray-800">8.2 %</span>
                                            </div>
                                        </div>


                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                    {/* Get started area */}
                    <div className="grid lg:col-span-8 col-span-12 bg-red-400 rounded-md p-2">
                        Eraning Chart Area
                    </div>
                    {/* Team Meeting Area */}
                    <div className="grid lg:col-span-4 col-span-12 border rounded-md border-gray-300 relative min-h-96">
                        <div className="flex flex-col gap-[33.5px] p-[30px]">
                            <div className="flex justify-between items-center ">
                                <div className="flex flex-col flex-start gap-2.5">
                                    <span className="text-h-22-22-600">Team Meeting</span>
                                    <span className="text-b-14-14-600">09:00 - 09:30 </span>
                                </div>
                                <img src={Meeting} alt="" />
                            </div>
                            <p className="text-b-14-22-400 text-gray-800">Team meeting to discuss strategies, outline project milestones, define key goals, and establish clear timelines.</p>

                            <div className="flex bg-gray-100 p-5 flex-row gap-10">
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-row gap-1.5 items-center">
                                        <CiLocationOn />
                                        <span>Location</span>
                                    </div>
                                    <span>Amsterdam</span>
                                </div>
                                <div className="flex flex-col gap-5">
                                    <div className="flex flex-row gap-1.5 items-center">
                                        <FiUsers />
                                        <span>Team</span>
                                    </div>
                                    <img src={AvatarGroup} className="w-24 h-7" />
                                </div>
                            </div>

                        </div>

                        <div className="bg-white rounded-b-md border-l border border-gray-200 p-4 flex justify-center items-center absolute bottom-0 w-full">
                            <span className="text-b-13-14-500 text-primary border-b-2 border-dotted ">Join Meeting</span>
                        </div>
                    </div>
                    {/* Teams Area */}
                    <div className="grid lg:col-span-8 col-span-12 bg-red-400 rounded-md p-2">
                        Team table Area
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Dashboard;
