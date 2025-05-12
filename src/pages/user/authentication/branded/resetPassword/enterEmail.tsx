import { Link } from "react-router"
import { FcGoogle } from "react-icons/fc"
import { ImAppleinc } from "react-icons/im"
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"
import { useState } from "react"
import Branded from "../../../../../components/authentication/branded"
import Card from "../../../../../components/card/card"

const BrandedEnterEmail = () => {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex items-center md:flex-row flex-col-reverse justify-center  md:gap-[190px] gap-[30px] md:px-[30px] w-full md:min-h-screen">
            <Card
                dotStatus={false}
                buttonStatus={false}
                content={
                    <>
                        <form action="#" className="flex flex-col gap-[30px] p-10">
                            <div className="flex flex-col gap-2.5 items-center">
                                <h3 className="text-b-18-18-500 text-gray-900">Sign in</h3>
                                <span className="text-b-13-14-400 text-gray-700">Need a account? <Link to={"/user/authentication/branded/signUp"} className="text-primary text-b-13-14-400">Sign up</Link></span>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="flex flex-row items-center gap-2.5">
                                    <button className="flex flex-row items-center gap-[6px] border py-2.5 min-w-[140px] justify-center rounded-md">
                                        <FcGoogle className="size-[14px]" />
                                        <span className="text-b-12-12-500 text-gray-700">Use Google</span>
                                    </button>
                                    <button className="flex flex-row items-center gap-[6px] border py-2.5 min-w-[140px] justify-center rounded-md">
                                        <ImAppleinc className="size-[14px]" />
                                        <span className="text-b-12-12-500 text-gray-700">Use Apple</span>
                                    </button>
                                </div>
                                <div className="flex flex-row items-center gap-2">
                                    <span className="w-full bg-gray-200 h-[1px]"></span>
                                    <span className="text-b-11-12-400 text-gray-600">OR</span>
                                    <span className="w-full bg-gray-200 h-[1px]"></span>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <span className="text-b-13-14-400 text-gray-900">Email</span>
                                    <div className="border py-[13px] px-3 rounded-md bg-ligh-active">
                                        <input type="text" className="outline-none border-none w-full text-b-13-14-400 text-gray-800 bg-transparent" placeholder="email@email.com" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row justify-between items-center">
                                        <span className="text-b-13-14-400 text-gray-900">Password</span>
                                        <Link to={"/user/authentication/branded/resetPassword/enterEmail"} className="text-primary text-b-13-14-400">Forgot Password?</Link>
                                    </div>
                                    <div className="border py-[13px] px-3 rounded-md flex flex-row items-center gap-2 bg-ligh-active">
                                        <input
                                            type={isOpen ? "text" : "password"}
                                            className="outline-none border-none w-full text-b-13-14-400 text-gray-800 bg-transparent"
                                            placeholder="Enter a password"
                                        />
                                        {isOpen ? (
                                            <IoEyeOutline
                                                className="size-4 text-gray-500 cursor-pointer"
                                                onClick={() => setIsOpen(false)}
                                            />
                                        ) : (
                                            <IoEyeOffOutline
                                                className="size-4 text-gray-500 cursor-pointer"
                                                onClick={() => setIsOpen(true)}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div className="flex flex-row items-center gap-[6px]">
                                    <input type="checkbox" name="remember" id="remember" className="size-[18px]" />
                                    <span className="text-b-13-14-500 text-gray-800">Remember me</span>
                                </div>
                                <button className="bg-primary flex items-center justify-center w-full text-white text-b-13-14-500 rounded-md py-[13px]">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </>
                }
            />
            <Branded />
        </div>
    )
}
export default BrandedEnterEmail