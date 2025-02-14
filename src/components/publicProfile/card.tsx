import { FaEllipsisVertical } from "react-icons/fa6";

interface CardProps {
    dotStatus: boolean;
    buttonStatus: boolean;
    title?: string;
    content: React.ReactElement;
    buttonTitle?: string;
    dotContentStatus?: boolean;
    dotContent?: React.ReactElement;
}


const Card: React.FC<CardProps> = ({ dotStatus, buttonStatus, title, content, buttonTitle, dotContent, dotContentStatus }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm border">
            <div className="flex flex-col">
                {
                    title ?
                        <div className="border-b border-b-gray-300 py-5">
                            <div className="flex flex-row justify-between items-center px-[30px]">
                                <span className='text-b-16-16-600 text-gray-900'>{title}</span>
                                {
                                    dotContentStatus ?
                                        <>
                                            {dotContent}
                                        </>
                                        :
                                        <FaEllipsisVertical className={`text-gray-600 ${dotStatus ? '' : 'hidden'}`} />

                                }
                            </div>

                        </div> : null
                }

                {content}
                {
                    buttonStatus ?
                        <>
                            <div className="bg-white rounded-b-md border-l border border-gray-200 p-4 flex justify-center items-center w-full">
                                <span className="text-b-13-14-500 text-primary border-b border-dotted border-b-primary cursor-pointer">{buttonTitle}</span>
                            </div>
                        </> : null
                }
            </div>


        </div>

    )
}
export default Card;