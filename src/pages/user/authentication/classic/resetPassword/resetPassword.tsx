import Card from "@components/card/card"
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"
import { useState } from "react"

const ResetPassword = () => {

    const [isOpenPassword, setIsOpenPassword] = useState(false);
    const [isOpenConfirmPassword, setIsOpenConfirmPassword] = useState(false);

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-authantication-bg dark:bg-authentication-dark bg-cover">
            <Card
                dotStatus={false}
                buttonStatus={false}
                content={
                    <>
                        <form action="#" className="flex flex-col gap-[30px] p-10">
                            <div className="flex flex-col gap-2.5 items-center">
                                <h3 className="text-b-18-18-500 text-gray-900">Reset Password</h3>
                                <span className="text-b-13-14-400 text-gray-700">Enter your new password</span>
                            </div>
                            <div className="flex flex-col gap-5">


                                <div className="flex flex-col gap-2">
                                    <span className="text-b-13-14-400 text-gray-900 min-w-[290px]">New Password</span>
                                    <div className="border py-[13px] px-3 rounded-md flex flex-row items-center gap-2 bg-light-active border-gray-300">
                                        <input
                                            type={isOpenPassword ? "text" : "password"}
                                            className="outline-none border-none w-full text-b-13-14-400 text-gray-800 bg-transparent"
                                            placeholder="Enter a password"
                                        />
                                        {isOpenPassword ? (
                                            <IoEyeOutline
                                                className="size-4 text-gray-500 cursor-pointer"
                                                onClick={() => setIsOpenPassword(false)}
                                            />
                                        ) : (
                                            <IoEyeOffOutline
                                                className="size-4 text-gray-500 cursor-pointer"
                                                onClick={() => setIsOpenPassword(true)}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-b-13-14-400 text-gray-900">Confirm New Password</span>
                                    <div className="border py-[13px] px-3 rounded-md flex flex-row items-center gap-2 bg-light-active border-gray-300">
                                        <input
                                            type={isOpenConfirmPassword ? "text" : "password"}
                                            className="outline-none border-none w-full text-b-13-14-400 text-gray-800 bg-transparent"
                                            placeholder="Re-enter Password"
                                        />
                                        {isOpenConfirmPassword ? (
                                            <IoEyeOutline
                                                className="size-4 text-gray-500 cursor-pointer"
                                                onClick={() => setIsOpenConfirmPassword(false)}
                                            />
                                        ) : (
                                            <IoEyeOffOutline
                                                className="size-4 text-gray-500 cursor-pointer"
                                                onClick={() => setIsOpenConfirmPassword(true)}
                                            />
                                        )}
                                    </div>
                                </div>

                                <a href="/user/authentication/classic/resetPassword/passwordChanged" className="bg-primary flex items-center justify-center w-full text-white text-b-13-14-500 rounded-md py-[13px]">
                                    Submit
                                </a>
                            </div>
                        </form>
                    </>
                }
            />
        </div>
    )
}
export default ResetPassword