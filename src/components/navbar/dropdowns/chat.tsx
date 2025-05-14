
import { IoMdClose, IoMdExit } from "react-icons/io"
import Gitlab from '../../../assets/icon/gitlab.svg'
import { Link } from "react-router"
import AvatarGroup from '../../../assets/icon/avatar-group.svg'
import { FaEllipsisVertical } from "react-icons/fa6"
import Arlene from '../../../assets/icon/arlene-mccoy.svg'
import { LuCheckCheck } from "react-icons/lu"
import Cody from '../../../assets/icon/cody-fisher.svg'
import Esther from '../../../assets/icon/ester-hoeard.svg'
import Tyler from '../../../assets/icon/tyler-hero.svg'
import Adam from '../../../assets/icon/tyler-hero.svg'
import { useState } from "react"

interface ChatProps {
    closeDropdowns: () => void;
}
const Chat = ({ closeDropdowns }: ChatProps) => {

    const location = window.location.pathname
    const [decline, setDecline] = useState(true)
    return (
        <div className="absolute  top-12 right-32 w-[420px]">
            <div className="flex bg-white dark:bg-coal-500 rounded-xl border-gray-200 border  flex-col">
                <div className=" pl-5 pr-2.5 py-3 border-b border-b-gray-200">
                    <div className="flex flex-row items-center justify-between">
                        <span className="text-gray-900 text-b-14-14-600">Chat</span>
                        <div onClick={() => closeDropdowns()} className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md cursor-pointer duration-200">
                            <IoMdClose className=" text-gray-600 size-5" />
                        </div>

                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row items-center justify-between pl-5 pr-2.5 py-2.5 border-b border-b-gray-200">
                        <div className=" flex flex-row items-center gap-2.5">
                            <img src={Gitlab} alt="" className="size-11" />
                            <div className="flex flex-col gap-[7px]">
                                <Link to={location} className="text-b-13-14-500 text-gray-900 hover:text-primary text-animation">Hr Team</Link>
                                <span className="text-b-11-12-400 text-gray-500 italic">Jessy is typing..</span>
                            </div>

                        </div>
                        <div className="flex flex-row items-center gap-2.5">
                            <img src={AvatarGroup} alt="" className="w-[93px] h-[30px]" />
                            <div className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md cursor-pointer duration-200">
                                <FaEllipsisVertical className={`text-gray-600 `} />
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col overflow-hidden py-5">
                        <div className="flex flex-col overflow-y-scroll max-h-[450px] gap-5 scrollbar-hidden">
                            <div className="flex flex-row gap-[15px] pl-5">
                                <img src={Arlene} alt="" className="mt-auto" />
                                <div className="flex flex-col gap-[5px]">
                                    <div className="p-3 bg-gray-100 w-max max-w-[290px] rounded-t-lg rounded-br-lg">
                                        <p className="text-b-13-20-400 text-gray-800">Hello!</p>
                                        <p className="text-b-13-20-400 text-gray-800">Next week we are closing the project. Do You have questions?</p>
                                    </div>
                                    <span className="text-b-11-12-500 text-gray-500">14:04</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-[15px] pl-5 ml-auto pr-5">
                                <div className="flex flex-col gap-[5px]">
                                    <div className="p-3 bg-primary w-max max-w-[290px] rounded-t-lg rounded-bl-lg">

                                        <p className="text-b-13-20-400 text-white">This is excellent news!</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-[7px] ml-auto">
                                        <span className="text-b-11-12-500 text-gray-500">14:08</span>
                                        <LuCheckCheck className="text-success" />

                                    </div>

                                </div>
                                <div className="pr-1 mt-auto bg-transparent relative">
                                    <img src={Cody} alt="" className="" />
                                    <span className="size-[5px] absolute bottom-1 right-[6px]  rounded-full bg-success"></span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-[15px] pl-5">
                                <img src={Tyler} alt="" className="mt-auto" />
                                <div className="flex flex-col gap-[5px]">
                                    <div className="p-3 bg-gray-100 w-max max-w-[290px] rounded-t-lg rounded-br-lg">
                                        <p className="text-b-13-20-400 text-gray-800">I've checked the features, can't wait to demo them!</p>
                                    </div>
                                    <span className="text-b-11-12-500 text-gray-500">14:26</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-[15px] pl-5">
                                <img src={Esther} alt="" className="mt-auto" />
                                <div className="flex flex-col gap-[5px]">
                                    <div className="p-3 bg-gray-100 w-max max-w-[290px] rounded-t-lg rounded-br-lg">
                                        <p className="text-b-13-20-400 text-gray-800">I've checked the features, can't wait to demo them!</p>
                                    </div>
                                    <span className="text-b-11-12-500 text-gray-500">15:09</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-[15px] pl-5 ml-auto pr-5">
                                <div className="flex flex-col gap-[5px]">
                                    <div className="p-3 bg-primary w-max max-w-[290px] rounded-t-lg rounded-bl-lg">

                                        <p className="text-b-13-20-400 text-white">Haven't seen the build yet, I'll look now.</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-[7px] ml-auto">
                                        <span className="text-b-11-12-500 text-gray-500">15:52</span>
                                        <LuCheckCheck className="text-gray-400" />

                                    </div>

                                </div>
                                <div className="pr-1 mt-auto bg-transparent relative">
                                    <img src={Cody} alt="" className="" />
                                    <span className="size-[5px] absolute bottom-1 right-[6px]  rounded-full bg-success"></span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-[15px] pl-5 ml-auto pr-5">
                                <div className="flex flex-col gap-[5px]">
                                    <div className="p-3 bg-primary w-max max-w-[290px] rounded-t-lg rounded-bl-lg">

                                        <p className="text-b-13-20-400 text-white">This is excellent news!</p>
                                    </div>
                                    <div className="flex flex-row items-center gap-[7px] ml-auto">
                                        <span className="text-b-11-12-500 text-gray-500">15:52</span>
                                        <LuCheckCheck className="text-gray-400" />

                                    </div>

                                </div>
                                <div className="pr-1 mt-auto bg-transparent relative">
                                    <img src={Cody} alt="" className="" />
                                    <span className="size-[5px] absolute bottom-1 right-[6px]  rounded-full bg-success"></span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-[15px] pl-5">
                                <img src={Tyler} alt="" className="mt-auto" />
                                <div className="flex flex-col gap-[5px]">
                                    <div className="p-3 bg-gray-100 w-max max-w-[290px] rounded-t-lg rounded-br-lg">
                                        <p className="text-b-13-20-400 text-gray-800">Tomorrow, I will send the link for the meeting</p>
                                    </div>
                                    <span className="text-b-11-12-500 text-gray-500">17:40</span>
                                </div>
                            </div>


                        </div>
                        {
                            decline &&
                            <div className="flex flex-row items-center justify-between p-5 bg-gray-200">
                                <div className=" flex flex-row items-center gap-2.5">
                                    <img src={Adam} alt="" className="size-[30px]" />
                                    <div className="flex flex-col gap-[3px]">
                                        <div className="flex flex-row items-center gap-1 ">
                                            <Link to={location} className="text-b-13-14-500 text-gray-900 cursor-pointer hover:text-primary text-animation">Jane Perez</Link>
                                            <span className="text-gray-600 text-b-13-14-400">wants to join chat</span>
                                        </div>
                                        <div className="flex flex-row items-center gap-2">
                                            <span className="text-b-11-12-400 text-gray-600">1 day ago</span>
                                            <span className="text-b-11-12-400 text-gray-600">Design Team</span>

                                        </div>
                                    </div>

                                </div>

                                <div className="flex flex-row items-center gap-2.5">
                                    <a onClick={() => setDecline(false)} className="flex items-center justify-center py-2 px-2.5 bg-gray-100 cursor-pointer rounded-lg border hover:shadow-sm">
                                        <span className="text-b-11-12-500 text-gray-700">Decline</span>
                                    </a>
                                    <a onClick={() => setDecline(false)} className="flex items-center justify-center py-2 px-2.5 bg-black cursor-pointer rounded-lg">
                                        <span className="text-b-11-12-500 text-white">Accept</span>
                                    </a>
                                </div>
                            </div>
                        }
                        <div className="px-5 pt-5">
                            <div className="px-2.5 border border-gray-200 py-2.5 rounded-md">
                                <div className="flex flex-row items-center gap-2.5">
                                    <img src={Cody} alt="" />
                                    <input
                                        type="text"
                                        className="outline-none text-b-11-12-400 text-gray-600 flex w-full bg-transparent"
                                        placeholder="Write a message"
                                    />
                                    <IoMdExit className="text-gray-600 -rotate-90 size-[30px]" />
                                    <a className="flex items-center justify-center py-2 px-2.5 bg-black cursor-pointer rounded-lg">
                                        <span className="text-b-11-12-500 text-white">Send</span>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Chat