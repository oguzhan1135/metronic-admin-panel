import Tyler from '@assets/tyler-hero.svg'
import Esther from '@assets/ester-hoeard.svg'
import Cody from '@assets/cody-fisher.svg'
import Arlene from '@assets/arlene-mccoy.svg'
import { HiOutlineDotsVertical } from "react-icons/hi"
import { Link } from "react-router"

const Contributors = () => {
    const location = window.location.pathname
    return (
        <div className="flex flex-col">

            <div className="flex flex-col gap-5 px-[30px] py-5">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-2.5 items-center">
                        <img src={Tyler} alt="" className='' />
                        <div className="flex flex-col gap-2">
                            <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>Tyler Hero</Link>
                            <span className='text-b-12-12-400 text-gray-700'>6 constributors</span>
                        </div>
                    </div>
                    <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                        <HiOutlineDotsVertical className="text-gray-600" />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-2.5 items-center">
                        <img src={Esther} alt="" className='' />
                        <div className="flex flex-col gap-2">
                            <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>Esther Howard</Link>
                            <span className='text-b-12-12-400 text-gray-700'>29 сontributors</span>
                        </div>
                    </div>
                    <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                        <HiOutlineDotsVertical className="text-gray-600" />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-2.5 items-center">
                        <img src={Cody} alt="" className='' />
                        <div className="flex flex-col gap-2">
                            <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>Cody Fisher</Link>
                            <span className='text-b-12-12-400 text-gray-700'>34 constributors</span>
                        </div>
                    </div>
                    <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                        <HiOutlineDotsVertical className="text-gray-600" />
                    </div>
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-2.5 items-center">
                        <img src={Arlene} alt="" className='' />
                        <div className="flex flex-col gap-2">
                            <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>Arlene McCoy</Link>
                            <span className='text-b-12-12-400 text-gray-700'>1 constributors</span>
                        </div>
                    </div>
                    <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                        <HiOutlineDotsVertical className="text-gray-600" />
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Contributors