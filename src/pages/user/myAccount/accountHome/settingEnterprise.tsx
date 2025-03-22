import { Link } from "react-router"
import Menu from "../../../../components/publicProfile/hovermenu"

const SettingEnterprise = () => {
    return (
        <div className="flex flex-col gap-[30px]  ">
        {/* {Sub  menu} */}
        <Menu />
        <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col gap-[14px] ">
                <h1 className='text-gray-900 text-h-24-24-600'>Settings - With Enterprise</h1>
                <span className='text-b-14-14-400 text-gray-700'>Intuitive Access to In-Depth Customization</span>
            </div>
            <div className="flex flex-row items-center gap-2.5">

                <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Public Profile
                </a>
                <Link to={location} className="px-2.5 py-2.5 flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1 cursor-pointer">
                    Get Started
                </Link>
            </div>
        </div>

        <div className="flex flex-row items-start gap-[30px]">

        </div>
    </div >    )
}
export default SettingEnterprise