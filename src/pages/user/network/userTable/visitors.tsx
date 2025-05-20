import FAQ from "@components/myAccount/faq"
import Questions from "@components/myAccount/questions"
import VisitorsTable from "@components/network/tables/visitorsTable"
const Visitors = () => {

    return (
        <div className="flex flex-col gap-[30px]">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Visitors</h1>
                    <div className="flex flex-col md:flex-row md:items-center items-start gap-[14px]">
                        <div className="flex flex-row items-center gap-1">
                            <span className="text-b-15-24-400 text-gray-700">All Members:</span>
                            <span className="text-b-15-16-500 text-gray-800">49,053</span>
                        </div>
                        <div className="flex flex-row items-center gap-1">
                            <span className="text-b-15-24-400 text-gray-700">Projects:</span>
                            <span className="text-b-15-16-500 text-gray-800">49,053</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-2.5">
                    <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                        Import CSV
                    </button>
                    <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border">
                        Add Member
                    </button>
                </div>
            </div>

            {/* Visitors Table */}
            <VisitorsTable />

            {/* FAQ */}

            <FAQ />

            {/* Qustions Area */}

            <Questions />

        </div >
    )
}
export default Visitors