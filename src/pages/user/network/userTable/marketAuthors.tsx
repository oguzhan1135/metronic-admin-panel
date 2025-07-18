import FAQ from "@components/myAccount/faq"
import Questions from "@components/myAccount/questions"
import MarketAuthorsTable from "@components/network/tables/marketAuthorsTable"
const MarketAuthors = () => {

    return (
        <div className="flex flex-col gap-[30px]">
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Market Authors</h1>
                    <span className="text-b-14-14-400 text-gray-700">Central Hub for Personal Customization</span>
                </div>
                <div className="flex flex-row items-center gap-2.5">
                    <a href="#" className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                        Import CSV
                    </a>
                    <a href="#" className="px-3 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border">
                        Add Member
                    </a>
                </div>
            </div>

            {/* Team Crew Table */}
            <MarketAuthorsTable />

            {/* FAQ */}

            <FAQ />

            {/* Qustions Area */}

            <Questions />

        </div >
    )
}
export default MarketAuthors