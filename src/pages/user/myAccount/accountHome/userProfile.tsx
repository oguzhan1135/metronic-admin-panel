
import { Link } from "react-router"
import Menu from "../../../../components/myAccount/hoverMenu"
import Card from "../../../../components/publicProfile/card"
import ExampleUser from '../../../../assets/icon/example-user.svg'
import Camera from '../../../../assets/icon/camera.svg'
import { useState } from "react"
import { IoIosClose } from "react-icons/io"
import { LuNotepadText } from "react-icons/lu"

const UserProfile = () => {

    const [selectedImage, setSelectedImage] = useState<string>(ExampleUser);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const imageUrl = URL.createObjectURL(event.target.files[0]);
            setSelectedImage(imageUrl);
        }
    };
    const location = window.location.pathname;
    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>User Profile</h1>
                    <span className='text-b-14-14-400 text-gray-700'>Central Hub for Personal Customization</span>
                </div>
                <div className="flex flex-row items-center gap-2.5">

                    <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                        Public Profile
                    </a>
                    <Link to={location} className="px-2.5 py-2.5 flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1 cursor-pointer">
                        Account Setting
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-2 xl:grid-cols-4 gap-[30px]">
                <div className="xl:col-span-2 flex flex-col gap-[30px]">
                    {/* {Personal Info} */}

                    <Card
                        title="Personal Info"
                        buttonStatus={false}
                        dotStatus={false}
                        content={

                            <div className="flex flex-col">
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Profile</span>
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
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Name</span>
                                        <span className="text-b-13-14-400 text-gray-800">Jason Tatum</span>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <LuNotepadText className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Availability</span>
                                        <div className="p-2 rounded-[4px] bg-success-light border-success border-opacity-10 border flex items-center justify-center">
                                            <span className="text-success text-b-11-12-500">Avaliable now</span>
                                        </div>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <LuNotepadText className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Birthday</span>
                                        <span className="text-b-13-14-400 text-gray-800">28 May 1996</span>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <LuNotepadText className="size-4 text-primary group-hover:text-white" />
                                    </Link>

                                </div>
                                <div className="flex flex-row items-center justify-between border-b py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Gender</span>
                                        <span className="text-b-13-14-400 text-gray-800">Male</span>
                                    </div>
                                    <Link to={location} className="flex items-center justify-center p-2 cursor-pointer hover:bg-primary text-animation rounded-md group">
                                        <LuNotepadText className="size-4 text-primary group-hover:text-white" />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-between py-4 px-[30px]">
                                    <div className="flex flex-row items-center ">
                                        <span className="text-b-14-14-400 text-gray-600 min-w-[100px]">Address</span>
                                        <span className="text-b-13-14-400 text-gray-700">You have no an address yet</span>
                                    </div>
                                    <Link to={location} className="text-primary border-dotted border-b border-b-primary text-b-12-12-500 mr-1">Add</Link>
                                </div>
                            </div>
                        }
                    />
                </div>
                <div className="lg:col-span-2 flex flex-col gap-[30px]">
                    {/* right area */}
                </div>
            </div>
        </div >
    )
}
export default UserProfile