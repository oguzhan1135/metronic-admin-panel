import Card from "@components/card/card"
import FAQ from "@components/myAccount/faq"
import Menu from "@components/myAccount/hoverMenu"
import Questions from "@components/myAccount/questions"
import Concord from '@assets/concord.svg'
import ConcordDark from '@assets/concord-dark.svg'

const TeamStarter = () => {

    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Teams(0)</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Efficient team organization with real-time updates</span>
                </div>
                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Plans
                </button>
            </div>

            <Card
                dotStatus={false}
                buttonStatus={false}
                content={
                    <>
                        <div className="flex flex-col items-center justify-center gap-3 pb-[50px]">
                            <img src={Concord} alt="concord" className="dark:hidden" />
                            <img src={ConcordDark} alt="concord-dark" className="dark:flex hidden" />
                            <h2 className="text-h-26-26-600 text-gray-900">Swift Setup for New Teams</h2>
                            <div className="flex flex-col gap-[30px] items-center justify-center">
                                <p className="text-b-14-22-400 text-gray-800 text-center max-w-[600px]">Enhance team formation and management with easy-to-use tools for communication,
                                    task organization, and progress tracking, all in one place.</p>
                                <button className="px-4 py-[13px] flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer w-max">
                                    Create New Team
                                </button>
                            </div>
                        </div>
                    </>
                }
            />
            {/* FAQ */}

            <FAQ />

            {/* Qustions Area */}

            <Questions />

        </div >
    )
}
export default TeamStarter