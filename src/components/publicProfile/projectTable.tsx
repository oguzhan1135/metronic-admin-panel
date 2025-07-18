import { HiOutlineDotsVertical } from "react-icons/hi"
import { Link } from "react-router"
import Card from "../card/card"
import UserOne from '@assets/user-group-1.svg'
import UserTwo from '@assets/user-group-2.svg'
import UserThree from '@assets/user-group-3.svg'
import UserFour from '@assets/user-group-4.svg'
import UserFive from '@assets/user-group-5.svg'
import { useState } from 'react';

interface Project {
    id: number;
    projectName: string;
    progressStatus: boolean;
    progress: number;
    people: React.ReactElement;
    dueDate: string;
}

const ProjectTable = () => {

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

    type SortDirection = 'asc' | 'desc';
    type SortKey = 'projectName' | 'progress' | 'dueDate';
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [sortKey, setSortKey] = useState<SortKey>('projectName');


    const handleSort = (key: SortKey) => {
        const isSameKey = sortKey === key;
        const newDirection: SortDirection = isSameKey && sortDirection === 'asc' ? 'desc' : 'asc';

        let filtered = [...project];

        filtered.sort((a, b) => {
            let valA = a[key];
            let valB = b[key];

            return newDirection === 'asc'
                ? String(valA).localeCompare(String(valB))
                : String(valB).localeCompare(String(valA));
        });

        setSortKey(key);
        setSortDirection(newDirection);
        setProject(filtered)
    };

    return (
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
                                        <th onClick={() => handleSort("projectName")} className="px-[30px] py-[13px] text-left cursor-pointer">
                                            <span className="text-b-13-14-400 text-gray-700">Project Name</span>
                                        </th>
                                        <th onClick={() => handleSort("progress")} className="px-[30px] py-[13px] text-center cursor-pointer">
                                            <span className="text-b-13-14-400 text-gray-700">Progress</span>
                                        </th>
                                        <th className="px-[30px] py-[13px] text-left">
                                            <span className="text-b-13-14-400 text-gray-700">People</span>
                                        </th>
                                        <th onClick={() => handleSort("dueDate")} className="px-[30px] py-[13px] text-left cursor-pointer">
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
                                                    <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>{item.projectName}</Link>
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
                                                    <div className="p-[7px] rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                        <HiOutlineDotsVertical className="size-[18px] text-gray-600" />
                                                    </div>
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
    )
}

export default ProjectTable