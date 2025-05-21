import { MdUnfoldMore } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Tyler from '@assets/tyler-hero.svg'
import Esther from '@assets/ester-hoeard.svg'
import Cody from '@assets/cody-fisher.svg'
import Jacob from '@assets/jonathan-taylor.svg'
import Arlene from '@assets/arlene-mccoy.svg'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { LuSettings2 } from "react-icons/lu";
import Monetha from '@assets/monetha.svg'
import Weave from '@assets/weave.svg'
import { FaStar, FaStarHalfAlt, FaRegStar, FaFacebookSquare } from "react-icons/fa";
import Foursquare from '@assets/foursquare.svg'
import Flood from '@assets/flood.svg'
import Gitlab from '@assets/gitlab.svg'
import BtcChina from '@assets/btcchina.svg'
import Bridgefy from '@assets/bridgefy.svg'
import Voise from '@assets/voise.svg'
import Vision from '@assets/xing.svg'
import TheOcean from '@assets/the-ocean.svg'
import { IoBasketballOutline, IoLogoTiktok } from "react-icons/io5";
import Pagination from "@components/myAccount/tables/pagination";

interface Member {
    id: number;
    name: string;
    role: string;
    icon: React.ReactElement;
    raiting: number;
    earnings: number;
    team: string;
    product: number;
    teamIcon: React.ReactElement;
}

const MarketAuthorsTable = () => {

    const originalCards = [
        {
            id: 1,
            name: "Tyler Hero",
            role: "IT Consultant",
            icon: <img src={Tyler} className="size-9" />,
            raiting: 3.5,
            earnings: 27456.09,
            team: "Tech Titans",
            product: 905,
            teamIcon: <img src={Weave} className="size-5" />
        },
        {
            id: 2,
            name: "Esther Howard",
            role: "Graphic Designer",
            icon: <img src={Esther} className="size-9" />,
            raiting: 5,
            earnings: 45800.09,
            team: "Creative Minds",
            product: 325,
            teamIcon: <img src={Monetha} className="size-5" />
        },
        {
            id: 3,
            name: "Jacob Jones",
            role: "Financial Analyst",
            icon: <img src={Jacob} className="size-9" />,
            raiting: 5,
            earnings: 63250.30,
            team: "Code Crafters",
            product: 212,
            teamIcon: <img src={Foursquare} className="size-5" />
        },
        {
            id: 4,
            name: "Cody Fisher",
            role: "Software Engineer",
            icon: <img src={Cody} className="size-9" />,
            raiting: 4,
            earnings: 80100.45,
            team: "Market Movers",
            product: 1500,
            teamIcon: <img src={Flood} className="size-5" />

        },
        {
            id: 5,
            name: "Leslie Alexander",
            role: "Marketing Manager",
            icon: <img src={Arlene} className="size-9" />,
            raiting: 2.5,
            earnings: 56500.60,
            team: "Brand Builders",
            product: 785,
            teamIcon: <img src={Gitlab} className="size-5" />

        },
        {
            id: 6,
            name: "Robert Fox",
            role: "Data Scientist",
            icon: <img src={Tyler} className="size-9" />,
            raiting: 5,
            earnings: 70342.25,
            team: "Data Pioneers",
            product: 468,
            teamIcon: <img src={BtcChina} className="size-5" />

        },
        {
            id: 7,
            name: "Guy Hawkins",
            role: "HR Specialist",
            icon: <img src={Jacob} className="size-9" />,
            raiting: 4.5,
            earnings: 40210.15,
            team: "Talent Scouts",
            product: 198,
            teamIcon: <img src={Bridgefy} className="size-5" />
        },
        {
            id: 8,
            name: "Theresa Webb",
            role: "Sales Executive",
            icon: <img src={Esther} className="size-9" />,
            raiting: 1.5,
            earnings: 52315.70,
            team: "Revenue Raisers",
            product: 1100,
            teamIcon: <img src={TheOcean} className="size-5" />
        },
        {
            id: 9,
            name: "Marvin McKinney",
            role: "Project Manager",
            icon: <img src={Cody} className="size-9" />,
            raiting: 5,
            earnings: 68450.55,
            team: "Vision Guides",
            product: 308,
            teamIcon: <img src={Vision} className="size-5" />
        },
        {
            id: 10,
            name: "Ronald Richards",
            role: "Web Developer",
            icon: <img src={Jacob} className="size-9" />,
            raiting: 1.5,
            earnings: 52315.70,
            team: "Web Wizards",
            product: 675,
            teamIcon: <img src={Voise} className="size-5" />
        },
    ];


    type RatingStarsProps = {
        rating: number;
    };

    const RatingStars = ({ rating }: RatingStarsProps) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating - fullStars >= 0.5;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
            <div className="flex items-center gap-0.5 text-warning">
                {[...Array(fullStars)].map((_, i) => (
                    <FaStar key={`full-${i}`} />
                ))}
                {hasHalfStar && <FaStarHalfAlt key="half" />}
                {[...Array(emptyStars)].map((_, i) => (
                    <FaRegStar key={`empty-${i}`} className="text-gray-400" />
                ))}
            </div>
        );
    };

    const [cards, setCards] = useState<Member[]>(originalCards);
    const showCount: number = 5
    const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
    const [selectAll, setSelectAll] = useState(false);

    const handleCheckboxChange = (id: number) => {
        const updated = {
            ...checkedItems,
            [id]: !checkedItems[id],
        };
        setCheckedItems(updated);

        const allChecked = cards.every(item => updated[item.id]);
        setSelectAll(allChecked);
    };

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);

        const newCheckedItems: { [key: number]: boolean } = {};
        cards.forEach((item) => {
            newCheckedItems[item.id] = newSelectAll;
        });

        setCheckedItems(newCheckedItems);
    };

    useEffect(() => {
        const initialChecked: { [key: number]: boolean } = {};
        cards.forEach(item => {
            initialChecked[item.id] = false;
        });
        setCheckedItems(initialChecked);
        setSelectAll(false);
    }, [cards]);
    const [upgradeData, setUpgradeData] = useState(cards.slice(0, showCount));

    type SortDirection = 'asc' | 'desc';
    type SortKey = 'name' | 'earnings' | 'team' | 'product' | 'raiting';
    const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
    const [sortKey, setSortKey] = useState<SortKey>('name');

    const [searchTerm, setSearchTerm] = useState("");
    const handleSort = (key: SortKey) => {
        const isSameKey = sortKey === key;
        const newDirection: SortDirection = isSameKey && sortDirection === 'asc' ? 'desc' : 'asc';

        let filtered = [...cards];

        if (searchTerm.trim() !== "") {
            filtered = filtered.filter(team =>
                team.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        filtered.sort((a, b) => {
            let valA = a[key];
            let valB = b[key];
            if (sortKey === "earnings" || sortKey === "raiting" || sortKey === "product") {
                return newDirection === 'asc'
                    ? (valA as number) - (valB as number)
                    : (valB as number) - (valA as number);
            }

            return newDirection === 'asc'
                ? String(valA).localeCompare(String(valB))
                : String(valB).localeCompare(String(valA));
        });

        setSortKey(key);
        setSortDirection(newDirection);
        setUpgradeData(filtered.slice(0, showCount));
    };

    useEffect(() => {
        let filtered = [...cards];
        if (searchTerm.trim() !== "") {
            filtered = filtered.filter(team =>
                team.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        filtered.sort((a, b) => {
            let valA = a[sortKey];
            let valB = b[sortKey];

            return sortDirection === 'asc'
                ? String(valA).localeCompare(String(valB))
                : String(valB).localeCompare(String(valA));
        });
        setUpgradeData(filtered.slice(0, showCount));
    }, [searchTerm, sortKey, sortDirection, showCount, cards]);


    return (
        <div className="grid lg:col-span-8 col-span-12 border rounded-xl">
            <div className="flex flex-col overflow-hidden ">
                <div className="border-b">
                    <div className="flex flex-row items-center justify-between py-3 px-5">
                        <span className="text-gray-900 text-b-14-14-500">Showing 10 of 49,053 users</span>
                        <div className="flex flex-row items-center justify-between">
                            <div className="flex flex-row items-center gap-5">

                                <div className="p-2.5 border rounded-md flex flex-row items-center gap-1 bg-light-active border-gray-300">
                                    <CiSearch className="text-gray-600 cursor-pointer" />
                                    <input
                                        type="text"
                                        className="text-gray-600 text-b-11-12-400 border-0 bg-transparent outline-none"
                                        placeholder="Type name, team name"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <button className="px-3 py-2.5 flex flex-row items-center rounded-md bg-primary-light text-b-12-12-500 text-primary border border-primary border-opacity-20 gap-[6px]">
                                    <LuSettings2 className="size-[14px] text-primary" />
                                    Filters
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="flex flex-col overflow-x-auto custom-scroll">
                    <table className=" border-collapse  min-w-[1000px]">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className=" px-5 py-3 border border-gray-200">
                                    <div className="flex justify-center">
                                        <input
                                            type="checkbox"
                                           className={`custom-checkbox`}
                                            checked={selectAll}
                                            onChange={handleSelectAll}
                                        />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("name")} className="px-5 py-3 border border-gray-200 text-left">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer w-max">
                                        <span className="text-b-13-14-400 text-gray-700">Author</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("earnings")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Earnings</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("team")} className="px-5 py-3 border border-gray-200 text-left">
                                    <div className="flex flex-row items-center gap-1 cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Team</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("product")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1  cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Product</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th onClick={() => handleSort("raiting")} className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1  cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Raiting</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th className="px-5 py-3 border border-gray-200">
                                    <div className="flex flex-row items-center gap-1  cursor-pointer">
                                        <span className="text-b-13-14-400 text-gray-700">Social Profiles</span>
                                        <MdUnfoldMore className="size-[16px] text-gray-700" />
                                    </div>
                                </th>
                                <th className="px-5 py-3 border border-gray-200 text-center">

                                </th>

                            </tr>
                        </thead>
                        <tbody>
                            {upgradeData.map((author) => (
                                <tr key={author.id} className="">
                                    <td className="w-[40px] px-5 py-3 border border-gray-200">
                                        <div className="flex justify-center">
                                            <input
                                                type="checkbox"
                                                checked={!!checkedItems[author.id]}
                                                onChange={() => handleCheckboxChange(author.id)}
                                                className={`custom-checkbox`}
                                            />
                                        </div>
                                    </td>
                                    <td className="px-5 py-3 flex flex-col gap-2 border border-gray-200">
                                        <div className="flex flex-row gap-2.5 items-center">
                                            {author.icon}
                                            <div className="flex flex-col gap-2">
                                                <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>{author.name}</Link>
                                                <span className="text-b-13-14-400 text-gray-700">{author.role}</span>
                                            </div>

                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <span className="text-b-14-14-400 text-gray-800">${author.earnings.toLocaleString()}</span>
                                    </td>


                                    <td className="px-4 py-2 border border-gray-200">
                                        <div className="flex flex-row gap-[6px]">
                                            {author.teamIcon}
                                            <span className="text-b-14-14-400 text-gray-800">{author.team}</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <span className="text-b-14-14-400 text-gray-800">{author.product}</span>
                                    </td>

                                    <td className="px-4 py-2 border border-gray-200">
                                        <RatingStars rating={author.raiting} />
                                    </td>
                                    <td className="px-4 py-2 border border-gray-200">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <FaFacebookSquare className="text-gray-500 size-[18px] cursor-pointer" />
                                            <IoBasketballOutline className="text-gray-500 size-[18px] cursor-pointer" />
                                            <IoLogoTiktok className="text-gray-500 size-[18px] cursor-pointer" />
                                        </div>
                                    </td>

                                    <td className="px-4 py-2 text-center border border-gray-200">
                                        <div className="grid place-items-center">
                                            <button className="p-2 rounded-md cursor-pointer hover:bg-gray-200">
                                                <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <Pagination setUpgradeData={setUpgradeData} data={cards} />
            </div>
        </div>
    )
}
export default MarketAuthorsTable