import Card from "@components/card/card"
import Welcome from '@assets/unlockCreative.svg'
import WelcomeDark from '@assets/verify-email-dark.svg'


const Questions = () => {
    return (
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-[30px]">
            <div className="lg:col-span-2 col-span-4 flex flex-col gap-[30px]">


                {/* Questions? */}
                <Card
                    buttonStatus={true}
                    buttonTitle="Go to Help Center"
                    dotStatus={false}
                    content={
                        <>
                            <div className="flex flex-col md:flex-row gap-10 px-10 items-center py-[30px]">
                                <div className="flex flex-col gap-3">
                                    <span className="text-b-20-30-500 text-gray-900 ">Questions?</span>
                                    <p className=" text-b-14-22-400 text-gray-800">Visit our Help Center for detailed assistance on billing, payments, and subscriptions. </p>
                                </div>
                                <img src={Welcome} alt="welcome" className="dark:hidden" />
                                <img src={WelcomeDark} alt="welcome" className="dark:flex hidden" />
                            </div>
                        </>
                    }
                />

            </div>
            <div className="lg:col-span-2 col-span-4 flex flex-col gap-[30px]">

                {/* Contact Support */}
                <Card
                    buttonStatus={true}
                    buttonTitle="Contact Support"
                    dotStatus={false}
                    content={
                        <>
                            <div className="flex flex-col md:flex-row gap-10 px-10 items-center py-[30px]">
                                <div className="flex flex-col gap-3">
                                    <span className="text-b-20-30-500 text-gray-900 ">Contact Support</span>
                                    <p className=" text-b-14-22-400 text-gray-800">Need assistance? Contact our support team for prompt, personalized help your queries & concerns.</p>
                                </div>
                                <img src={Welcome} alt="welcome" className="dark:hidden" />
                                <img src={WelcomeDark} alt="welcome" className="dark:flex hidden" />
                            </div>
                        </>
                    }
                />
            </div>
        </div>
    )
}
export default Questions