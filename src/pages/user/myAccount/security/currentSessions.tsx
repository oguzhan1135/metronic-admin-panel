


import Menu from "../../../../components/myAccount/hoverMenu"
import FAQ from "../../../../components/myAccount/faq"
import SessionsTable from "../../../../components/myAccount/tables/sessions"
import Questions from "../../../../components/myAccount/questions"


const CurrentSessions = () => {

    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Current Sessions</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Authorized Devices for Report Access</span>
                </div>
                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Activity Log
                </button>
            </div>
            {/* Current Session Table */}
            <SessionsTable />

            {/* FAQ */}
            <FAQ />

            {/* Qustions Area */}

            <Questions />

        </div >
    )
}
export default CurrentSessions