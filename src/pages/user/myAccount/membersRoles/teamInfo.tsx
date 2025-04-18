


import { Link } from "react-router"
import Menu from "../../../../components/myAccount/hoverMenu"
import Card from '../../../../components/card/card'
import { useState } from "react"
import Switch from "../../../../components/switch"
import FAQ from "../../../../components/myAccount/faq"
import Camera from '../../../../assets/icon/camera.svg'
import ExampleUser from '../../../../assets/icon/example-user.svg'
import { IoIosClose } from "react-icons/io"
import { MdOutlineEditNote } from "react-icons/md"
import TeamMembersTable from "../../../../components/myAccount/tables/teamMembersTable"

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
                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Roles
                </button>
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
                                            <div className=" absolute rounded-full border-2 bg-white top-1 right-1 flex justify-center items-center  "> <IoIosClose className="text-gray-500 size-[14px]" /></div>

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
                                                <div className="p-2 rounded-[4px] bg-gray-200 border-gray-600 border-opacity-10 border flex items-center justify-center">
                                                    <span className="text-gray-700 text-b-11-12-500">Managament</span>
                                                </div>
                                                <div className="p-2 rounded-[4px] bg-gray-200 border-gray-600 border-opacity-10 border flex items-center justify-center">
                                                    <span className="text-gray-700 text-b-11-12-500">Web Design</span>
                                                </div>
                                                <div className="p-2 rounded-[4px] bg-gray-200 border-gray-600 border-opacity-10 border flex items-center justify-center">
                                                    <span className="text-gray-700 text-b-11-12-500">Code Review</span>
                                                </div>
                                                <div className="p-2 rounded-[4px] bg-gray-200 border-gray-600 border-opacity-10 border flex items-center justify-center">
                                                    <span className="text-gray-700 text-b-11-12-500">noCode</span>
                                                </div>
                                                <div className="p-2 rounded-[4px] bg-gray-200 border-gray-600 border-opacity-10 border flex items-center justify-center">
                                                    <span className="text-gray-700 text-b-11-12-500">Webflow</span>
                                                </div>
                                                <div className="p-2 rounded-[4px] bg-gray-200 border-gray-600 border-opacity-10 border flex items-center justify-center">
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
                </div>
            </div>
        </div >
    )
}
export default TeamInfo