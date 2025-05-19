import Menu from "../../../../components/myAccount/hoverMenu"
import Questions from "../../../../components/myAccount/questions"
import SecurityLogTable from "../../../../components/myAccount/tables/securityLogTable"
import { Link } from "react-router"


const SecurityLog = () => {

    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Security Log</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Authorized Devices for Report Access <Link to={window.location.pathname} className="text-primary text-b-13-14-500 border-b border-dotted border-primary">Unlink All Devices</Link></span>
                </div>
                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Security Overview
                </button>
            </div>
            {/* Current Session Table */}
            <SecurityLogTable />

            {/* Qustions Area */}

            <Questions />

        </div >
    )
}
export default SecurityLog