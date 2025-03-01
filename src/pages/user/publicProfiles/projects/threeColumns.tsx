import Card from "../../../../components/publicProfile/card"
import Verify from '../../../../assets/icon/verify.svg'
import Jennifer from '../../../../assets/icon/jennifer.svg'
import { CiMail } from "react-icons/ci"
import { GiAbstract080 } from "react-icons/gi"
import { SlLocationPin } from "react-icons/sl"
import { Link } from "react-router"
import Menu from "../../../../components/hovermenu"
import Plurk from '../../../../assets/icon/plurk.svg'
import PlurtkAvatar from '../../../../assets/icon/plurk-avatar-group.svg'
import Telegram from '../../../../assets/icon/telegram.svg'
import KickStarter from '../../../../assets/icon/kickstarter.svg'

const ThreeColumns = () => {
    const location = window.location.pathname
    return (
        <div className="flex flex-col gap-10  ">
            <div className="flex flex-col gap-3 items-center justify-center bg-mask bg-cover">
                <div className="rounded-full border border-success">
                    <img src={Jennifer} alt="" className='size-[100px]' />
                </div>
                <div className="flex flex-row items-center gap-1 ">
                    <span className="text-b-18-18-600 text-gray-900">Jennifer Klabber</span>
                    <img src={Verify} alt="" />
                </div>
                <div className="flex md:flex-row flex-col items-center gap-5">
                    <div className="flex flex-row items-center gap-[5px]">
                        <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                        <span className='text-gray-600 text-b-14-14-500'>KeenThemes</span>
                    </div>
                    <div className="flex flex-row items-center gap-[5px]">
                        <SlLocationPin className='text-gray-600 text-b-14-14-500' />
                        <span className='text-gray-600 text-b-14-14-500'>SF, Bay Area</span>
                    </div>
                    <div className="flex flex-row items-center gap-[5px]">
                        <CiMail className='text-gray-600 text-b-14-14-500' />
                        <Link to={location} className='text-gray-600 text-b-14-14-500 hover:text-primary text-animation'>jenny@kteam.com</Link>
                    </div>
                </div>
            </div>
            {/* {Sub  menu} */}
            <Menu />
            <h1 className="text-b-18-18-600 text-gray-900">24 Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px] z-1">

                <Card buttonStatus={false} dotStatus={false}
                    content={
                        <div className="flex flex-col gap-[30px] p-[30px]">
                            <div className="flex flex-row items-center justify-between">
                                <div className="p-2.5 bg-gray-100 rounded-lg">
                                    <img src={Plurk} alt="plurk-icon" />
                                </div>
                                <div className="p-2 rounded-[4px] bg-primary-light border-primary-clarity border flex items-center justify-center">
                                    <span className="text-primary text-b-11-12-500">In Progress</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <Link to={location} className="text-b-18-18-500 text-gray-900 hover:text-primary text-animation">Phoenix SaaS</Link>
                                <span className="text-b-14-14-400 text-gray-700">Real-time photo sharing app</span>
                            </div>
                            <div className="flex flex-row items-center gap-5">
                                <div className="flex flex-row items-center gap-[3px]">
                                    <span className="text-gray-600 text-b-14-14-400">Start</span>
                                    <span className="text-b-14-14-500 text-gray-800">Mar 06</span>
                                </div>
                                <div className="flex flex-row items-center gap-[3px]">
                                    <span className="text-gray-600 text-b-14-14-400">End</span>
                                    <span className="text-b-14-14-500 text-gray-800">Dec 21</span>
                                </div>
                            </div>
                            <div className="bg-primary-light rounded-[4px] h-[6px] w-full relative">
                                <span className=" absolute left-0 top-0 block bg-primary w-3/5 h-[6px] rounded-[4px]"></span>
                            </div>
                            <img src={PlurtkAvatar} alt="avatar-group" className="w-[72px] h-[30px]" />
                        </div>
                    }
                />
                <Card buttonStatus={false} dotStatus={false}
                    content={
                        <div className="flex flex-col gap-[30px] p-[30px]">
                            <div className="flex flex-row items-center justify-between">
                                <div className="p-2.5 bg-gray-100 rounded-lg">
                                    <img src={Telegram} alt="telegram-icon" />
                                </div>
                                <div className="p-2 rounded-[4px] bg-success-light border-success-clarity border flex items-center justify-center">
                                    <span className="text-success text-b-11-12-500">In Progress</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <Link to={location} className="text-b-18-18-500 text-gray-900 hover:text-primary text-animation">Radiant Wave</Link>
                                <span className="text-b-14-14-400 text-gray-700">Short-term accommodation marketplace</span>
                            </div>
                            <div className="flex flex-row items-center gap-5">
                                <div className="flex flex-row items-center gap-[3px]">
                                    <span className="text-gray-600 text-b-14-14-400">Start</span>
                                    <span className="text-b-14-14-500 text-gray-800">Mar 06</span>
                                </div>
                                <div className="flex flex-row items-center gap-[3px]">
                                    <span className="text-gray-600 text-b-14-14-400">End</span>
                                    <span className="text-b-14-14-500 text-gray-800">Dec 21</span>
                                </div>
                            </div>
                            <div className="bg-success-light rounded-[4px] h-[6px] w-full relative">
                                <span className=" absolute left-0 top-0 block bg-success w-full h-[6px] rounded-[4px]"></span>
                            </div>
                            <img src={PlurtkAvatar} alt="avatar-group" className="w-[72px] h-[30px]" />
                        </div>
                    }
                />
                <Card buttonStatus={false} dotStatus={false}
                    content={
                        <div className="flex flex-col gap-[30px] p-[30px]">
                            <div className="flex flex-row items-center justify-between">
                                <div className="p-2.5 bg-gray-100 rounded-lg">
                                    <img src={KickStarter} alt="kickstarter-icon" />
                                </div>
                                <div className="p-2 rounded-[4px] bg-gray-100  border flex items-center justify-center">
                                    <span className="text-gray-600 text-b-11-12-500">Upcomming</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2.5">
                                <Link to={location} className="text-b-18-18-500 text-gray-900 hover:text-primary text-animation">Dreamweaver</Link>
                                <span className="text-b-14-14-400 text-gray-700">Social media photo sharing</span>
                            </div>
                            <div className="flex flex-row items-center gap-5">
                                <div className="flex flex-row items-center gap-[3px]">
                                    <span className="text-gray-600 text-b-14-14-400">Start</span>
                                    <span className="text-b-14-14-500 text-gray-800">Mar 06</span>
                                </div>
                                <div className="flex flex-row items-center gap-[3px]">
                                    <span className="text-gray-600 text-b-14-14-400">End</span>
                                    <span className="text-b-14-14-500 text-gray-800">Dec 21</span>
                                </div>
                            </div>
                            <div className="bg-gray-300 rounded-[4px] h-[6px] w-full relative">
                                <span className=" absolute left-0 top-0 block bg-gray-300 w-0 h-[6px] rounded-[4px]"></span>
                            </div>
                            <img src={PlurtkAvatar} alt="avatar-group" className="w-[72px] h-[30px]" />
                        </div>
                    }
                />


            </div>
        </div >
    )
}
export default ThreeColumns