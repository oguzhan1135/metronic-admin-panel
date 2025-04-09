import Menu from "../../../../components/myAccount/hoverMenu"
import Card from '../../../../components/card/card'
import { FaMinus, FaPlus } from "react-icons/fa6"
import { useState } from "react"
import IpAddresesTable from "../../../../components/myAccount/ıpAddressTable"
import Welcome from '../../../../assets/icon/unlockCreative.svg'

const AllowedIpAddresses = () => {

    const [questions, setQuestions] = useState(
        [
            {
                id: 1,
                question: "How is pricing determined for each plan?",
                answer: "Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision. Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision. Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision",
                status: false
            },
            {
                id: 2,
                question: "What payment methods are accepted for subscriptions?",
                answer: "Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision",
                status: false
            },
            {
                id: 3,
                question: "Are there any hidden fees in the pricing?",
                answer: "Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision",
                status: false
            },
            {
                id: 4,
                question: "Is there a discount for annual subscriptions?",
                answer: "Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision",
                status: false
            },
            {
                id: 5,
                question: "Do you offer refunds on subscription cancellations?",
                answer: "Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision",
                status: false
            },
            {
                id: 6,
                question: "Can I add extra features to my current plan?",
                answer: "Metronic embraces flexible licensing options that empower you to choose the perfect fit for your project's needs and budget. Understanding the factors influencing each plan's pricing helps you make an informed decision",
                status: false
            }
        ]
    )
    const handleClick = (id: number) => {
        setQuestions((prevQuestions) =>
            prevQuestions.map((item) => ({
                ...item,
                status: item.id === id ? !item.status : false,
            }))
        );
    };

    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Allowed IP Addresses</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Central Hub for Personal Customization</span>
                </div>
                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Security Overview
                </button>
            </div>
            <IpAddresesTable />

            {/* FAQ */}

            <Card
                title="FAQ"
                dotStatus={false}
                buttonStatus={false}
                content={
                    <>
                        <div className="flex flex-col py-2.5 px-[30px]">
                            {questions.map((item, index) => (
                                <div
                                    key={index}
                                    className={`flex flex-col ${item.status ? "gap-5" : "gap-0"} py-5  last:border-0 cursor-pointer`}
                                    onClick={() => handleClick(item.id)}
                                >
                                    <div className="flex flex-row items-center justify-between">
                                        <span className="text-b-16-16-400 text-gray-900 select-none">{item.question}</span>
                                        {
                                            item.status ?
                                                <FaMinus className="text-gray-600 size-[18px] select-none" /> :
                                                <FaPlus className="text-gray-600 size-[18px] select-none" />
                                        }
                                    </div>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${item.status ? "max-h-[300px] opacity-100 py-0" : "max-h-0 opacity-0 py-0"
                                            }`}
                                    >
                                        <p className="text-b-14-22-400 text-gray-800 select-none">{item.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                }
            />
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-[30px]">
                <div className="lg:col-span-2 col-span-4 flex flex-col gap-[30px]">


                    {/* Questions? */}
                    <Card
                        buttonStatus={true}
                        buttonTitle="Go to Help Center"
                        dotStatus={false}
                        content={
                            <>
                                <div className="flex flex-col md:flex-row gap-10 px-10 items-center py-[30px]">
                                    <div className="flex flex-col gap-3">
                                        <span className="text-b-20-30-500 text-gray-900 ">Questions?</span>
                                        <p className=" text-b-14-22-400 text-gray-800">Visit our Help Center for detailed assistance on billing, payments, and subscriptions. </p>
                                    </div>
                                    <img src={Welcome} alt="welcome" />
                                </div>
                            </>
                        }
                    />

                </div>
                <div className="lg:col-span-2 col-span-4 flex flex-col gap-[30px]">

                    {/* Contact Support */}
                    <Card
                        buttonStatus={true}
                        buttonTitle="Contact Support"
                        dotStatus={false}
                        content={
                            <>
                                <div className="flex flex-col md:flex-row gap-10 px-10 items-center py-[30px]">
                                    <div className="flex flex-col gap-3">
                                        <span className="text-b-20-30-500 text-gray-900 ">Contact Support</span>
                                        <p className=" text-b-14-22-400 text-gray-800">Need assistance? Contact our support team for prompt, personalized help your queries & concerns.</p>
                                    </div>
                                    <img src={Welcome} alt="welcome" />
                                </div>
                            </>
                        }
                    />
                </div>
            </div>
        </div >
    )
}
export default AllowedIpAddresses