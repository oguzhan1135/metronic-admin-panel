import ExampleUser from '../../../assets/icon/example-user.svg'
import Profile from '../../../assets/icon/user-edit.svg'



const User = () => {
    return (
        <div className="absolute top-12 right-0 w-64">
            <div className="flex bg-white rounded-xl border-gray-300 border  flex-col">
                <div className="border-b-2 ">
                    <div className="flex justify-between items-center p-5">

                        <div className="flex flex-row gap-2 items-center ">
                            <div className="w-9 h-9 rounded-full border-2 border-green-600 overflow-hidden">
                                <img src={ExampleUser} alt="ExampleUser" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className='text-b-13-14-500 text-gray-900'>Cody Fisher</span>
                                <span className='text-gray-700 text-b-11-12-400'>c.fisher@gmail.com</span>
                            </div>
                        </div>
                        <div className="w-7 h-5 bg-primary-clarity bg-opacity-20 flex items-center justify-center rounded">
                            <span className='text-b-10-10-500 text-primary'>Pro</span>
                        </div>
                    </div>
                </div>

                <div className="border-b-2">
                    <div className="flex flex-row items-center p-5 gap-[10px]">
                        <img src={Profile} alt="" />
                        <span className='text-gray-800 text-b-13-14-400'>Public Profile</span>
                    </div>
                    <div className="flex flex-row items-center p-5 gap-[10px]">
                        <img src={Profile} alt="" />
                        <span className='text-gray-800 text-b-13-14-400'>My Profile</span>
                    </div>
                    <div className="flex flex-row items-center p-5  justify-between">
                        <div className="flex flex-row items-center gap-[10px]">
                            <img src={Profile} alt="" />
                            <span className='text-gray-800 text-b-13-14-400'>My Account</span>
                        </div>
                        <span> / </span>
                    </div>
                    <div className="flex flex-row items-center p-5 gap-[10px]">
                        <img src={Profile} alt="" />
                        <span className='text-gray-800 text-b-13-14-400'>Devs Forum</span>
                    </div>
                </div>
                <div className="flex flex-row items-center p-5 gap-[10px]">
                        <img src={Profile} alt="" />
                        <span className='text-gray-800 text-b-13-14-400'>Devs Forum</span>
                    </div>


            </div>
        </div>
    )
}
export default User