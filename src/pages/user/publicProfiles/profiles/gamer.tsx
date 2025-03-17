import {  FaFacebook, FaLaptopCode,  FaTwitch, FaTwitter, FaUsers, FaYoutube } from "react-icons/fa6"
import { SlLocationPin, SlTarget } from "react-icons/sl"
import Menu from "../../../../components/publicProfile/hovermenu"
import Verify from '../../../../assets/icon/verify.svg'
import Card from "../../../../components/card/card"
import {  FaShareAlt } from "react-icons/fa"
import { Link } from "react-router"
import {  TbWorld } from "react-icons/tb"
import FloydMiles from '../../../../assets/icon/floyed.svg'
import OnlineGame from '../../../../assets/icon/online-game.svg'
import GamerCoin from '../../../../assets/icon/gamer-coin.svg'
import GamerDiamond from '../../../../assets/icon/gamer-diamond.svg'
import GamerTrophy from '../../../../assets/icon/gamer-trophy.svg'
import CallofDutty from '../../../../assets/icon/callofduty.svg'
import Rocketleague from '../../../../assets/icon/rocketLeague.svg'
import Unrealtournament from '../../../../assets/icon/unrealTounent.svg'
import Siege from '../../../../assets/icon/siegeof.svg'
import FireWatch from '../../../../assets/icon/firewatch.svg'
import Turtles from '../../../../assets/icon/turtles.svg'
import Ark from '../../../../assets/icon/ark.svg'
import CuttheRope from '../../../../assets/icon/cuttherope.svg'
import Badges from "../../../../components/publicProfile/badges"
import Tyler from '../../../../assets/icon/tyler-hero.svg'
import Esther from '../../../../assets/icon/ester-hoeard.svg'
import Cody from '../../../../assets/icon/cody-fisher.svg'
import Arlene from '../../../../assets/icon/arlene-mccoy.svg'
import Jennifer from '../../../../assets/icon/jennifer.svg'
import CyberStorm from '../../../../assets/icon/cyber-storm.svg'
import PixelPulse from '../../../../assets/icon/pixel-pulse.svg'
import Nexus from '../../../../assets/icon/nexsus-rift.svg'
import CallofDuty from '../../../../assets/icon/call-of-dutty.svg'
import RocketLeague from '../../../../assets/icon/rocket-league.svg'
import GTA5 from '../../../../assets/icon/gta-5.svg'
import GTA5Icon from '../../../../assets/icon/gtra-5-icon.svg'
import Jira from '../../../../assets/icon/jira-work.svg'
import Xostme from '../../../../assets/icon/xostme-ltd.svg'
import Clusterhq from '../../../../assets/icon/clusterhq.svg'
import AvatarGroup from '../../../../assets/icon/avatar-group.svg'
import { FiCoffee } from "react-icons/fi"
import { IoRocketOutline } from "react-icons/io5"
import Switch from "../../../../components/switch"
import { useState } from "react"
import UnderMaintence from '../../../../assets/icon/under-maintenance.svg'

const Gamer = () => {
    const location = window.location.pathname
    const [refresh, setRefresh] = useState(true)

    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 items-center justify-center bg-mask bg-cover">
            <img src={FloydMiles} alt="floyd" className='' />
                <div className="flex flex-row items-center gap-1 ">
                    <span className="text-b-18-18-600 text-gray-900">Floyd Miles</span>
                    <img src={Verify} alt="" />
                </div>
                <div className="flex md:flex-row flex-col items-center gap-5">

                    <div className="flex flex-row items-center gap-[5px]">
                        <SlLocationPin className='text-gray-600 text-b-14-14-500' />
                        <span className='text-gray-600 text-b-14-14-500'>SF, Bay Area</span>
                    </div>
                    <div className="flex flex-row items-center gap-[5px]">
                        <FaTwitch className='text-gray-600 text-b-14-14-500' />
                        <span className='text-gray-600 text-b-14-14-500'>floydgg</span>
                    </div>
                    <div className="flex flex-row items-center gap-[5px]">
                        <SlTarget className='text-gray-600 size-4' />
                        <Link to={location} className='text-gray-600 text-b-14-14-500 hover:text-primary text-animation'>Level 22</Link>
                    </div>
                </div>
            </div>
            {/* {Sub  menu} */}
            <Menu />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-[30px] p-4">
                {/* Data */}
                <div className="xl:col-span-3 ">
                    <div className="bg-white rounded-xl shadow-sm border">
                        <div className="flex items-center justify-center py-[30px]">
                            <div className="flex sm:flex-row flex-col items-center gap-5 w-full">
                                <div className="flex flex-row items-start gap-[14px] justify-center w-full relative after:content-[''] after:flex after:bg-gray-300 after:w-full after:h-[1px] sm:after:w-[1px] after:right-0  sm:after:h-full sm:after:absolute sm:after:right-0 last:after:hidden">
                                    <img src={OnlineGame} alt="online-game" />
                                    <div className="flex flex-col gap-1 items-center ">
                                        <span className="text-h-26-26-600 text-gray-900">164</span>
                                        <span className="text-b-14-14-400 text-gray-700">Tournaments</span>
                                    </div>
                                </div>

                                <div className="flex flex-row items-start gap-[14px] justify-center w-full relative after:content-[''] after:flex after:bg-gray-300 after:w-full after:h-[1px] sm:after:w-[1px] after:right-0  sm:after:h-full sm:after:absolute sm:after:right-0 last:after:hidden">
                                    <img src={GamerCoin} alt="gamer-coin" />
                                    <div className="flex flex-col gap-1 items-center ">
                                        <span className="text-h-26-26-600 text-gray-900">73.2%</span>
                                        <span className="text-b-14-14-400 text-gray-700">Game Win-rate</span>
                                    </div>
                                </div>

                                <div className="flex flex-row items-start gap-[14px] justify-center w-full relative after:content-[''] after:flex after:bg-gray-300 after:w-full after:h-[1px] sm:after:w-[1px] after:right-0  sm:after:h-full sm:after:absolute sm:after:right-0 last:after:hidden">
                                    <img src={GamerDiamond} alt="gamer-diamond" />
                                    <div className="flex flex-col gap-1 items-center ">
                                        <span className="text-h-26-26-600 text-gray-900">257</span>
                                        <span className="text-b-14-14-400 text-gray-700">Duels Played</span>
                                    </div>
                                </div>

                                <div className="flex flex-row items-start gap-[14px] justify-center w-full">
                                    <img src={GamerTrophy} alt="gamer-trophy" />
                                    <div className="flex flex-col gap-1 items-center ">
                                        <span className="text-h-26-26-600 text-gray-900">19</span>
                                        <span className="text-b-14-14-400 text-gray-700">Trophies</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


                <div className="xl:col-span-1 flex flex-col gap-[30px]">

                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        title="Favorite Games"
                        content={
                            <div className="flex-col flex gap-5">
                                <div className="flex flex-row items-center justify-start gap-[14px] flex-wrap px-[30px] py-5">
                                    <img src={CallofDutty} alt="call-of-dutty" />
                                    <img src={Rocketleague} alt="rocket-league" />
                                    <img src={Unrealtournament} alt="unreal" />
                                    <img src={Siege} alt="siege" />
                                    <img src={FireWatch} alt="fire-watch" />
                                    <img src={Turtles} alt="Turtles" />
                                    <img src={Ark} alt="Ark" />
                                    <img src={CuttheRope} alt="cut-the-rope" />


                                </div>
                            </div>
                        }
                    />

                    <Card
                        buttonStatus={false}
                        dotStatus={false}
                        title="About"
                        content={
                            <div className="flex flex-col gap-5 px-[30px] py-5">
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Joined:</span>
                                    <span className="text-b-14-14-400 text-gray-900">26 Aug, 2021</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Location:</span>
                                    <span className="text-b-14-14-400 text-gray-900">Porto, EU</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Level:</span>
                                    <div className="px-[6px] py-[5px] bg-success-light border border-success-clarity flex rounded-md items-center justify-center ">
                                        <span className="text-b-11-12-500 text-success">Pro</span>
                                    </div>
                                </div>
                                <p className='text-b-14-22-400 text-gray-800'>Experienced and creative professional with a passion great as a commitment to best excellence.</p>

                            </div>

                        }
                    />

                    <Badges title="Badges" />
                    {/* {Floy'd Teams} */}
                    <Card
                        dotStatus={false}
                        buttonStatus={true}
                        buttonTitle="Join Our Team"
                        title="Members"
                        content={
                            <div className="flex flex-row items-center  flex-wrap  max-w-[320px] px-[30px] gap-2.5 py-5">
                                <img src={FloydMiles} alt="" className="size-9" />
                                <img src={Jennifer} alt="" className="size-9" />
                                <img src={Arlene} alt="" className="size-9" />
                                <img src={Cody} alt="" className="size-9" />
                                <img src={Arlene} alt="" className="size-9" />
                                <img src={Tyler} alt="" className="size-9" />
                                <img src={Esther} alt="" className="size-9" />
                                <img src={Cody} alt="" className="size-9" />


                            </div>

                        }
                    />
                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        title="Network"
                        content={
                            <div className="flex flex-col px-[30px] gap-5  py-5">
                                <div className="flex flex-row items-center gap-2.5">
                                    <TbWorld className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation hover:text-primary">jennynft</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <FaFacebook className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation hover:text-primary">nftmania</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <FaTwitter className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation hover:text-primary">jennynft</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <FaYoutube className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation hover:text-primary">jennyklabber</Link>
                                </div>
                            </div>

                        }
                    />
                </div>


                <div className="xl:col-span-2 flex flex-col gap-[30px]">

                    <Card
                        buttonStatus={false}
                        dotStatus={false}
                        dotContentStatus={true}
                        dotContent={
                            <Link to={location} className="text-primary border-b border-dotted border-b-primary">View All</Link>
                        }
                        content={
                            <div className="flex flex-col gap-5 pl-[30px] py-5">
                                <div className="w-full overflow-x-auto " style={{ scrollbarWidth: "thin", scrollBehavior: "smooth" }}>
                                    <div className="flex flex-row  items-center gap-5 ">
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max pb-5">
                                                    <img src={CyberStorm} alt="cyber-storm" className="rounded-t-xl w-full" />
                                                    <div className="px-[14px] flex flex-row items-center gap-2.5">
                                                        <img src={Clusterhq} alt="clusterhq" />
                                                        <div className="flex flex-col gap-2">
                                                            <Link to={location} className="text-b-15-16-600 text-gray-900 hover:text-primary text-animation">CyberStorm Cup</Link>
                                                            <div className="flex flex-row items-center gap-[6px]">
                                                                <span className=" bg-[#FF6F1E] size-[5px] rounded-full"></span>
                                                                <span className="text-b-10-10-400 text-gray-600">WED, FEB 16, 12:30 CET</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="flex flex-row items-center flex-wrap gap-[6px] px-[14px]">
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">CS 2</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">PUBG</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">RAID</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">COD</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">Fortnite</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-[6px] px-[14px]">
                                                        <div className="bg-primary-light w-full h-[6px] rounded-[4px]  relative">
                                                            <span className=" absolute top-0 left-0 h-[6px] rounded-[4px] bg-primary w-3/4"></span>
                                                        </div>
                                                        <div className="flex flex-row items-center justify-between">
                                                            <span className="text-b-11-12-400 text-gray-700">76 lots</span>
                                                            <span className="text-b-11-12-400 text-gray-700">9 left</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max pb-5">
                                                    <img src={PixelPulse} alt="pixel-pulse" className="rounded-t-xl w-full" />
                                                    <div className="px-[14px] flex flex-row items-center gap-2.5">
                                                        <img src={Jira} alt="clusterhq" />
                                                        <div className="flex flex-col gap-2">
                                                            <Link to={location} className="text-b-15-16-600 text-gray-900 hover:text-primary text-animation">PixelPulse Showdown</Link>
                                                            <div className="flex flex-row items-center gap-[6px]">
                                                                <span className=" bg-[#FF6F1E] size-[5px] rounded-full"></span>
                                                                <span className="text-b-10-10-400 text-gray-600">MON, MAR 2, 16:00 CET</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="flex flex-row items-center flex-wrap gap-[6px] px-[14px]">
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">TERA</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">MK11</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">PUBG</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">HOTS</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">R6</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-[6px] px-[14px]">
                                                        <div className="bg-primary-light w-full h-[6px] rounded-[4px]  relative">
                                                            <span className=" absolute top-0 left-0 h-[6px] rounded-[4px] bg-primary w-1/5"></span>
                                                        </div>
                                                        <div className="flex flex-row items-center justify-between">
                                                            <span className="text-b-11-12-400 text-gray-700">520 lots</span>
                                                            <span className="text-b-11-12-400 text-gray-700">27 left</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max pb-5">
                                                    <img src={Nexus} alt="nexus" className="rounded-t-xl w-[280px]" />
                                                    <div className="px-[14px] flex flex-row items-center gap-2.5">
                                                        <img src={Xostme} alt="xostme" />
                                                        <div className="flex flex-col gap-2">
                                                            <Link to={location} className="text-b-15-16-600 text-gray-900 hover:text-primary text-animation">NexusRift Masters</Link>
                                                            <div className="flex flex-row items-center gap-[6px]">
                                                                <span className=" bg-[#FF6F1E] size-[5px] rounded-full"></span>
                                                                <span className="text-b-10-10-400 text-gray-600">SUN, APR 29, 11:00 CET</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="flex flex-row items-center flex-wrap gap-[6px] px-[14px]">
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">HS</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">Valorant</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">Dota 2</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">COD</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">R6</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-[6px] px-[14px]">
                                                        <div className="bg-primary-light w-full h-[6px] rounded-[4px]  relative">
                                                            <span className=" absolute top-0 left-0 h-[6px] rounded-[4px] bg-primary w-2/5"></span>
                                                        </div>
                                                        <div className="flex flex-row items-center justify-between">
                                                            <span className="text-b-11-12-400 text-gray-700">18 lots</span>
                                                            <span className="text-b-11-12-400 text-gray-700">21 left</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max pb-5">
                                                    <img src={CyberStorm} alt="cyber-storm" className="rounded-t-xl w-full" />
                                                    <div className="px-[14px] flex flex-row items-center gap-2.5">
                                                        <img src={Clusterhq} alt="clusterhq" />
                                                        <div className="flex flex-col gap-2">
                                                            <Link to={location} className="text-b-15-16-600 text-gray-900 hover:text-primary text-animation">CyberStorm Cup</Link>
                                                            <div className="flex flex-row items-center gap-[6px]">
                                                                <span className=" bg-[#FF6F1E] size-[5px] rounded-full"></span>
                                                                <span className="text-b-10-10-400 text-gray-600">WED, FEB 16, 12:30 CET</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="flex flex-row items-center flex-wrap gap-[6px] px-[14px]">
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">CS 2</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">PUBG</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">RAID</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">COD</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">Fortnite</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-[6px] px-[14px]">
                                                        <div className="bg-primary-light w-full h-[6px] rounded-[4px]  relative">
                                                            <span className=" absolute top-0 left-0 h-[6px] rounded-[4px] bg-primary w-3/4"></span>
                                                        </div>
                                                        <div className="flex flex-row items-center justify-between">
                                                            <span className="text-b-11-12-400 text-gray-700">76 lots</span>
                                                            <span className="text-b-11-12-400 text-gray-700">9 left</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max pb-5">
                                                    <img src={PixelPulse} alt="pixel-pulse" className="rounded-t-xl w-full" />
                                                    <div className="px-[14px] flex flex-row items-center gap-2.5">
                                                        <img src={Jira} alt="clusterhq" />
                                                        <div className="flex flex-col gap-2">
                                                            <Link to={location} className="text-b-15-16-600 text-gray-900 hover:text-primary text-animation">PixelPulse Showdown</Link>
                                                            <div className="flex flex-row items-center gap-[6px]">
                                                                <span className=" bg-[#FF6F1E] size-[5px] rounded-full"></span>
                                                                <span className="text-b-10-10-400 text-gray-600">MON, MAR 2, 16:00 CET</span>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="flex flex-row items-center flex-wrap gap-[6px] px-[14px]">
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">TERA</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">MK11</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">PUBG</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">HOTS</span>
                                                        </div>
                                                        <div className="bg-gray-100 rounded-[4px] flex items-center justify-center px-[6px] py-[5px]">
                                                            <span className="text-gray-600 text-b-11-12-500">R6</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col gap-[6px] px-[14px]">
                                                        <div className="bg-primary-light w-full h-[6px] rounded-[4px]  relative">
                                                            <span className=" absolute top-0 left-0 h-[6px] rounded-[4px] bg-primary w-1/5"></span>
                                                        </div>
                                                        <div className="flex flex-row items-center justify-between">
                                                            <span className="text-b-11-12-400 text-gray-700">520 lots</span>
                                                            <span className="text-b-11-12-400 text-gray-700">27 left</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                        }
                        title="Floyd’s Tournaments"

                    />
                    <Card
                        buttonStatus={false}
                        dotStatus={false}
                        dotContentStatus={true}
                        dotContent={
                            <Link to={location} className="text-primary border-b border-dotted border-b-primary">View All</Link>
                        }
                        content={
                            <div className="flex flex-col gap-5 pl-[30px] py-5">
                                <div className="w-full overflow-x-auto " style={{ scrollbarWidth: "thin", scrollBehavior: "smooth" }}>
                                    <div className="flex flex-row  items-center gap-5 ">
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max pb-5">
                                                    <img src={CallofDuty} alt="call-of-duty" className="rounded-t-xl w-full" />
                                                    <div className="px-[14px] flex flex-row items-center gap-2.5">
                                                        <img src={CallofDutty} alt="call-of-duty" className="rounded-full"/>
                                                        <div className="flex flex-col gap-2">
                                                            <Link to={location} className="text-b-15-16-600 text-gray-900 hover:text-primary text-animation">Call of Duty</Link>
                                                            <span className="text-b-10-10-400 text-gray-600">Playing since 6 Aug, 2018</span>
                                                        </div>

                                                    </div>

                                                    <div className="flex flex-row items-center justify-between flex-wrap px-6">
                                                        <div className="flex flex-col gap-[6px] items-center justify-center">
                                                            <span className="text-b-13-14-500 text-gray-900">79%</span>
                                                            <span className="text-gray-700 text-b-11-12-400">Win-rate</span>
                                                        </div>
                                                        <div className="flex flex-col gap-[6px] items-center justify-center">
                                                            <span className="text-b-13-14-500 text-gray-900">88/100</span>
                                                            <span className="text-gray-700 text-b-11-12-400">Reflex-rate</span>
                                                        </div>
                                                        <div className="flex flex-col gap-[6px] items-center justify-center">
                                                            <span className="text-b-13-14-500 text-gray-900">2367</span>
                                                            <span className="text-gray-700 text-b-11-12-400">Score</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between flex-wrap px-[14px]">
                                                        <img src={AvatarGroup} alt="avatar-group" className="w-[92px] h-[30px]" />
                                                        <div className="flex items-center justify-center px-[6px] py-[5px] bg-warning-light border-warning rounded-[4px]">
                                                            <span className="text-warning text-b-11-12-500">Rank 268</span>
                                                        </div>
                                                    </div>


                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max pb-5">
                                                    <img src={RocketLeague} alt="rocket-league" className="rounded-t-xl w-full" />
                                                    <div className="px-[14px] flex flex-row items-center gap-2.5">
                                                        <img src={Rocketleague} alt="rocket-league" className="rounded-full" />
                                                        <div className="flex flex-col gap-2">
                                                            <Link to={location} className="text-b-15-16-600 text-gray-900 hover:text-primary text-animation">Rocket League</Link>
                                                            <span className="text-b-10-10-400 text-gray-600">Playing since 18 May, 2015</span>
                                                        </div>

                                                    </div>

                                                    <div className="flex flex-row items-center justify-between flex-wrap px-6">
                                                        <div className="flex flex-col gap-[6px] items-center justify-center">
                                                            <span className="text-b-13-14-500 text-gray-900">64%</span>
                                                            <span className="text-gray-700 text-b-11-12-400">Win-rate</span>
                                                        </div>
                                                        <div className="flex flex-col gap-[6px] items-center justify-center">
                                                            <span className="text-b-13-14-500 text-gray-900">9/10</span>
                                                            <span className="text-gray-700 text-b-11-12-400">Reflex-rate</span>
                                                        </div>
                                                        <div className="flex flex-col gap-[6px] items-center justify-center">
                                                            <span className="text-b-13-14-500 text-gray-900">436</span>
                                                            <span className="text-gray-700 text-b-11-12-400">Score</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between flex-wrap px-[14px]">
                                                        <img src={AvatarGroup} alt="avatar-group" className="w-[92px] h-[30px]" />
                                                        <div className="flex items-center justify-center px-[6px] py-[5px] bg-warning-light border-warning rounded-[4px]">
                                                            <span className="text-warning text-b-11-12-500">Rank 5</span>
                                                        </div>
                                                    </div>


                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max pb-5">
                                                    <img src={GTA5} alt="GTA-5" className="rounded-t-xl w-full" />
                                                    <div className="px-[14px] flex flex-row items-center gap-2.5">
                                                        <img src={GTA5Icon} alt="gta-5" className="rounded-full" />
                                                        <div className="flex flex-col gap-2">
                                                            <Link to={location} className="text-b-15-16-600 text-gray-900 hover:text-primary text-animation">GTA 5</Link>
                                                            <span className="text-b-10-10-400 text-gray-600">Playing since 24 Dec, 2018</span>
                                                        </div>

                                                    </div>

                                                    <div className="flex flex-row items-center justify-between flex-wrap px-6">
                                                        <div className="flex flex-col gap-[6px] items-center justify-center">
                                                            <span className="text-b-13-14-500 text-gray-900">87%</span>
                                                            <span className="text-gray-700 text-b-11-12-400">Win-rate</span>
                                                        </div>
                                                        <div className="flex flex-col gap-[6px] items-center justify-center">
                                                            <span className="text-b-13-14-500 text-gray-900">61/100</span>
                                                            <span className="text-gray-700 text-b-11-12-400">Reflex-rate</span>
                                                        </div>
                                                        <div className="flex flex-col gap-[6px] items-center justify-center">
                                                            <span className="text-b-13-14-500 text-gray-900">2367</span>
                                                            <span className="text-gray-700 text-b-11-12-400">Score</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between flex-wrap px-[14px]">
                                                        <img src={AvatarGroup} alt="avatar-group" className="w-[92px] h-[30px]" />
                                                        <div className="flex items-center justify-center px-[6px] py-[5px] bg-success-light border-success rounded-[4px]">
                                                            <span className="text-success text-b-11-12-500">LVL 29</span>
                                                        </div>
                                                    </div>


                                                </div>
                                            }
                                        />
                                         <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max pb-5">
                                                    <img src={CallofDuty} alt="call-of-duty" className="rounded-t-xl w-full" />
                                                    <div className="px-[14px] flex flex-row items-center gap-2.5">
                                                        <img src={CallofDutty} alt="call-of-duty" className="rounded-full"/>
                                                        <div className="flex flex-col gap-2">
                                                            <Link to={location} className="text-b-15-16-600 text-gray-900 hover:text-primary text-animation">Call of Duty</Link>
                                                            <span className="text-b-10-10-400 text-gray-600">Playing since 6 Aug, 2018</span>
                                                        </div>

                                                    </div>

                                                    <div className="flex flex-row items-center justify-between flex-wrap px-6">
                                                        <div className="flex flex-col gap-[6px] items-center justify-center">
                                                            <span className="text-b-13-14-500 text-gray-900">79%</span>
                                                            <span className="text-gray-700 text-b-11-12-400">Win-rate</span>
                                                        </div>
                                                        <div className="flex flex-col gap-[6px] items-center justify-center">
                                                            <span className="text-b-13-14-500 text-gray-900">88/100</span>
                                                            <span className="text-gray-700 text-b-11-12-400">Reflex-rate</span>
                                                        </div>
                                                        <div className="flex flex-col gap-[6px] items-center justify-center">
                                                            <span className="text-b-13-14-500 text-gray-900">2367</span>
                                                            <span className="text-gray-700 text-b-11-12-400">Score</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between flex-wrap px-[14px]">
                                                        <img src={AvatarGroup} alt="avatar-group" className="w-[92px] h-[30px]" />
                                                        <div className="flex items-center justify-center px-[6px] py-[5px] bg-warning-light border-warning rounded-[4px]">
                                                            <span className="text-warning text-b-11-12-500">Rank 268</span>
                                                        </div>
                                                    </div>


                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max pb-5">
                                                    <img src={RocketLeague} alt="rocket-league" className="rounded-t-xl w-full" />
                                                    <div className="px-[14px] flex flex-row items-center gap-2.5">
                                                        <img src={Rocketleague} alt="rocket-league" className="rounded-full" />
                                                        <div className="flex flex-col gap-2">
                                                            <Link to={location} className="text-b-15-16-600 text-gray-900 hover:text-primary text-animation">Rocket League</Link>
                                                            <span className="text-b-10-10-400 text-gray-600">Playing since 18 May, 2015</span>
                                                        </div>

                                                    </div>

                                                    <div className="flex flex-row items-center justify-between flex-wrap px-6">
                                                        <div className="flex flex-col gap-[6px] items-center justify-center">
                                                            <span className="text-b-13-14-500 text-gray-900">64%</span>
                                                            <span className="text-gray-700 text-b-11-12-400">Win-rate</span>
                                                        </div>
                                                        <div className="flex flex-col gap-[6px] items-center justify-center">
                                                            <span className="text-b-13-14-500 text-gray-900">9/10</span>
                                                            <span className="text-gray-700 text-b-11-12-400">Reflex-rate</span>
                                                        </div>
                                                        <div className="flex flex-col gap-[6px] items-center justify-center">
                                                            <span className="text-b-13-14-500 text-gray-900">436</span>
                                                            <span className="text-gray-700 text-b-11-12-400">Score</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between flex-wrap px-[14px]">
                                                        <img src={AvatarGroup} alt="avatar-group" className="w-[92px] h-[30px]" />
                                                        <div className="flex items-center justify-center px-[6px] py-[5px] bg-warning-light border-warning rounded-[4px]">
                                                            <span className="text-warning text-b-11-12-500">Rank 5</span>
                                                        </div>
                                                    </div>


                                                </div>
                                            }
                                        />

                                    </div>
                                </div>
                            </div>

                        }
                        title="Now Playing"

                    />
                    <Card
                        dotStatus={false}
                        buttonStatus={true}
                        buttonTitle="All-time Activity"
                        dotContentStatus={true}
                        title="Recent Activity"
                        dotContent={
                            <div className="flex flex-row  items-center">
                                <span className="pr-2 text-gray-700 text-b-14-14-500">Auto refresh : {refresh ? <>On</> : <>Off</>}</span>
                                <Switch setSwitch={() => setRefresh(!refresh)} status={refresh} size={"medium"} />
                            </div>
                        }
                        content={

                            <div className="flex flex-col px-[30px] py-5">
                                <div className="flex flex-col gap-[30px] relative overflow-hidden">
                                    <span className="w-[1px] absolute h-full bg-gray-300 left-5 -translate-x-1/2 z-0"></span>

                                    <div className="flex flex-row items-start gap-2.5 relative">
                                        <div className="flex flex-col items-center relative">
                                            <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                <FaUsers className="text-gray-600" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[6px]">
                                            <span className="text-b-14-14-400 text-gray-900">
                                                Jenny sent an
                                                <Link to={location} className="text-primary"> inquiry </Link>
                                                about a <Link to={location} className="text-primary"> new product</Link>.
                                            </span>
                                            <span className="text-b-12-12-400 text-gray-600">Today, 9:00 AM</span>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-start gap-2.5 relative w-full">
                                        <div className="flex flex-col items-center relative ">
                                            <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                <FaUsers className="text-gray-600" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[6px] w-full">
                                            <span className="text-b-14-14-400 text-gray-900">
                                                Jenny attended a webinar on new product features.
                                            </span>
                                            <span className="text-b-12-12-400 text-gray-600">3 days ago, 11:45 AM</span>
                                            <div className="flex p-4 border rounded-lg ">
                                                <div className="flex flex-col md:flex-row items-start gap-2.5 md:justify-between justify-center w-full">
                                                    <div className="flex flex-row items-start gap-2.5">
                                                        <FaLaptopCode className="size-4 text-[#7239EA]" />
                                                        <div className="flex flex-col gap-2">
                                                            <span className="text-b-15-16-500 text-gray-900">Leadership Development Series: Part 1</span>
                                                            <span className=" text-gray-600 text-b-12-12-400">The first installment of a leadership development series.</span>
                                                            <div className="flex flex-row items-center gap-[30px] flex-wrap pt-3">
                                                                <div className="flex flex-row items-center gap-[6px]">
                                                                    <span className="text-b-13-14-400 text-gray-600" >Code:</span>
                                                                    <Link to={location} className="text-primary">#leaderdev-1</Link>
                                                                </div>
                                                                <div className="flex flex-row items-center gap-[6px]">
                                                                    <span className="text-b-13-14-400 text-gray-600" >Progress</span>
                                                                    <div className="bg-success-light h-1 w-32 relative">
                                                                        <span className=" absolute h-1 bg-success top-0 left-0 w-20"></span>
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-row items-center gap-[6px]">
                                                                    <span className="text-b-13-14-400 text-gray-600" >Guests:</span>
                                                                    <img src={AvatarGroup} alt="avatare-group" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <Link to={location} className="text-primary border-b border-dotted border-b-primary text-b-13-14-500">View</Link>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-start gap-2.5 relative">
                                        <div className="flex flex-col items-center relative">
                                            <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                <FaShareAlt className="text-gray-600" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[6px]">
                                            <span className="text-b-14-14-400 text-gray-900">
                                                Jenny's last login to the
                                                <Link to={location} className="text-primary"> Customer Portal.</Link>
                                            </span>
                                            <span className="text-b-12-12-400 text-gray-600">5 days ago, 4:07 PM</span>
                                        </div>
                                    </div>



                                    <div className="flex flex-row items-start gap-2.5 relative">
                                        <div className="flex flex-col items-center relative">
                                            <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                <FiCoffee className="text-gray-600" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[6px] w-full">
                                            <span className="text-b-14-14-400 text-gray-900">
                                                Email campaign sent to Jenny for a special promotion.
                                            </span>
                                            <span className="text-b-12-12-400 text-gray-600">1 week ago, 11:45 AM</span>
                                            <div className="flex flex-col items-center justify-center gap-[6px] p-4 border rounded-lg">
                                                <img src={UnderMaintence} alt="maintance" />
                                                <span className="text-b-15-16-500 text-gray-900">First Camping Created</span>
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <span className="text-gray-700 text-b-13-14-400"><Link to={location} className="text-primary text-b-13-14-400">Axio new release </Link> email campaign</span>
                                                    <div className="px-[6px] py-[5px] bg-success-light border border-success-clarity flex rounded-md items-center justify-center ">
                                                        <span className="text-b-11-12-500 text-success">Public</span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-row items-start gap-2.5 relative">
                                        <div className="flex flex-col items-center relative">
                                            <div className="p-2.5 bg-gray-100 rounded-full border flex items-center justify-center z-10">
                                                <IoRocketOutline className="text-gray-600" />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-[6px]">
                                            <span className="text-b-14-14-400 text-gray-900">
                                                Explored niche demo ideas for product-specific solutions.
                                            </span>
                                            <span className="text-b-12-12-400 text-gray-600">3 weeks ago, 4:07 PM</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        }
                    />
                </div>
            </div>

        </div >
    )
}
export default Gamer