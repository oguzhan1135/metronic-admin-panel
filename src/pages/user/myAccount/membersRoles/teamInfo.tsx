


import { Link } from "react-router"
import Menu from "@components/myAccount/hoverMenu"
import Card from '@components/card/card'
import { useState } from "react"
import Switch from "@components/switch"
import FAQ from "@components/myAccount/faq"
import Camera from '@assets/camera.svg'
import ExampleUser from '@assets/example-user.svg'
import { IoIosClose } from "react-icons/io"
import { MdOutlineEditNote } from "react-icons/md"
import TeamMembersTable from "@components/myAccount/tables/teamMembersTable"
import Tyler from '@assets/tyler-hero.svg'
import { FaRegAddressBook, FaXTwitter } from "react-icons/fa6"
import { HiOutlineDotsVertical } from "react-icons/hi"
import { FcGoogle } from "react-icons/fc"
import { CgProfile } from "react-icons/cg"
import { GrTask } from "react-icons/gr"
import Arlene from '@assets/arlene-mccoy.svg'

const TeamInfo = () => {
    const location = window.location.pathname
    const [visible, setVisible] = useState(false)
    const [selectedImage, setSelectedImage] = useState<string>(ExampleUser);
    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const imageUrl = URL.createObjectURL(event.target.files[0]);
            setSelectedImage(imageUrl);
        }
    };

    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Team Info</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Efficient team organization with real-time updates</span>
                </div>
                <a href="#" className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Roles
                </a>
            </div>
            <div className="grid grid-cols-3 xl:grid-cols-5 gap-[30px]">
                <div className="lg:col-span-3 col-span-5 flex flex-col gap-[30px]">

                    {/* Teams Info */}

                    <Card
                        title="Team Info"
                        dotStatus={false}
                        dotContentStatus={true}
                        buttonStatus={false}
                        dotContent={
                            <>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-13-14-500 text-gray-700">Visible to all</span>
                                    <Switch status={visible} setSwitch={() => setVisible(!visible)} size="medium" />
                                </div>
                            </>
                        }
                        content={
                            <>
                                <div className="flex flex-col">
                                    <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                        <div className="flex flex-row items-center ">
                                            <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Thumbnail</span>
                                            <span className="text-b-13-14-400 text-gray-700">150x150px JPEG, PNG Image</span>
                                        </div>
                                        <div className="relative p-1">
                                            <input
                                                type="file"
                                                accept="image/*"
                                                className="hidden"
                                                id="fileInput"
                                                onChange={handleImageChange}
                                            />
                                            <div
                                                onClick={() => document.getElementById("fileInput")?.click()}
                                                className="size-[60px] rounded-full border-2 border-success overflow-hidden relative cursor-pointer"
                                            >
                                                <img
                                                    src={selectedImage}
                                                    className="w-full h-full object-cover"
                                                    alt="user"
                                                />
                                                <img src={Camera} alt="camera" className="absolute bottom-0" />
                                            </div>
                                            <div className=" absolute rounded-full border-2 bg-white dark:bg-coal-300 top-1 right-1 flex justify-center items-center  "> <IoIosClose className="text-gray-500 size-[14px]" /></div>

                                        </div>
                                    </div>
                                    <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                        <div className="flex flex-row items-center ">
                                            <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Team Name</span>
                                            <span className="text-b-13-14-400 text-gray-800">Product Management</span>
                                        </div>
                                        <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                            <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                        </Link>
                                    </div>
                                    <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                        <div className="flex flex-row items-center ">
                                            <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Description</span>
                                            <p className="text-b-13-14-400 text-gray-800">We're open to partnerships, guest posts, and more. Join us to share your insights and grow your audience.</p>
                                        </div>

                                        <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                            <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                        </Link>

                                    </div>
                                    <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                        <div className="flex flex-row items-center ">
                                            <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">View as</span>
                                            <div className="p-2 rounded-[4px] bg-success-light border-success border-opacity-10 border flex items-center justify-center">
                                                <span className="text-success text-b-11-12-500">Public</span>
                                            </div>
                                        </div>
                                        <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                            <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                        </Link>
                                    </div>
                                    <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                        <div className="flex flex-row items-center ">
                                            <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Skills</span>
                                            <div className="flex flex-row items-center gap-2.5 flex-wrap">
                                                <div className="p-2 rounded-[4px] bg-gray-200 border-opacity-10 border flex items-center justify-center">
                                                    <span className="text-gray-700 text-b-11-12-500">Managament</span>
                                                </div>
                                                <div className="p-2 rounded-[4px] bg-gray-200 border-opacity-10 border flex items-center justify-center">
                                                    <span className="text-gray-700 text-b-11-12-500">Web Design</span>
                                                </div>
                                                <div className="p-2 rounded-[4px] bg-gray-200 border-opacity-10 border flex items-center justify-center">
                                                    <span className="text-gray-700 text-b-11-12-500">Code Review</span>
                                                </div>
                                                <div className="p-2 rounded-[4px] bg-gray-200 border-opacity-10 border flex items-center justify-center">
                                                    <span className="text-gray-700 text-b-11-12-500">noCode</span>
                                                </div>
                                                <div className="p-2 rounded-[4px] bg-gray-200 border-opacity-10 border flex items-center justify-center">
                                                    <span className="text-gray-700 text-b-11-12-500">Webflow</span>
                                                </div>
                                                <div className="p-2 rounded-[4px] bg-gray-200 border-opacity-10 border flex items-center justify-center">
                                                    <span className="text-gray-700 text-b-11-12-500">AI</span>
                                                </div>
                                            </div>
                                        </div>
                                        <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                            <MdOutlineEditNote className="size-4 text-primary group-hover:text-white" />
                                        </Link>
                                    </div>

                                </div>
                            </>
                        }
                    />

                    {/* Team Members Table */}
                    <TeamMembersTable />

                    {/* FAQ */}
                    <FAQ />

                </div>
                <div className="lg:col-span-2 col-span-5 flex flex-col gap-[30px]">
                    {/* right area */}

                    {/* Seats area */}
                    <Card
                        title="Seats"
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="">
                                    <div className="px-[30px] py-5 flex flex-col gap-2.5">
                                        <h4 className="text-b-16-25-500 text-gray-900">14/49 seats</h4>
                                        <p className="text-b-13-20-400 text-gray-800">Additional seats have been added, yet availability remains limited – secure yours quickly today.</p>
                                        <Link to={location} className="text-primary border-b border-primary border-dotted text-b-12-12-500 w-max">Learn more</Link>
                                    </div>

                                    <div className="border-t py-[14px] flex items-center justify-center">
                                        <a href="#" className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer dark:bg-[#1F212A] border-gray-300">
                                            Add Seats
                                        </a>
                                    </div>
                                </div>
                            </>
                        }
                    />

                    {/* Profile conntected area */}
                    <Card
                        title="2 Profile connected"
                        dotStatus={false}
                        buttonStatus={false}
                        content={
                            <>
                                <div className="flex flex-col">

                                    <div className="px-[30px] py-5 border-b flex items-center justify-between">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <img src={Tyler} alt="tyler" />
                                            <div className="flex flex-col gap-2">
                                                <Link to={location} className="text animation text-gray-900 text-b-14-14-500 hover:text-primary">Tyler Hero</Link>
                                                <span className="text-b-12-12-400 text-gray-700">26 tasks</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-[5px]">
                                            <FaXTwitter className="size-5 dark:text-white" />
                                            <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="px-[30px] py-5 border-b flex items-center justify-between">
                                        <div className="flex flex-row items-center gap-2.5">
                                            <img src={Arlene} alt="arlene" />
                                            <div className="flex flex-col gap-2">
                                                <Link to={location} className="text animation text-gray-900 text-b-14-14-500 hover:text-primary">Leslie Alexander</Link>
                                                <span className="text-b-12-12-400 text-gray-700">203 tasks</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center gap-[5px]">
                                            <FcGoogle className="size-5" />
                                            <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                <HiOutlineDotsVertical className="text-gray-600 size-[18px]" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-t py-[14px] flex items-center justify-center">
                                        <a href="#" className="px-3 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer dark:bg-[#1F212A] border-gray-300">
                                            Connect Profile
                                        </a>
                                    </div>
                                </div>
                            </>
                        }
                    />

                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        content={<>
                            <div className="flex flex-col px-[30px] ">
                                <div className="flex flex-col gap-5 py-[30px] border-b">
                                    <div className="relative size-[50px] shrink-0">
                                        <svg className="w-full h-full stroke-warning-clarity opacity-80 dark:opacity-20 fill-[#FFF5EF] " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
			18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
			39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                            </path>
                                            <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                            </path>
                                        </svg>
                                        <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                            <FaRegAddressBook className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Centralizing Team Profiles: Management and Directory Tools</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Centralize your team's information with our management tools. Access detailed instructions, expert advice, and technical documentation to maintain an up-to-date team directory.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 py-[30px] border-b">

                                    <div className="relative size-[50px] shrink-0">
                                        <svg className="w-full h-full stroke-warning-clarity opacity-80 dark:opacity-20 fill-[#FFF5EF] " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
			18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
			39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                            </path>
                                            <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                            </path>
                                        </svg>
                                        <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                            <CgProfile className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Building a Cohesive Team: Resources for Profile Compilation</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Craft a unified team environment by compiling profiles in one place. Utilize our resources for easy information gathering and profile management.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 py-[30px] border-b">
                                    <div className="relative size-[50px] shrink-0">
                                        <svg className="w-full h-full stroke-warning-clarity opacity-80 dark:opacity-20 fill-[#FFF5EF] " fill="none" height="48" viewBox="0 0 44 48" width="44" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M16 2.4641C19.7128 0.320509 24.2872 0.320508 28 2.4641L37.6506 8.0359C41.3634 10.1795 43.6506 14.141 43.6506 
			18.4282V29.5718C43.6506 33.859 41.3634 37.8205 37.6506 39.9641L28 45.5359C24.2872 47.6795 19.7128 47.6795 16 45.5359L6.34937 
			39.9641C2.63655 37.8205 0.349365 33.859 0.349365 29.5718V18.4282C0.349365 14.141 2.63655 10.1795 6.34937 8.0359L16 2.4641Z" fill="">
                                            </path>
                                            <path d="M16.25 2.89711C19.8081 0.842838 24.1919 0.842837 27.75 2.89711L37.4006 8.46891C40.9587 10.5232 43.1506 14.3196 43.1506 
			18.4282V29.5718C43.1506 33.6804 40.9587 37.4768 37.4006 39.5311L27.75 45.1029C24.1919 47.1572 19.8081 47.1572 16.25 45.1029L6.59937 
			39.5311C3.04125 37.4768 0.849365 33.6803 0.849365 29.5718V18.4282C0.849365 14.3196 3.04125 10.5232 6.59937 8.46891L16.25 2.89711Z" stroke="">
                                            </path>
                                        </svg>
                                        <div className="absolute leading-none start-2/4 top-2/4 -translate-y-2/4 -translate-x-2/4 rtl:translate-x-2/4">
                                            <GrTask className="text-[#FF6F1E] size-[22px]" />
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-2.5">
                                        <Link to={location} className="text-gray-900 text-b-16-25-500">Organizing Team Data: Efficient Roster Solutions</Link>
                                        <p className="text-b-13-20-400 text-gray-800">Organize your team's details with our efficient roster solutions. From quick imports to detailed management, our resources guide you through every step.</p>
                                        <Link to={location} className="text-primary border-b border-dotted border-b-primary w-max text-b-12-12-500">Learn more</Link>
                                    </div>
                                </div>
                            </div>
                        </>}
                    />
                </div>
            </div>
        </div >
    )
}
export default TeamInfo