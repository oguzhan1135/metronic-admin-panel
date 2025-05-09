import Card from "../../../../../components/card/card"
import Concord from '../../../../../assets/icon/concord.svg'

const PasswordChanged = () => {

    return (
        <div className="flex items-center justify-center w-full min-h-screen bg-authantication-bg bg-cover">
            <Card
                dotStatus={false}
                buttonStatus={false}
                content={
                    <>
                        <form action="#" className="flex flex-col gap-[30px] p-10 items-center">
                            <img src={Concord} />
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
        </div>
    )
}
export default PasswordChanged