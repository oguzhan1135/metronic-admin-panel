import Card from "@components/card/card"
import { FaArrowRightLong } from "react-icons/fa6"

const CheckMail = () => {

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-authantication-bg dark:bg-authentication-dark bg-cover">
            <Card
                dotStatus={false}
                buttonStatus={false}
                content={
                    <>
                        <form action="#" className="flex flex-col gap-[30px] p-10 items-center dark:bg-coal-500">
                            <div className="flex flex-col gap-2.5 items-center">
                                <h3 className="text-b-18-18-500 text-gray-900">Your Email</h3>
                                <span className="text-b-13-14-400 text-gray-700 text-center">Enter your email to reset password</span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="text-b-13-14-400 text-gray-900 min-w-[290px]">Email</span>
                                <div className="border py-[13px] px-3 rounded-md bg-light-active border-gray-300">
                                    <input type="text" className="outline-none border-none w-full text-b-13-14-400 text-gray-800 bg-transparent" placeholder="email@email.com" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 items-center w-full">
                                <a href="/user/authentication/classic/resetPassword/checkEmail" className="bg-primary flex items-center flex-row gap-[6px] justify-center w-full text-white text-b-13-14-500 rounded-md py-[13px]">
                                    Contoinue
                                    <FaArrowRightLong className="size-[18px]" />
                                </a>
                            </div>
                        </form>
                    </>
                }
            />
        </div>
    )
}
export default CheckMail 