import Menu from "@components/myAccount/hoverMenu"
import DeviceTable from "@components/myAccount/tables/deviceTable"
import Questions from "@components/myAccount/questions"
const DeviceManagament = () => {

    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Device Management</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Authorized Devices for Report Access <span className="text-primary border-b border-dotted text-b-13-14-500 border-primary">Unlink All Devices</span></span>
                </div>
                <a href="#" className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Security Overview
                </a>
            </div>
            <DeviceTable />
            {/* FAQ */}
            <Questions />

        </div >
    )
}
export default DeviceManagament