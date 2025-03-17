import { HiOutlineDotsVertical } from "react-icons/hi"
import { Link } from "react-router"
import Card from "../card/card"
import { useState } from 'react';

interface Project {
    id: number;
    dealName: string;
    status: string;
    amount: number;
    duration: string;
}

const DealTable = () => {
    const [project, setProject] = useState<Project[]>([
        {
            id: 1,
            dealName: "Acme software development",
            status: "ongoing",
            amount: 5000,
            duration: "30 days",
        },
        {
            id: 2,
            dealName: "Strategic Partnership Deal",
            status: "closed",
            amount: 12500,
            duration: "45 days",
        },
        {
            id: 3,
            dealName: "Client Onboarding",
            status: "onHold",
            amount: 18000,
            duration: "60 days",
        },
        {
            id: 4,
            dealName: "Widget Supply Agreement",
            status: "canceled",
            amount: 3500,
            duration: "10 days",
        },
        {
            id: 5,
            dealName: "Project X Redesign",
            status: "closed",
            amount: 8200,
            duration: "15 days",
        },
    ])

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
                                        <th className="px-[30px] py-[13px] text-left">
                                            <span className="text-b-13-14-400 text-gray-700">Deal Name</span>
                                        </th>
                                        <th className="px-[30px] py-[13px] text-left">
                                            <span className="text-b-13-14-400 text-gray-700">Amount</span>
                                        </th>
                                        <th className="px-[30px] py-[13px] text-left">
                                            <span className="text-b-13-14-400 text-gray-700">Status</span>
                                        </th>
                                        <th className="px-[30px] py-[13px] text-left">
                                            <span className="text-b-13-14-400 text-gray-700">Duration</span>
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
                                                    <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>{item.dealName}</Link>
                                                </td>
                                                <td className='px-[30px] py-[21px] '>
                                                    <span className="text-b-14-14-400 text-gray-800">${item.amount}</span>
                                                </td>
                                                <td className='px-[30px] py-[21px] '>
                                                    {
                                                        item.status === "ongoing" ?
                                                            <>
                                                                <div className="bg-primary-light px-[6px] py-[5px] border border-primary flex rounded-md items-center justify-center w-max ">
                                                                    <span className="text-b-11-12-500 text-primary">Ongoing</span>
                                                                </div>
                                                            </> :
                                                            item.status === "closed" ?
                                                                <>
                                                                    <div className="bg-success-light border border-success px-[6px] py-[5px] flex rounded-md items-center justify-center w-max ">
                                                                        <span className="text-success text-b-11-12-500">Closed</span>
                                                                    </div>
                                                                </> :
                                                                item.status === "onHold" ?
                                                                    <>
                                                                        <div className="bg-warning-light px-[6px] py-[5px] border border-warning flex rounded-md items-center justify-center w-max ">
                                                                            <span className="text-b-11-12-500 text-warning">On Hold</span>
                                                                        </div>
                                                                    </> :
                                                                    item.status === "canceled" ?
                                                                        <>
                                                                            <div className="bg-danger-light px-[6px] py-[5px] border border-danger flex rounded-md items-center justify-center w-max">
                                                                                <span className="text-b-11-12-500 text-danger">Canceled</span>
                                                                            </div>
                                                                        </> : null
                                                    }
                                                </td>
                                                <td className='px-[30px] py-[21px] '>
                                                    <span className='text-b-14-14-400 text-gray-800'>{item.duration}</span>
                                                </td>
                                                <td className='px-[30px] py-[21px] '>
                                                    <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                        <HiOutlineDotsVertical />
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

export default DealTable