import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

interface PaginationProps<T> {
    data: T[];
    setUpgradeData: React.Dispatch<React.SetStateAction<T[]>>;
}

const Pagination = <T,>({ data, setUpgradeData }: PaginationProps<T>) => {
    const [showCount, setShowCount] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = showCount;
    const totalPages = Math.ceil(data.length / itemsPerPage);

    useEffect(() => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setUpgradeData(data.slice(startIndex, endIndex));
    }, [data, currentPage, itemsPerPage, setUpgradeData]);

    useEffect(() => {
        if (currentPage > totalPages) {
            setCurrentPage(1);
        }
    }, [showCount, totalPages]);

    const previousData = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextData = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="flex flex-row justify-between items-center p-5 flex-wrap ">
            <div className="flex flex-row gap-3 items-center">
                <span className="text-gray-600 text-b-13-14-500">Show</span>
                <select
                    className="outline-none rounded-md p-2.5 cursor-pointer dark:bg-[#1F212A] text-gray-800"
                    value={showCount}
                    onChange={(e) => setShowCount(Number(e.target.value))}
                >
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
                <span className="text-gray-600 text-b-13-14-500">per page</span>
            </div>

            <div className="flex flex-row items-center gap-0.5">
                {data.length > 0 ? (
                    <span className="pr-4 text-gray-600 text-b-13-14-500">
                        {(currentPage - 1) * itemsPerPage + 1} -
                        {Math.min(currentPage * itemsPerPage, data.length)} of {data.length}
                    </span>
                ) : (
                    <span className="pr-4 text-gray-600 text-b-13-14-500">0 of 0</span>
                )}
                <FaArrowLeft
                    onClick={previousData}
                    className={`cursor-pointer ${currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-400'}`}
                />
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        className={`px-2.5 py-2 cursor-pointer hover:bg-gray-200 duration-300 rounded-lg text-b-14-14-400 ${currentPage === index + 1 ? 'bg-gray-200 text-gray-800' : 'bg-transparent text-gray-700'
                            }`}
                        onClick={() => setCurrentPage(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                <FaArrowRight
                    onClick={nextData}
                    className={`cursor-pointer ${currentPage === totalPages ? 'text-gray-300 cursor-not-allowed' : 'text-gray-400'}`}
                />
            </div>
        </div>
    );
};

export default Pagination;
