import Menu from "../../../../components/myAccount/hoverMenu"
import IpAddresesTable from "../../../../components/myAccount/tables/ıpAddressTable"
import FAQ from "../../../../components/myAccount/faq"
import Questions from "../../../../components/myAccount/questions"

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
                <button className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-light text-b-12-12-500 text-gray-800 border gap-1 cursor-pointer">
                    Security Overview
                </button>
            </div>
            <IpAddresesTable />

            {/* FAQ */}

            <FAQ />
             
           <Questions/>
        </div >
    )
}
export default AllowedIpAddresses