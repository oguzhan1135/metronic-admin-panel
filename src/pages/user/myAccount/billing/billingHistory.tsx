import Card from "../../../../components/card/card"
import Menu from "../../../../components/myAccount/hoverMenu"
import { FaArrowLeft, FaArrowRight, FaDownload } from "react-icons/fa"
import { useEffect, useState } from "react"
import { Link } from "react-router"

interface Project {
    id: number;
    invoice: string;
    status: string;
    amount: number;
    date: string;
}
const BillingHistory = () => {
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
            date: "08 Jan, 2024	",
        },
        {
            id: 6,
            invoice: "Invoice-2024-q196l",
            status: "paid",
            amount: 257.00,
            date: "6 Aug, 2024	",
        },
        {
            id: 7,
            invoice: "Invoice-2024-m113s",
            status: "paid",
            amount: 67.00,
            date: "07 Nov, 2024	",
        },
        {
            id: 8,
            invoice: "Invoice-2024-u859c",
            status: "declined",
            amount: 494.00,
            date: "16 May, 2024	",
        },
        {
            id: 9,
            invoice: "Invoice-2024-m803g",
            status: "paid",
            amount: 142.00,
            date: "16 Mar, 2024",
        },
        {
            id: 10,
            invoice: "Invoice-2024-r204u",
            status: "paid",
            amount: 35.00,
            date: "25 Mar, 2024	",
        },
    ])

    const [showCount, setShowCount] = useState(5);
    const [upgradeData, setUpgradeData] = useState(billing.slice(0, showCount));

    const previousData = () => {
        setShowCount(showCount);
        setUpgradeData(billing.slice(0, showCount))
    };

    const nextData = () => {
        setUpgradeData(billing.slice(showCount, billing.length + showCount))

    };
    const [selected, setSelected] = useState(1)
    useEffect(() => {
        if (showCount !== 5) {
            setUpgradeData(billing.slice(0, showCount))
        }
        else {
            setUpgradeData(billing.slice(0, 5))
        }


    }, [showCount])



    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Billing History</h1>
                    <span className='text-b-14-14-400 text-gray-700'>Central Hub for Personal Customization</span>
                </div>
                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer">
                    Billing
                </button>

            </div>
            <Card
                buttonStatus={true}
                title='Billing and Invoicing'
                dotStatus={false}
                dotContentStatus={true}
                dotContent={
                    <>
                        <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer">
                            <div className="flex flex-row items-center gap-1">
                                <FaDownload className="text-gray-600 size-[14px]" />
                                Download All
                            </div>
                        </button>
                    </>
                }
                content={
                    <>
                        <div className="flex flex-col overflow-hidden ">

                            <div className="flex flex-col overflow-x-auto">
                                <table className=" border-collapse  min-w-[1000px]">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="px-[21px] py-[11px]">
                                                <input type="checkbox" name="" id="" className="flex items-center justify-center" />
                                            </th>
                                            <th className="px-5 border text-left py-[13px]">
                                                <span className="text-b-13-14-400 text-gray-700">Invoice</span>
                                            </th>
                                            <th className="px-5 border text-left py-[13px]">
                                                <span className="text-b-13-14-400 text-gray-700">Status</span>
                                            </th>
                                            <th className="px-5 border text-left py-[13px]">
                                                <span className="text-b-13-14-400 text-gray-700">Date</span>
                                            </th>
                                            <th className="px-5 border text-left py-[13px]">
                                                <span className="text-b-13-14-400 text-gray-700">Due Date</span>
                                            </th>
                                            <th className="px-5 border text-left py-[13px]">
                                                <span className="text-b-13-14-400 text-gray-700">Amount</span>
                                            </th>
                                            <th className="px-5 border text-left py-[13px]">

                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            upgradeData.map((item) => (
                                                <tr className="border-t" key={item.id}>
                                                    <td className="px-[21px] py-[11px]">
                                                        <input type="checkbox" name={item.invoice} id={item.invoice} />
                                                    </td>
                                                    <td className='px-5 py-[21px] border '>
                                                        <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>{item.invoice}</Link>
                                                    </td>

                                                    <td className='px-5 py-[21px] border'>
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

                                                    <td className='px-5 py-[21px] text-left border'>
                                                        <span className='text-b-14-14-400 text-gray-800'>{item.date}</span>
                                                    </td>
                                                    <td className='px-5 py-[21px] text-left border'>
                                                        <span className='text-b-14-14-400 text-gray-800'>{item.date}</span>
                                                    </td>
                                                    <td className='px-5 py-[21px] text-left border'>
                                                        <span className="text-b-14-14-400 text-gray-800">${item.amount}</span>
                                                    </td>
                                                    <td className='px-5 py-[21px] text-right border'>
                                                        <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                            <span className="text-primary border-b border-dotted border-b-primary text-b-13-14-500">Download</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                            <div className="flex flex-row justify-between items-center p-5 flex-wrap ">
                                <div className="flex flex-row gap-3 items-center">
                                    <span>Show</span>
                                    <select

                                        className="outline-none rounded-md p-2.5 cursor-pointer"
                                        value={showCount}
                                        onChange={(e) => setShowCount(Number(e.target.value))}
                                    >
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                    </select>
                                    <span>per page</span>
                                </div>

                                <div className="flex flex-row items-center gap-0.5">
                                    <span className="pr-4">1-10 of 52</span>
                                    <FaArrowLeft onClick={() => { previousData(); setSelected(1) }} className="text-gray-400 cursor-pointer" />
                                    <button className={`px-2.5 py-2 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg text-b-14-14-400 text-gray-800 ${selected === 1 ? 'bg-gray-200 text-gray-800' : 'bg-transparent text-gray-700'} `} onClick={() => { previousData(); setSelected(1) }}>1</button>
                                    <span className={`px-2.5 py-2 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg text-b-14-14-400  ${selected === 2 ? 'bg-gray-200 text-gray-800' : 'bg-transparent text-gray-700'}  ${showCount < billing.length ? '' : 'hidden'}`} onClick={() => { nextData(); setSelected(2) }}>2</span>
                                    <div className={`${showCount > billing.length ? ' hidden' : 'opacity-100'}`}>
                                        <FaArrowRight className={`${billing.length > showCount ? 'text-gray-900 cursor-pointer' : 'text-gray-400'}`} onClick={() => { nextData(); setSelected(2) }} />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                }
            />
        </div >
    )
}
export default BillingHistory