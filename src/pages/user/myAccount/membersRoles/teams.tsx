import FAQ from "../../../../components/myAccount/faq"
import Menu from "../../../../components/myAccount/hoverMenu"
import Questions from "../../../../components/myAccount/questions"
import TeamsTable from '../../../../components/myAccount/tables/teamsTable'

const Teams = () => {

    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Teams(14)</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Efficient team organization with real-time updates</span>
                </div>
                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Add New Team
                </button>
            </div>

            <TeamsTable/>
            {/* FAQ */}

            <FAQ />

            {/* Qustions Area */}

            <Questions />

        </div >
    )
}
export default Teams