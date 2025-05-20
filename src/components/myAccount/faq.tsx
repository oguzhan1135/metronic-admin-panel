import { FaMinus, FaPlus } from "react-icons/fa6";
import Card from "@components/card/card";
import { useState } from "react";

const FAQ = () => {
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
    )
}
export default FAQ;