

import { GiAbstract080 } from 'react-icons/gi';
import Jennifer from '../../../../assets/icon/jennifer.svg'
import Verify from '../../../../assets/icon/verify.svg'
import { SlLocationPin } from 'react-icons/sl';
import { CiMail } from 'react-icons/ci';
import { FaChevronDown, FaUsers } from 'react-icons/fa';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';
import BadgeOne from '../../../../assets/icon/badge-1.svg'
import BadgeTwo from '../../../../assets/icon/badge-2.svg'
import BadgeThree from '../../../../assets/icon/badge-3.svg'
import BadgeFour from '../../../../assets/icon/badge-4.svg'
import UnlockCreative from '../../../../assets/icon/unlockCreative.svg'
import Chart from '../../../../components/charts/earningChart'



const Default = () => {
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className="rounded-full border border-success">
                    <img src={Jennifer} alt="" className='size-[100px]' />
                </div>
                <div className="flex flex-row items-center gap-1 ">
                    <span>Jennifer Klabber</span>
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
                        <span className='text-gray-600 text-b-14-14-500'>jenny@kteam.com</span>
                    </div>
                </div>
            </div>
            <div className="flex md:flex-row flex-col items-center md:justify-between border-b  justify-center overflow-hidden ">
                <div className="w-full overflow-x-auto flex justify-center items-center">
                    <div className="flex flex-row items-center gap-2.5 min-w-[250px]  ">
                        <div className="flex flex-row items-center gap-1 py-5 px-2.5">
                            <span className='text-b-14-14-500 text-primary'>Profiles</span>
                            <FaChevronDown className='text-b-14-14-500 text-primary' />
                        </div>
                        <div className="flex flex-row items-center gap-1 py-5 px-2.5">
                            <span className='text-b-14-14-400 text-gray-700'>Projects</span>
                            <FaChevronDown className='text-b-14-14-400 text-gray-700' />
                        </div>
                        <div className="flex flex-row items-center gap-1 py-5 px-2.5">
                            <span className='text-b-14-14-400 text-gray-700'>Work</span>
                        </div>
                        <div className="flex items-center gap-1 py-5 px-2.5">
                            <span className='text-b-14-14-400 text-gray-700'>Teams</span>
                        </div>
                        <div className="flex items-center gap-1 py-5 px-2.5">
                            <span className='text-b-14-14-400 text-gray-700'>Network</span>
                        </div>
                        <div className="flex items-center gap-1 py-5 px-2.5">
                            <span className='text-b-14-14-400 text-gray-700'>Activity</span>
                        </div>
                        <div className="flex flex-row items-center gap-1 py-5 px-2.5">
                            <span className='text-b-14-14-400 text-gray-700'>More</span>
                            <FaChevronDown className='text-b-14-14-400 text-gray-700' />
                        </div>
                    </div>
                </div>

                <div className="flex flex-row items-center gap-2.5">
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px] p-4">
                {/* Sol Panel */}
                <div className="md:col-span-1 flex flex-col gap-[30px]">
                    <div className="bg-white  rounded-xl shadow-sm border">
                        <div className="flex-col flex gap-5">
                            <div className="border-b ">
                                <div className="px-[30px] py-5">
                                    <span className='text-b-16-16-600 text-gray-900'>Community Badges</span>
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-start px-[30px] pb-[30px]">
                                <img src={BadgeOne} alt="" />
                                <img src={BadgeTwo} alt="" />
                                <img src={BadgeThree} alt="" />
                                <img src={BadgeFour} alt="" />

                            </div>
                        </div>

                    </div>
                    <div className="bg-white  rounded-xl shadow-sm border">
                        <div className="flex-col flex gap-5">
                            <div className="border-b ">
                                <div className="px-[30px] py-5">
                                    <span className='text-b-16-16-600 text-gray-900'>About</span>
                                </div>
                            </div>
                            <div className="flex flex-row gap-4 pl-[30px] pb-[30px] pr-[50px]">
                                <div className="flex flex-col  gap-5">
                                    <span className='text-gray-600 text-b-14-14-400'>Age:</span>
                                    <span className='text-gray-600 text-b-14-14-400'>City:</span>
                                    <span className='text-gray-600 text-b-14-14-400'>State:</span>
                                    <span className='text-gray-600 text-b-14-14-400'>Country:</span>
                                    <span className='text-gray-600 text-b-14-14-400'>Postcode:</span>
                                    <span className='text-gray-600 text-b-14-14-400'>Phone:</span>
                                    <span className='text-gray-600 text-b-14-14-400'>Email:</span>

                                </div>
                                <div className="flex flex-col  gap-5">
                                    <span className='text-b-14-14-400 text-gray-900'>32</span>
                                    <span className='text-b-14-14-400 text-gray-900'>Amsterdam</span>
                                    <span className='text-b-14-14-400 text-gray-900'>North Holland</span>
                                    <span className='text-b-14-14-400 text-gray-900'>Netherlands</span>
                                    <span className='text-b-14-14-400 text-gray-900'>1092 NL</span>
                                    <span className='text-b-14-14-400 text-gray-900'>+31 6 1234 56 78</span>
                                    <span className='text-b-14-14-400 text-gray-900'>jenny@ktstudio.com</span>

                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border">Work Experience</div>
                    <div className="bg-white p-4 rounded-xl shadow-sm border">Skills</div>
                </div>

                <div className="md:col-span-2 flex flex-col gap-[30px]">
                    <div className="bg-white rounded-xl shadow-sm border">
                        <div className="flex md:flex-row flex-col items-center justify-between gap-10 px-10 py-[50px]">
                            <div className="flex flex-col gap-3">
                                <span className='text-gray-900 text-h-22-22-600 max-w-[250px]'>Unlock Creative
                                    Partnerships on Our Blog</span>
                                <p className='max-w-[437px] text-b-14-22-400 text-gray-700'>
                                    Explore exciting collaboration opportunities with our blog. We're open to partnerships, guest posts, and more. Join us to share your insights and grow your audience.
                                </p>
                            </div>
                            <img src={UnlockCreative} alt="" />

                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-sm border">
                        <Chart />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                        <div className="bg-white rounded-xl shadow-sm border"></div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border">Assistance</div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                        <div className="bg-white p-4 rounded-xl shadow-sm border">Contributors</div>
                        <div className="bg-white p-4 rounded-xl shadow-sm border">Projects</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Default;