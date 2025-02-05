

import { GiAbstract080 } from 'react-icons/gi';
import Jennifer from '../../../../assets/icon/jennifer.svg'
import Verify from '../../../../assets/icon/verify.svg'
import { SlLocationPin } from 'react-icons/sl';
import { CiMail } from 'react-icons/ci';
import { FaChevronDown, FaUsers } from 'react-icons/fa';
import { IoChatbubblesOutline } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';


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
                <div className="flex flex-row items-center gap-5">
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
            <div className="flex flex-row items-center justify-between border-b">
                <div className="flex flex-row items-center gap-2.5">
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

        </div>
    );
}

export default Default;