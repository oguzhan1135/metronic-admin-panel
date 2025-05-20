import { Link } from "react-router"
import Card from "@components/card/card"
import { useState } from 'react';
import { FaDownload } from "react-icons/fa6";

interface Project {
    id: number;
    invoice: string;
    status: string;
    amount: number;
    date: string;
}

const BillingTable = () => {
    const [billing, setBilling] = useState<Project[]>([
        {
            id: 1,
            invoice: "Invoice-2024-xd912c",
            status: "upcoming",
            amount: 24.00,
            date: "6 Aug, 2024	",
        },
        {
            id: 2,
            invoice: "Invoice-2024-rq857m",
            status: "paid",
            amount: 29.99,
            date: "17 Jun, 2024	",
        },
        {
            id: 3,
            invoice: "Invoice-2024-jk563z",
            status: "paid",
            amount: 24.00,
            date: "30 Apr, 2024	",
        },
        {
            id: 4,
            invoice: "Invoice-2024-hg234x",
            status: "declined",
            amount: 6.59,
            date: "21 Apr, 2024	",
        },
        {
            id: 5,
            invoice: "Invoice-2024-lp098y	",
            status: "paid",
            amount: 24.00,
            date: "14 mar, 2024	",
        },
    ])

    return (
        <Card
            buttonStatus={true}
            buttonTitle='View all Payments'
            title='Billing and Invoicing'
            dotStatus={false}
            dotContentStatus={true}
            dotContent={
                <>
                    <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white dark:bg-gray-300 text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer">
                        <div className="flex flex-row items-center gap-1 ">
                            <FaDownload className="text-gray-600 size-[14px]" />
                            Download All
                        </div>
                    </button>
                </>
            }
            content={
                <>
                    <div className="flex flex-col overflow-hidden ">

                        <div className="flex flex-col overflow-x-auto custom-scroll">
                            <table className=" border-collapse  min-w-[600px]">
                                <thead>
                                    <tr className="bg-gray-100 dark:bg-coal-200">
                                        <th className="px-[30px] py-[13px] text-left">
                                            <span className="text-b-13-14-400 text-gray-700">Invoice</span>
                                        </th>
                                        <th className="px-[30px] py-[13px] text-right">
                                            <span className="text-b-13-14-400 text-gray-700">Status</span>
                                        </th>
                                        <th className="px-[30px] py-[13px] text-right">
                                            <span className="text-b-13-14-400 text-gray-700">Date</span>
                                        </th>
                                        <th className="px-[30px] py-[13px] text-right">
                                            <span className="text-b-13-14-400 text-gray-700">Amount</span>
                                        </th>
                                        <th className="px-[30px] py-[13px] text-right">
                                                
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        billing.map((item) => (
                                            <tr className="border-t" key={item.id}>
                                                <td className='px-[30px] py-[21px] '>
                                                    <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>{item.invoice}</Link>
                                                </td>

                                                <td className='px-[30px] py-[21px] items-center flex justify-end'>
                                                    {
                                                        item.status === "upcoming" ?
                                                            <>
                                                                <div className="bg-warning-light px-[6px] py-[5px] border border-warning flex rounded-md items-center justify-center w-max ">
                                                                    <span className="text-b-11-12-500 text-warning">Upcoming</span>
                                                                </div>
                                                            </> :
                                                            item.status === "paid" ?
                                                                <>
                                                                    <div className="bg-success-light border border-success px-[6px] py-[5px] flex rounded-md items-center justify-center w-max ">
                                                                        <span className="text-success text-b-11-12-500">Paid</span>
                                                                    </div>
                                                                </> :

                                                                item.status === "declined" ?
                                                                    <>
                                                                        <div className="bg-danger-light px-[6px] py-[5px] border border-danger flex rounded-md items-center justify-center w-max">
                                                                            <span className="text-b-11-12-500 text-danger">Declined</span>
                                                                        </div>
                                                                    </> : null
                                                    }
                                                </td>

                                                <td className='px-[30px] py-[21px] text-right'>
                                                    <span className='text-b-14-14-400 text-gray-800'>{item.date}</span>
                                                </td>
                                                <td className='px-[30px] py-[21px] text-right'>
                                                    <span className="text-b-14-14-400 text-gray-800">${item.amount}</span>
                                                </td>
                                                <td className='px-[30px] py-[21px] text-right'>
                                                    <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                        <FaDownload className="text-primary size-[14px]" />
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

export default BillingTable