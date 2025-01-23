import { Link } from "react-router";
import Widget from "../../components/dashboards/widget";
import Linkedin from '../../assets/icon/linkedin.svg'
import Youtube from '../../assets/icon/youtube.svg'
import Instagram from '../../assets/icon/instagram.svg'
import Tiktok from '../../assets/icon/tiktok.svg'
import AvatarGroup from "../../assets/icon/avatar-group.svg"
import WidgetBackground from '../../assets/icon/widget-background.svg'

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
                <div className=" grid grid-cols-12 gap-[30px]">
                    <div className="grid xl:col-span-4 col-span-12 gap-[30px]">
                        <div className="flex flex-row gap-[30px]">
                            <div className="flex flex-grow border border-gray-200">
                                <Widget
                                    image={Linkedin}
                                    name="Amazing mates"
                                    count={9300}
                                />
                            </div>
                            <div className="flex flex-grow border border-gray-200">
                                <Widget
                                    image={Youtube}
                                    name="Lessons Views"
                                    count={24000}
                                />
                            </div>

                        </div>
                        <div className="flex flex-row gap-[30px]">
                            <div className="flex flex-grow border border-gray-200">
                                <Widget
                                    image={Instagram}
                                    name="New subscribers"
                                    count={608}
                                />
                            </div>
                            <div className="flex flex-grow border border-gray-200">
                                <Widget
                                    image={Tiktok}
                                    name="Stream audience"
                                    count={2500}
                                />
                            </div>

                        </div>
                    </div>
                    <div className="grid xl:col-span-8 col-span-12 rounded-md border border-gray-200 relative" >
                        <div className="flex flex-col ">
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
                                <img src={WidgetBackground} alt="" className="absolute right-0" />
                            </div>
                            <div className="bg-white rounded-b-md border-l border border-gray-200 p-4 flex justify-center items-center absolute bottom-0 w-full">
                                <span className="text-b-13-14-500 text-primary">Get Started</span>
                            </div>
                        </div>


                    </div>

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
