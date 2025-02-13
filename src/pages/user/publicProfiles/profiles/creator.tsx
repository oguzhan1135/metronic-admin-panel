import { BsThreeDotsVertical } from "react-icons/bs"
import { CiMail } from "react-icons/ci"
import { FaFacebook, FaUsers, FaYoutube } from "react-icons/fa6"
import { GiAbstract080 } from "react-icons/gi"
import { IoChatbubblesOutline } from "react-icons/io5"
import { SlLocationPin } from "react-icons/sl"
import Tyler from '../../../../assets/icon/tyler-hero.svg'
import Esther from '../../../../assets/icon/ester-hoeard.svg'
import Cody from '../../../../assets/icon/cody-fisher.svg'
import Arlene from '../../../../assets/icon/arlene-mccoy.svg'
import Jennifer from '../../../../assets/icon/jennifer.svg'
import BadgeOne from '../../../../assets/icon/badge-1.svg'
import BadgeTwo from '../../../../assets/icon/badge-2.svg'
import BadgeThree from '../../../../assets/icon/badge-3.svg'
import BadgeFour from '../../../../assets/icon/badge-4.svg'
import Menu from "../../../../components/publicProfile/hovermenu"
import Verify from '../../../../assets/icon/verify.svg'
import Inferno from "../../../../assets/icon/inferno.svg"
import Card from "../../../../components/publicProfile/card"
import Arrow from '../../../../assets/icon/arrow.svg'


const Creator = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className="rounded-full border border-success">
                    <img src={Inferno} alt="" className='size-[100px]' />
                </div>
                <div className="flex flex-row items-center gap-1 ">
                    <span className="text-b-18-18-600 text-gray-900">Inferno</span>
                    <img src={Verify} alt="" />
                </div>
                <div className="flex md:flex-row flex-col items-center gap-5">
                    <div className="flex flex-row items-center gap-[5px]">
                        <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                        <span className='text-gray-600 text-b-14-14-500'>inferno.com</span>
                    </div>
                    <div className="flex flex-row items-center gap-[5px]">
                        <SlLocationPin className='text-gray-600 text-b-14-14-500' />
                        <span className='text-gray-600 text-b-14-14-500'>SF, Bay Area</span>
                    </div>
                    <div className="flex flex-row items-center gap-[5px]">
                        <CiMail className='text-gray-600 text-b-14-14-500' />
                        <span className='text-gray-600 text-b-14-14-500'>info@inferno.com</span>
                    </div>
                </div>
            </div>
            {/* {Sub  menu} */}
            <div className="flex lg:flex-row flex-col items-center justify-between border-b relative ">
                <Menu />

                <div className="flex flex-row items-center gap-2.5 ml-auto lg:ml-0">
                    <div className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-white gap-1">
                        <FaUsers />
                        <span>Connect</span>
                    </div>
                    <div className="p-2.5 rounded-md border flex items-center justify-center">
                        <IoChatbubblesOutline className='text-gray-500' />
                    </div>
                    <div className="p-2.5 rounded-md border flex items-center justify-center">
                        <BsThreeDotsVertical className='text-gray-500' />
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-[30px] p-4">
                <div className="xl:col-span-1 flex flex-col gap-[30px]">
                    {/* {Data} */}
                    <div className="bg-white  rounded-xl shadow-sm border">
                        <div className="flex items-center justify-center py-[30px] ">
                            <div className="flex flex-row items-center gap-5">
                                <div className="flex  flex-col gap-2.5 items-center pr-5 border-r">
                                    <span className="text-h-26-26-600 text-gray-900">397</span>
                                    <span className="text-b-16-16-400 text-gray-700">Releases</span>
                                </div>

                                <div className="flex  flex-col gap-2.5 items-center pr-5">
                                    <span className="text-h-26-26-600 text-gray-900">89k</span>
                                    <span className="text-b-16-16-400 text-gray-700">Earnings</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* {About} */}
                    <Card
                        dotStatus={false}
                        buttonStatus={true}
                        buttonTitle="Join Our Team"
                        title="Members"
                        content={
                            <div className="flex flex-row items-center flex-wrap  max-w-[320px] px-[30px] gap-2.5 py-5">
                                <img src={Jennifer} alt="" className="size-9" />
                                <img src={Tyler} alt="" className="size-9" />
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
                        title="About"
                        content={
                            <div className="flex flex-col px-[30px] gap-5  py-5">
                                <p>Experienced and creative professional with a passion great as for problem-solving and a commitment to excellence.</p>
                                <div className="flex flex-row items-center gap-2.5">
                                    <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                    <span className="text-b-14-14-400 text-gray-900">KeenThemes</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                    <span className="text-b-14-14-400 text-gray-900">Author Level 100</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                    <span className="text-b-14-14-400 text-gray-900">UI/UX Desiger</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                    <span className="text-b-14-14-400 text-gray-900">jenny@kteam.com</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <CiMail className='text-gray-600 text-b-14-14-500' />
                                    <span className="text-b-14-14-400 text-gray-900">jenny@kteam.com</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <FaFacebook className='text-gray-600 text-b-14-14-500' />
                                    <span className="text-b-14-14-400 text-gray-900">keenthemes</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <FaYoutube className='text-gray-600 text-b-14-14-500' />
                                    <span className="text-b-14-14-400 text-gray-900">keenthemes</span>
                                </div>
                            </div>

                        }
                    />
                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        title='Community Badges'
                        content={
                            <div className="flex-col flex gap-5">

                                <div className="flex flex-row items-center justify-start px-[30px] py-5">
                                    <img src={BadgeOne} alt="" />
                                    <img src={BadgeTwo} alt="" />
                                    <img src={BadgeThree} alt="" />
                                    <img src={BadgeFour} alt="" />

                                </div>
                            </div>
                        }
                    />



                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        title='Skills'
                        content={
                            <div className="flex flex-col gap-5">

                                <div className="flex flex-row items-center flex-wrap gap-[10px] px-[30px] py-5">
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Web Design</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Code Review</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Figma</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Product Development</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Webflow</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>AI</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>noCode</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Management</span>
                                    </div>

                                </div>
                            </div>
                        }
                    />
                </div>

                <div className="lg:col-span-2 flex flex-col gap-[30px]">
                    <div className="bg-white rounded-xl shadow-sm border">
                        <div className="flex md:flex-row flex-col items-center justify-between gap-10 px-10 py-[50px]">
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-1">
                                    <span className='text-gray-900 text-h-22-22-600 max-w-[280px]'>Restyle Your Space:
                                    </span>
                                    <span className='text-gray-900 text-h-22-22-600'>Soft Goods Makeover Ideas</span>
                                </div>

                                <p className='max-w-[437px] text-b-14-22-400 text-gray-700'>
                                    Transform your living space beautifully with our 'Restyle Your Space: Soft Goods Makeover Ideas' tutorial.
                                </p>

                            </div>
                            <img src={Arrow} alt="" />

                        </div>
                    </div>



                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                        {/* iki alan sağ */}
                    </div>
                    {/* {Projects} */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">

                        {/* iki alan sağ */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Creator