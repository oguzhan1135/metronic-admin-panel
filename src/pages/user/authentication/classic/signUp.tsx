import { Link } from "react-router"
import Card from "../../../../components/card/card"
import { FcGoogle } from "react-icons/fc"
import { ImAppleinc } from "react-icons/im"
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5"
import { useState } from "react"

const SignUp = () => {

    const [isOpenPassword, setIsOpenPassword] = useState(false);
    const [isOpenConfirmPassword, setIsOpenConfirmPassword] = useState(false);

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-authantication-bg bg-cover">
            <Card
                dotStatus={false}
                buttonStatus={false}
                content={
                    <>
                        <form action="#" className="flex flex-col gap-[30px] p-10">
                            <div className="flex flex-col gap-2.5 items-center">
                                <h3 className="text-b-18-18-500 text-gray-900">Sign up</h3>
                                <span className="text-b-13-14-400 text-gray-700">Already have an Account? <Link to={"/user/authentication/classic/signIn"} className="text-primary text-b-13-14-400">Sign in</Link></span>
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
                                        <input type="text" className="outline-none border-none w-full text-b-13-14-400 text-gray-800" placeholder="email@email.com" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-row justify-between items-center">
                                        <span className="text-b-13-14-400 text-gray-900">Password</span>
                                        <Link to={"/user/authentication/classsic/resetPassword"} className="text-primary text-b-13-14-400">Forgot Password?</Link>
                                    </div>
                                    <div className="border py-[13px] px-3 rounded-md flex flex-row items-center gap-2 bg-ligh-active">
                                        <input
                                            type={isOpenPassword ? "text" : "password"}
                                            className="outline-none border-none w-full text-b-13-14-400 text-gray-800"
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
                                    <div className="flex flex-row justify-between items-center">
                                        <span className="text-b-13-14-400 text-gray-900">Confirm Password</span>
                                        <Link to={"/user/authentication/classsic/resetPassword"} className="text-primary text-b-13-14-400">Forgot Password?</Link>
                                    </div>
                                    <div className="border py-[13px] px-3 rounded-md flex flex-row items-center gap-2 bg-ligh-active">
                                        <input
                                            type={isOpenConfirmPassword ? "text" : "password"}
                                            className="outline-none border-none w-full text-b-13-14-400 text-gray-800"
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
                                <div className="flex flex-row items-center gap-[6px]">
                                    <input type="checkbox" name="remember" id="remember" className="size-[18px]" />
                                    <span className="text-b-13-14-500 text-gray-800">I accept  <Link to={location} className="text-primary text-b-13-14-500">Terms & Conditions</Link></span>
                                </div>
                                <button className="bg-primary flex items-center justify-center w-full text-white text-b-13-14-500 rounded-md py-[13px]">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </>
                }
            />
        </div>
    )
}
export default SignUp