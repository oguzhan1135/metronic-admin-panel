import Card from "@components/card/card"
import FAQ from "@components/myAccount/faq"
import Menu from "@components/myAccount/hoverMenu"
import Questions from "@components/myAccount/questions"
import Puzzle from '@assets/puzzle.svg'
import PuzzleDark from '@assets/puzzle-dark.svg'

const MemberStarter = () => {

    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Member(0)</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Overview of all team members and roles.</span>
                </div>
                <div className="flex flex-row items-center gap-2.5">
                    <a href="#" className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer">
                        Invite with Link
                    </a>
                    <a href="#" className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer">
                        Invite People
                    </a>
                </div>
            </div>

            <Card
                dotStatus={false}
                buttonStatus={false}
                content={
                    <>
                        <div className="flex flex-col items-center justify-center gap-3 pb-[50px]">
                            <img src={Puzzle} alt="puzzle" className="dark:hidden" />
                            <img src={PuzzleDark} alt="puzzle" className="dark:flex hidden" />
                            <h2 className="text-h-26-26-600 text-gray-900">New Member Onboarding and Registration</h2>
                            <div className="flex flex-col gap-[30px] items-center justify-center">
                                <p className="text-b-14-22-400 text-gray-800 text-center max-w-[600px]">A streamlined process to welcome and integrate new members into the team,
                                    ensuring a smooth and efficient start.</p>
                                <a href="#" className="px-4 py-[13px] flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer w-max">
                                    Add New Member
                                </a>
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
export default MemberStarter