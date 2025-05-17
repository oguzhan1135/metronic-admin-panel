
import { Link } from "react-router"
import Menu from "../../../../components/myAccount/hoverMenu"
import Card from "../../../../components/card/card"
import { useState } from "react"
import { IoIosClose } from "react-icons/io"
import Switch from "../../../../components/switch"
import Camera from '../../../../assets/icon/camera.svg'
import ExampleUser from '../../../../assets/icon/example-user.svg'

const SettingPlain = () => {
    const [account, setAccount] = useState(true)
    const [selectedImage, setSelectedImage] = useState<string>(ExampleUser);
    const location = window.location.pathname;
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
                    <h1 className='text-gray-900 text-h-24-24-600'>Settings - Plain</h1>
                    <span className='text-b-14-14-400 text-gray-700'>Clean, Efficient User Experience</span>
                </div>
                <div className="flex flex-row items-center gap-2.5">

                    <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                        Public Profile
                    </a>
                    <Link to={location} className="px-2.5 py-2.5 flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1 cursor-pointer">
                        Get Started
                    </Link>
                </div>
            </div>

            <div className="flex flex-col gap-[30px] items-center justify-center">
                {/* Account */}
                <Card
                    title="General Settings"
                    buttonStatus={false}
                    dotContentStatus={true}
                    dotContent={<>
                        <div className="flex flex-row items-center gap-2.5">
                            <span className="text-b-13-14-500 text-gray-700">Public Profile</span>
                            <Switch status={account} setSwitch={() => setAccount(!account)} size={"medium"} />
                        </div>
                    </>}
                    dotStatus={false}
                    content={


                        <div className="flex flex-col px-[30px] pt-5">
                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5 justify-between">
                                <div className="flex flex-row items-center ">
                                    <span className="text-b-14-14-400 text-gray-800 md:min-w-[220px]">Profile</span>
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
                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                <span className="md:min-w-[220px] text-b-13-14-400 text-gray-800 ">Name</span>
                                <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full md:min-w-[330px]">
                                    <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="Jason Tatum" />
                                </div>
                            </div>

                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                <span className="md:min-w-[220px] text-b-13-14-400 text-gray-800 ">Phone Number</span>
                                <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full">
                                    <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="Phone number" />
                                </div>
                            </div>
                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                <span className="md:min-w-[220px] text-b-13-14-400 text-gray-800 ">Email</span>
                                <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full md:min-w-[330px]">
                                    <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="jason@studio.io" />
                                </div>
                            </div>
                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                <span className="md:min-w-[220px] text-b-13-14-400 text-gray-800 ">Address</span>
                                <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full md:min-w-[330px]">
                                    <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="Avinguda Imaginària, 789" />
                                </div>
                            </div>
                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Country</span>
                                <select name="" id="" defaultValue={"Spain"} className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full outline-none text-gray-800 ">
                                    <option value="Public">Spain</option>
                                    <option value="Option-2">Option-2</option>
                                    <option value="Option-3">Option-3</option>

                                </select>
                            </div>
                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">State</span>
                                <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full">
                                    <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="State" />
                                </div>
                            </div>
                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">City</span>
                                <select name="" id="" defaultValue={"Barcelona"} className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full outline-none text-gray-800">
                                    <option value="Public">Barcelona</option>
                                    <option value="Option-2">Option-2</option>
                                    <option value="Option-3">Option-3</option>

                                </select>
                            </div>
                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Postcode</span>
                                <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full">
                                    <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="08012" />
                                </div>
                            </div>

                            <div className="flex ml-auto py-[30px]">
                                <button className="px-4 py-[13px] flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1">
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    }
                />
                {/* Password */}
                <Card
                    title="Password"
                    buttonStatus={false}
                    dotContentStatus={false}
                    dotStatus={false}
                    content={

                        <div className="flex flex-col px-[30px] pt-5">

                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Current Password</span>
                                <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full md:min-w-[330px]">
                                    <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="Your current password" />
                                </div>
                            </div>
                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">New Password</span>
                                <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full md:min-w-[330px]">
                                    <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="New Password" />
                                </div>
                            </div>
                            <div className="flex flex-col items-start md:flex-row md:items-center gap-4 md:gap-0 py-2.5">
                                <span className="min-w-[220px] text-b-13-14-400 text-gray-800 ">Confirm new password</span>
                                <div className="bg-[#FCFCFC] dark:bg-coal-300 rounded-md p-3 border w-full md:min-w-[330px]">
                                    <input type="text" className="w-full outline-none bg-transparent text-13-14-400 text-gray-800" placeholder="Confirm new password" />
                                </div>
                            </div>

                            <div className="flex ml-auto py-[30px]">
                                <button className="px-4 py-[13px] flex items-center rounded-md bg-primary text-b-12-12-500 w-max text-white gap-1">
                                    Reset Password
                                </button>
                            </div>
                        </div>
                    }
                />
                {/* Delete Account */}
                <Card
                    title="Delete Account"
                    dotStatus={false}
                    buttonStatus={false}
                    content={
                        <>
                            <div className="flex flex-col gap-[30px] p-[30px]">
                                <div className="flex flex-col gap-5">
                                    <p className="text-b-13-20-400 text-gray-800 max-w-[560px]">We regret to see you leave. Confirm account deletion below. Your data will be permanently removed. Thank you for being part of our community. Please check our Setup Guidelines if you still wish continue.</p>
                                    <div className="flex flex-row items-center gap-[6px]">
                                        <input type="checkbox" name="confirm" id="confirm" className="size-[18px]" />
                                        <span className="text-b-13-14-500 text-gray-800">Confirm deleting account</span>
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-2.5 ml-auto">
                                    <button className="px-4 py-[13px] border rounded-md flex items-center justify-center">
                                        <span className="text-b-13-14-500 text-gray-700">Deactivate Instead</span>
                                    </button>
                                    <button className="px-4 py-[13px] border rounded-md flex items-center justify-center bg-danger">
                                        <span className="text-b-13-14-500 text-white">Deactivate Instead</span>
                                    </button>
                                </div>
                            </div>
                        </>
                    }
                />
            </div>
        </div >
    )
}
export default SettingPlain