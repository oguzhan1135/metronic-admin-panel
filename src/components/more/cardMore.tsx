
import { IoIosRainy } from "react-icons/io";
import { IoShareSocial, IoSettingsSharp } from "react-icons/io5";
import { SlDislike } from "react-icons/sl";
import { TiMessages } from "react-icons/ti";
import { Link } from "react-router";

interface MoreProps {
    setMore: (more: boolean) => void;
    more: boolean
}

const CardMore: React.FC<MoreProps> = ({ setMore, more }) => {

    return (
        <>

            <div className={`absolute shadow-md top-full right-0 ${more ? '' : 'hidden'} dropdown-container z-50 bg-white dark:bg-coal-300 rounded-lg w-48`}>
                <div onClick={() => setMore(false)} className="border-b-2 py-0 z-50">
                    <Link to={location} className="relative px-2 block">
                        <div className="flex flex-row items-center px-3 py-3 cursor-pointer hover:bg-gray-100 rounded-md justify-between hover: group">
                            <div className="flex flex-row items-center gap-2.5 ">
                                <IoIosRainy className="dropdown-icon group-hover:text-primary" />
                                <span className="text-gray-800 text-b-13-14-400">Activity</span>
                            </div>
                        </div>
                    </Link>
                    <Link to={location} className="px-2 block">
                        <div className="flex flex-row items-center px-3 py-3 gap-2.5 cursor-pointer hover:bg-gray-100 rounded-md hover: group">
                            <IoShareSocial className='dropdown-icon  group-hover:text-primary' />
                            <span className='text-gray-800 text-b-13-14-400 '>Share</span>
                        </div>
                    </Link>

                    <Link to={location} className="px-2 block">
                        <div className="flex flex-row items-center px-3 py-3 gap-2.5 cursor-pointer hover:bg-gray-100 hover: group rounded-md">
                            <TiMessages className='dropdown-icon group-hover:text-primary' />
                            <span className='text-gray-800 text-b-13-14-400'>Notifications</span>
                        </div>
                    </Link>

                    <Link to={location} className="relative px-2 block">
                        <div className="flex flex-row items-center px-3 py-3 cursor-pointer hover:bg-gray-100 rounded-md justify-between hover: group">
                            <div className="flex flex-row items-center gap-2.5">
                                <SlDislike className="dropdown-icon group-hover:text-primary" />
                                <span className="text-gray-800 text-b-13-14-400">Report</span>
                            </div>
                        </div>

                    </Link>
                    <Link to={location} className="px-2 border-t block">
                        <div className="flex flex-row items-center px-3 py-3 gap-2.5 cursor-pointer hover:bg-gray-100 hover: group rounded-md ">
                            <IoSettingsSharp className="dropdown-icon group-hover:text-primary" />
                            <span className='text-gray-800 text-b-13-14-400'>Setting</span>
                        </div>
                    </Link>
                </div>
            </div>
        </>

    )
}
export default CardMore;