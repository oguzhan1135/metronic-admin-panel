import { Link } from "react-router"
import Card from "../../../../components/card/card"
import CheckMailImage from '../../../../assets/icon/check-mail-image.svg'

const CheckMail = () => {

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-authantication-bg bg-cover">
            <Card
                dotStatus={false}
                buttonStatus={false}
                content={
                    <>
                        <form action="#" className="flex flex-col gap-[30px] p-10 items-center">
                            <img src={CheckMailImage} />
                            <div className="flex flex-col gap-5 items-center">
                                <h3 className="text-b-18-18-500 text-gray-900">Check your email</h3>
                                <p className="text-center text-b-13-20-400 text-gray-700 max-w-[360px]">Please click the link sent to your email <Link to={location} className="text-gray-900">bob@reui.io</Link>
                                    to verify your account. Thank you</p>
                            </div>

                            <div className="flex flex-col gap-5 items-center w-full">
                                <a href="/" className="bg-primary flex items-center justify-center w-full text-white text-b-13-14-500 rounded-md py-[13px]">
                                    Back to Home
                                </a>
                                <span className="text-b-13-14-400 text-gray-700">Didn’t receive an email? <Link to={"/user/authentication/classic/signIn"} className="text-primary text-b-13-14-400">Resend</Link></span>
                            </div>
                        </form>
                    </>
                }
            />
        </div>
    )
}
export default CheckMail 