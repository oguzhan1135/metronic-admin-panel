import { HiOutlineDotsVertical } from "react-icons/hi"
import { Link } from "react-router"
import Card from "@components/card/card"
import Tyler from '@assets/tyler-hero.svg'
import Esther from '@assets/ester-hoeard.svg'
import Cody from '@assets/cody-fisher.svg'
import Jacob from '@assets/jonathan-taylor.svg'
import Arlene from '@assets/arlene-mccoy.svg'

interface Member {
    id: number;
    name: string;
    image: React.ReactElement;
    connections: number;
    role: string;
    TwoFA: boolean;
    joined: string;
}

const MembersTable = () => {

    const members: Member[] = [
        {
            id: 1,
            name: "Tyler Hero",
            connections: 26,
            image: <img src={Tyler} />,
            role: "projectMember",
            TwoFA: false,
            joined: "Today"
        },
        {
            id: 2,
            name: "Esther Howard",
            connections: 639,
            image: <img src={Esther} />,
            role: "accountant",
            TwoFA: true,
            joined: "5 days ago"
        },
        {
            id: 3,
            name: "Jacob Jones",
            connections: 125,
            image: <img src={Jacob} />,
            role: "dataAnalyst",
            TwoFA: true,
            joined: "3 days ago"
        },
        {
            id: 4,
            name: "Cody Fisher",
            connections: 81,
            image: <img src={Cody} />,
            role: "accountant",
            TwoFA: false,
            joined: "2 weeks ago"
        },
        {
            id: 5,
            name: "Leslie Alexander",
            connections: 1203,
            image: <img src={Arlene} />,
            role: "director",
            TwoFA: true,
            joined: "3 weeks ago"
        },


    ]

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
                                            <span className="text-b-13-14-400 text-gray-700">Name</span>
                                        </th>
                                        <th className="px-[30px] py-[13px] text-center">
                                            <span className="text-b-13-14-400 text-gray-700">Role</span>
                                        </th>
                                        <th className="px-[30px] py-[13px] text-right">
                                            <span className="text-b-13-14-400 text-gray-700">2FA</span>
                                        </th>
                                        <th className="px-[30px] py-[13px] text-right">
                                            <span className="text-b-13-14-400 text-gray-700">Joined</span>
                                        </th>
                                        <th className="px-[30px] py-[13px] text-right">

                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        members.map((item) => (
                                            <tr key={item.id} className=" border-b">
                                                <td className="py-[15px] px-[30px]">
                                                    <div className="flex flex-row gap-2.5 items-center">
                                                        {item.image}
                                                        <div className="flex flex-col gap-2">
                                                            <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>{item.name}</Link>
                                                            <span className='text-b-12-12-400 text-gray-700'>{item.connections} connections</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-[15px] px-[30px]  ">
                                                    {
                                                        item.role === "projectMember" ?
                                                            <div className="p-2 rounded-[4px] bg-gray-100  border-opacity-10 border flex items-center justify-center w-max">
                                                                <span className="text-gray-700 text-b-11-12-500">Project Members</span>
                                                            </div> : item.role === "accountant" ?
                                                                < div className="p-2 rounded-[4px] bg-gray-100  border-opacity-10 border flex items-center justify-center w-max">
                                                                    <span className="text-gray-700 text-b-11-12-500">Accountant</span>
                                                                </div> : item.role === "dataAnalyst" ?
                                                                    <div className="p-2 rounded-[4px] bg-gray-100  border-opacity-10 border flex items-center justify-center w-max">
                                                                        <span className="text-gray-700 text-b-11-12-500">Data Analyst</span>
                                                                    </div> :
                                                                    <div className="p-2 rounded-[4px] bg-gray-100  border-opacity-10 border flex items-center justify-center w-max">
                                                                        <span className="text-gray-700 text-b-11-12-500">Director</span>
                                                                    </div>
                                                    }
                                                </td>
                                                <td className="py-[15px] px-[30px]  text-right">
                                                    {
                                                        item.TwoFA ?
                                                            <div className="p-2 rounded-[4px] bg-danger-light  border border-opacity-20 border-danger flex items-center justify-center w-max">
                                                                <span className="text-danger text-b-11-12-500">Disabled</span>
                                                            </div> :
                                                            <div className="p-2 rounded-[4px] bg-success-light  border border-opacity-20 border-success flex items-center justify-center w-max">
                                                                <span className="text-success text-b-11-12-500">Enabled</span>
                                                            </div>
                                                    }
                                                </td>
                                                <td className="py-[15px] px-[30px]  text-right">
                                                    <span className="text-b-14-14-400 text-gray-800 ">{item.joined}</span>
                                                </td>
                                                <td className="py-[15px] px-[30px]  text-right">
                                                    <button className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                        <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                                    </button>
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

export default MembersTable