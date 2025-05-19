import Card from "../../../../../components/card/card"
import Branded from "../../../../../components/authentication/branded"
import Concord from '../../../../../assets/icon/concord.svg'
import ConcordDark from '../../../../../assets/icon/concord-dark.svg'


const BrandedChangedPassword = () => {


    return (
        <div className="flex items-center md:flex-row flex-col-reverse justify-center  md:gap-[190px] gap-[30px] md:px-[30px] w-full md:min-h-screen dark:bg-authentication-dark">
            <Card
                dotStatus={false}
                buttonStatus={false}
                content={
                    <>
                        <form action="#" className="flex flex-col gap-[30px] p-10 items-center">
                            <img src={Concord} alt="concord" className="dark:hidden" />
                            <img src={ConcordDark} alt="concord-dark" className="dark:flex hidden" />
                            <div className="flex flex-col gap-5 items-center">
                                <h3 className="text-b-18-18-500 text-gray-900">Your password is changed</h3>
                                <p className="text-center text-b-13-20-400 text-gray-700 max-w-[360px]">Your password has been successfully updated.
                                    Your account's security is our priority.</p>
                            </div>
                            <div className="flex flex-col gap-5 items-center w-full">
                                <a href="/" className="bg-primary flex items-center justify-center w-full text-white text-b-13-14-500 rounded-md py-[13px]">
                                    Home
                                </a>
                            </div>
                        </form>
                    </>
                }
            />
            <Branded />
        </div>
    )
}
export default BrandedChangedPassword