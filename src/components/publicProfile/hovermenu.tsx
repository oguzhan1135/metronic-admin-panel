import { FaChevronDown } from "react-icons/fa6"

const Menu = () => {
    return (
        <div style={{ scrollbarWidth: "thin" }} className="w-full overflow-x-auto flex xl:justify-between items-center">
            <div className="flex flex-row items-center gap-2.5 min-w-[250px]  relative">
                <div className="flex flex-row items-center gap-1 py-5 px-2.5 border-b-2 border-b-primary">
                    <span className='text-b-14-14-500 text-primary'>Profiles</span>
                    <FaChevronDown className='text-b-14-14-500 text-primary' />
                </div>
                <div className="flex flex-row items-center gap-1 py-5 px-2.5">
                    <span className='text-b-14-14-400 text-gray-700'>Projects</span>
                    <FaChevronDown className='text-b-14-14-400 text-gray-700' />
                </div>
                <div className="flex flex-row items-center gap-1 py-5 px-2.5">
                    <span className='text-b-14-14-400 text-gray-700'>Work</span>
                </div>
                <div className="flex items-center gap-1 py-5 px-2.5">
                    <span className='text-b-14-14-400 text-gray-700'>Teams</span>
                </div>
                <div className="flex items-center gap-1 py-5 px-2.5">
                    <span className='text-b-14-14-400 text-gray-700'>Network</span>
                </div>
                <div className="flex items-center gap-1 py-5 px-2.5">
                    <span className='text-b-14-14-400 text-gray-700'>Activity</span>
                </div>
                <div className="flex flex-row items-center gap-1 py-5 px-2.5">
                    <span className='text-b-14-14-400 text-gray-700'>More</span>
                    <FaChevronDown className='text-b-14-14-400 text-gray-700' />
                </div>

            </div>
        </div>
    )

}
export default Menu