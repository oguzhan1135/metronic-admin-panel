import { Link } from "react-router"
import CardMore from "../more/cardMore";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useEffect, useState } from "react";

interface CardProps {
    dotStatus: boolean;
    buttonStatus: boolean;
    title?: string | React.ReactElement;
    content: React.ReactElement;
    buttonTitle?: string;
    dotContentStatus?: boolean;
    dotContent?: React.ReactElement;
    titleContent?: React.ReactElement;
}

const Card: React.FC<CardProps> = ({ dotStatus, buttonStatus, title, content, buttonTitle, dotContent, dotContentStatus, titleContent }) => {
    const location = window.location.pathname;
    const [more, setMore] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            if (!target.closest(".dropdown-container")) {
                setMore(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-white rounded-xl shadow-sm border">
            <div className="flex flex-col">
                {title ? (
                    <div className="border-b border-b-gray-300 py-5">
                        <div className="flex md:flex-row md:justify-between md:items-center flex-col items-start gap-2.5 px-[30px]">
                            <h3 className="text-b-16-16-600 text-gray-900">{title}</h3>
                            {dotContentStatus ? (
                                dotContent
                            ) : (
                                dotStatus && (
                                    <div className="relative">
                                        <div
                                            onClick={() => setMore((prev) => !prev)}
                                            className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
                                        >
                                            <HiOutlineDotsVertical />
                                        </div>

                                        {more && <CardMore setMore={setMore} more={more} />}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                ) : titleContent ?
                    <div className="pt-5">
                        <div className="flex flex-row justify-between items-center px-[30px]">
                            {titleContent}
                            {dotContentStatus ? (
                                dotContent
                            ) : (
                                dotStatus && (
                                    <div className="relative">
                                        <div
                                            onClick={() => setMore((prev) => !prev)}
                                            className="p-2 rounded-md cursor-pointer hover:bg-gray-200"
                                        >
                                            <HiOutlineDotsVertical />
                                        </div>

                                        {more && <CardMore setMore={setMore} more={more} />}
                                    </div>
                                )
                            )}
                        </div>
                    </div> : null
                }

                {content}

                {buttonStatus ? (
                    <div className="bg-white rounded-b-md border-l border border-gray-200 p-4 flex justify-center items-center w-full">
                        <Link
                            to={location}
                            className="text-b-13-14-500 text-primary border-b border-dotted border-b-primary cursor-pointer"
                        >
                            {buttonTitle}
                        </Link>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Card;
