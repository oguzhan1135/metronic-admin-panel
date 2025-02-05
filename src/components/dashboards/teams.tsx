

import AvatarGroup from "../../assets/icon/avatar-group.svg"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MdUnfoldMore } from "react-icons/md";
import Raiting from "../../assets/icon/raiting.svg"
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";

const Teams = () => {
    const teamsData = [
        { id: 1, name: "Product Management", description: "Product development & lifecycle", date: "21 Oct, 2024" },
        { id: 2, name: "Marketing Team", description: "Campaigns & market analysis", date: "21 Oct, 2024" },
        { id: 3, name: "HR Department", description: "Talent acquisition, employee welfare", date: "21 Oct, 2024" },
        { id: 4, name: "Sales Division", description: "Customer relations, sales strategy", date: "21 Oct, 2024" },
        { id: 5, name: "Finance Team", description: "Budgeting & financial planning", date: "21 Oct, 2024" },
        { id: 6, name: "Engineering", description: "Software development & infrastructure", date: "21 Oct, 2024" },
        { id: 7, name: "Quality Assuarance", description: "Product testing", date: "21 Oct, 2024" },
    ];
    const [showCount, setShowCount] = useState(5);
    const [upgradeData, setUpgradeData] = useState(teamsData.slice(0, showCount));

    const previousData = () => {
        setShowCount(showCount);
        setUpgradeData(teamsData.slice(0, showCount))
    };

    const nextData = () => {
        setUpgradeData(teamsData.slice(showCount, teamsData.length + showCount))

    };
    useEffect(() => {
        if (showCount !== 5) {
            setUpgradeData(teamsData.slice(0, showCount))
        }
        else {
            setUpgradeData(teamsData.slice(0, 5))
        }


    }, [showCount])

    return (
        <div className="grid lg:col-span-8 col-span-12 border rounded-xl">
            <div className="flex flex-col overflow-hidden ">
                <div className="border-b">
                    <div className="flex flex-row items-center justify-between py-3 px-5">
                        <span className="text-gray-900 text-b-16-16-600">Teams</span>
                        <div className="p-2.5 border rounded-md flex flex-row items-center gap-1 bg-gray-100">
                            <CiSearch className="text-gray-600" />
                            <input
                                type="text"
                                className="text-gray-600 text-b-11-12-400 border-0 bg-transparent outline-none"
                                placeholder="Search Teams"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col overflow-x-auto">
                    <table className=" border-collapse  min-w-[700px]">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className=" px-5 py-3">
                                    <div className="flex justify-center">
                                        <input type="checkbox" className="size-[16px]" />
                                    </div>
                                </th>
                                <th className="px-5 py-3 text-left">
                                    <div className="flex flex-row items-center gap-1">
                                        <span className="text-b-13-14-400 text-gray-700">Team</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th className="px-5 py-3">
                                    <div className="flex flex-row items-center gap-1">
                                        <span className="text-b-13-14-400 text-gray-700">Raiting</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th className="px-5 py-3 text-left">
                                    <div className="flex flex-row items-center gap-1">
                                        <span className="text-b-13-14-400 text-gray-700">Last Modified</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th className="px-5 py-3">
                                    <div className="flex flex-row items-center gap-1">
                                        <span className="text-b-13-14-400 text-gray-700">Members</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {upgradeData.map((team) => (
                                <tr key={team.id} className="border-t">
                                    <td className="w-[40px] px-5 py-3">
                                        <div className="flex justify-center">
                                            <input type="checkbox" className="size-[16px]" />
                                        </div>
                                    </td>
                                    <td className="px-5 py-3 flex flex-col gap-1">
                                        <span className="text-b-14-14-500 text-gray-900">{team.name}</span>
                                        <span className="text-b-12-12-400 text-gray-700">{team.description}</span>
                                    </td>
                                    <td className="px-4 py-2 text-left">
                                        <img src={Raiting} alt="" />
                                    </td>
                                    <td className="px-4 py-2">{team.date}</td>

                                    <td className="px-4 py-2">
                                        <img src={AvatarGroup} className="w-24 h-8" alt="" />
                                    </td>
                                </tr>
                            ))}



                        </tbody>

                    </table>

                </div>
                <div className="flex flex-row justify-between items-center p-5 flex-wrap ">
                    <div className="flex flex-row gap-3 items-center">
                        <span>Show</span>
                        <select

                            className="outline-none rounded-md p-2.5"
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
                        <FaArrowLeft onClick={() => previousData()} className="text-gray-400 cursor-pointer" />
                        <span className="p-2.5 cursor-pointer" onClick={() => previousData()}>1</span>
                        <span className={`p-2.5 cursor-pointer ${showCount < teamsData.length ? '' : 'hidden'}`} onClick={() => nextData()}>2</span>
                        <div className={`${showCount > teamsData.length ? ' hidden' : 'opacity-100'}`}>
                            <FaArrowRight className={`${teamsData.length > showCount ? 'text-gray-900 cursor-pointer' : 'text-gray-400'}`} onClick={() => nextData()} />

                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Teams