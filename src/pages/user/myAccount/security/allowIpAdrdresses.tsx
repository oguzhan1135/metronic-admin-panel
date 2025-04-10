import Menu from "../../../../components/myAccount/hoverMenu"
import Card from '../../../../components/card/card'
import IpAddresesTable from "../../../../components/myAccount/ıpAddressTable"
import Welcome from '../../../../assets/icon/unlockCreative.svg'
import FAQ from "../../../../components/myAccount/faq"

const AllowedIpAddresses = () => {

    return (
        <div className="flex flex-col gap-[30px]  ">
            {/* {Sub  menu} */}
            <Menu />
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col gap-[14px] ">
                    <h1 className='text-gray-900 text-h-24-24-600'>Allowed IP Addresses</h1>
                    <span className='text-b-14-14-500 text-gray-700'>Central Hub for Personal Customization</span>
                </div>
                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Security Overview
                </button>
            </div>
            <IpAddresesTable />

            {/* FAQ */}

            <FAQ />
             
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
                                    <img src={Welcome} alt="welcome" />
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
                                    <img src={Welcome} alt="welcome" />
                                </div>
                            </>
                        }
                    />
                </div>
            </div>
        </div >
    )
}
export default AllowedIpAddresses