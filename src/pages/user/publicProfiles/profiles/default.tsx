

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
import Jira from '../../../../assets/icon/jira-work.svg'
import Pesto from '../../../../assets/icon/paccion.svg'
import Perrier from '../../../../assets/icon/perrier.svg'
import { FaEllipsisVertical } from 'react-icons/fa6';
import DonutChart from '../../../../components/charts/donutChart';
import UserOne from '../../../../assets/icon/user-group-1.svg'
import UserTwo from '../../../../assets/icon/user-group-2.svg'
import UserThree from '../../../../assets/icon/user-group-3.svg'
import UserFour from '../../../../assets/icon/user-group-4.svg'
import UserFive from '../../../../assets/icon/user-group-5.svg'
import { useState } from 'react';
import Contributors from '../../../../components/publicProfile/contributors';
import PDF from '../../../../assets/icon/pdf.svg'
import DOC from '../../../../assets/icon/doc.svg'
import JS from '../../../../assets/icon/javascript.svg'
import AI from '../../../../assets/icon/illustrator.svg'
import Card from '../../../../components/publicProfile/card';
import Menu from '../../../../components/publicProfile/hovermenu';



interface Project {
    id: number;
    projectName: string;
    progressStatus: boolean;
    progress: number;
    people: React.ReactElement;
    dueDate: string;
}



const Default = () => {

    const [project, setProject] = useState<Project[]>([
        {
            id: 1,
            projectName: "Acme software development",
            progressStatus: true,
            progress: 60,
            dueDate: "24 Aug, 2024",
            people: <img src={UserOne} />
        },
        {
            id: 2,
            projectName: "Strategic Partnership Deal",
            progressStatus: false,
            progress: 0,
            dueDate: "10 Sep, 2024",
            people: <img src={UserTwo} />
        },
        {
            id: 3,
            projectName: "Client Onboarding",
            progressStatus: true,
            progress: 20,
            dueDate: "19 Sep, 2024",
            people: <img src={UserThree} />
        },
        {
            id: 4,
            projectName: "Widget Supply Agreement",
            progressStatus: true,
            progress: 100,
            dueDate: "1 Feb, 2025",
            people: <img src={UserFour} />
        },
        {
            id: 5,
            projectName: "Project X Redesign",
            progressStatus: true,
            progress: 80,
            dueDate: "24 Aug, 2024",
            people: <img src={UserFive} />
        }
    ])


    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 items-center justify-center">
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
                        <span className='text-gray-600 text-b-14-14-500'>jenny@kteam.com</span>
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
                    {/* {Community Badge} */}
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
                    {/* {About} */}
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
                    {/* {Work experience} */}
                    <div className="bg-white  rounded-xl shadow-sm border">
                        <div className="flex-col flex gap-5">
                            <div className="border-b ">
                                <div className="px-[30px] py-5">
                                    <span className='text-b-16-16-600 text-gray-900'>Work Experience</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 px-[30px]">
                                <div className="flex flex-row items-start gap-[14px]">
                                    <img src={Jira} alt="" />
                                    <div className="flex flex-col gap-[7px]">
                                        <span className='text-b-14-14-500 text-primary'>Esprito Studios</span>
                                        <span className='text-b-14-14-500 text-gray-900'>Senior Project Manager</span>
                                        <span className='text-b-12-12-400 text-gray-700'>2019 - Present</span>
                                    </div>
                                </div>
                                <span className='text-b-14-14-500 text-gray-600'>Previous Jobs</span>
                                <div className="flex flex-row items-start gap-[14px]">
                                    <img src={Pesto} alt="" />
                                    <div className="flex flex-col gap-[7px]">
                                        <span className='text-b-14-14-500 text-primary'>Previous Jobs</span>
                                        <span className='text-b-14-14-500 text-gray-900'>CRM Product Lead </span>
                                        <span className='text-b-12-12-400 text-gray-700'>2012 - 2019</span>
                                    </div>
                                </div>
                                <div className="flex flex-row items-start gap-[14px]">
                                    <img src={Perrier} alt="" />
                                    <div className="flex flex-col gap-[7px]">
                                        <span className='text-b-14-14-500 text-primary'>Perrier Technologies</span>
                                        <span className='text-b-14-14-500 text-gray-900'>UX Research</span>
                                        <span className='text-b-12-12-400 text-gray-700'>2010 - 2012</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-b-md border-l border border-gray-200 p-4 flex justify-center items-center w-full">
                                <span className="text-b-13-14-500 text-primary border-b border-dotted border-b-primary cursor-pointer">Open to work</span>
                            </div>

                        </div>

                    </div>
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
                    {/* {Unlock Creative area} */}
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
                    {/* {Media Uploads} */}
                    <Card
                        title='Media Uploads'
                        buttonStatus={false}
                        dotStatus={true}
                        content={<Chart />}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                        {/* {Contributors} */}

                        <Card
                            dotStatus={true}
                            buttonStatus={true}
                            title='Contributors'
                            buttonTitle='All Contributors'
                            content={<Contributors />}
                        />
                        {/* {Assistance} */}
                        <Card
                            title='Assistance'
                            buttonStatus={false}
                            dotStatus={true}
                            content={<DonutChart />}
                        />
                    </div>
                    {/* {Projects} */}
                    <Card
                        buttonStatus={true}
                        buttonTitle='All Project'
                        title='Project'
                        dotStatus={true}
                        content={
                            <>
                                <div className="flex flex-col overflow-hidden ">

                                    <div className="flex flex-col overflow-x-auto">
                                        <table className=" border-collapse  min-w-[600px]">
                                            <thead>
                                                <tr className="bg-gray-100">
                                                    <th className="px-[30px] py-[13px] text-left">
                                                        <span className="text-b-13-14-400 text-gray-700">Project Name</span>
                                                    </th>
                                                    <th className="px-[30px] py-[13px] text-center">
                                                        <span className="text-b-13-14-400 text-gray-700">Progress</span>
                                                    </th>
                                                    <th className="px-[30px] py-[13px] text-left">
                                                        <span className="text-b-13-14-400 text-gray-700">People</span>
                                                    </th>
                                                    <th className="px-[30px] py-[13px] text-left">
                                                        <span className="text-b-13-14-400 text-gray-700">Due Date</span>
                                                    </th>
                                                    <th className="px-[30px] py-[13px] text-left">

                                                    </th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    project.map((item) => (
                                                        <tr className="border-t" key={item.id}>
                                                            <td className='px-[30px] py-[21px] '>
                                                                <span className='text-b-14-14-500 text-gray-900'>{item.projectName}</span>
                                                            </td>
                                                            <td className='px-[30px] py-[21px] '>
                                                                <div className={`rounded-[4px] ${item.progressStatus ? 'bg-primary-light' : 'bg-gray-300'} h-1 w-[120px] relative`}>
                                                                    <span
                                                                        className={`absolute h-1 rounded-[4px] transition-all duration-300 ${item.progress === 100 ? 'bg-success' : 'bg-primary'}`}
                                                                        style={{ width: item.progressStatus ? `${item.progress}%` : '0%' }}
                                                                    ></span>                                                            </div>
                                                            </td>
                                                            <td className='px-[30px] py-[21px] '>
                                                                {item.people}
                                                            </td>
                                                            <td className='px-[30px] py-[21px] '>
                                                                <span className='text-b-14-14-400 text-gray-800'>{item.dueDate}</span>
                                                            </td>
                                                            <td className='px-[30px] py-[21px] '>
                                                                <FaEllipsisVertical className='text-gray-600' />
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </>
                        }
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">

                        <Card
                            dotStatus={true}
                            buttonStatus={true}
                            title='Contributors'
                            buttonTitle='All Contributors'
                            content={<Contributors />}
                        />

                        {/* {Recent uploads} */}
                        <Card
                            dotStatus={true}
                            buttonStatus={true}
                            buttonTitle='All Files'
                            title='Recent Uploads'
                            content={
                                <>
                                    <div className="flex flex-col py-5 gap-5">
                                        <div className="flex flex-row items-center justify-between px-[30px]">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={PDF} alt="" />
                                                <div className="flex flex-col gap-2">
                                                    <span className='text-b-14-14-500 text-gray-900'>Project-pitch.pdf</span>
                                                    <div className="flex flex-row items-center gap-1 flex-wrap">
                                                        <span className='text-b-12-12-400 text-gray-700'>4.7 MB</span>
                                                        <span className='text-b-12-12-400 text-gray-700'> 26 Sep 2024 3:20 PM</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <FaEllipsisVertical className='text-gray-600' />
                                        </div>
                                        <div className="flex flex-row items-center justify-between px-[30px]">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={DOC} alt="" />
                                                <div className="flex flex-col gap-2">
                                                    <span className='text-b-14-14-500 text-gray-900'>Report-v1.docx</span>
                                                    <div className="flex flex-row items-center gap-1 flex-wrap">
                                                        <span className='text-b-12-12-400 text-gray-700'>2.3 MB</span>
                                                        <span className='text-b-12-12-400 text-gray-700'> 26 Sep 2024 3:20 PM</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <FaEllipsisVertical className='text-gray-600' />
                                        </div>
                                        <div className="flex flex-row items-center justify-between px-[30px]">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={JS} alt="" />
                                                <div className="flex flex-col gap-2">
                                                    <span className='text-b-14-14-500 text-gray-900'>Framework-App.js</span>
                                                    <div className="flex flex-row items-center gap-1 flex-wrap">
                                                        <span className='text-b-12-12-400 text-gray-700'>0.8 MB</span>
                                                        <span className='text-b-12-12-400 text-gray-700'> 17 Oct 2024 6:46 PM</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <FaEllipsisVertical className='text-gray-600' />
                                        </div>
                                        <div className="flex flex-row items-center justify-between px-[30px]">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={AI} alt="" />
                                                <div className="flex flex-col gap-2">
                                                    <span className='text-b-14-14-500 text-gray-900'>Mobile-logo.ai</span>
                                                    <div className="flex flex-row items-center gap-1 flex-wrap">
                                                        <span className='text-b-12-12-400 text-gray-700'>0.2 MB</span>
                                                        <span className='text-b-12-12-400 text-gray-700'> 4 Nov 2024 11:30 AM</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <FaEllipsisVertical className='text-gray-600' />
                                        </div>
                                    </div>

                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Default;