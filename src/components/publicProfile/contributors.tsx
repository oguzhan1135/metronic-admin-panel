import { FaEllipsisVertical } from "react-icons/fa6"
import Tyler from '../../assets/icon/tyler-hero.svg'
import Esther from '../../assets/icon/ester-hoeard.svg'
import Cody from '../../assets/icon/cody-fisher.svg'
import Arlene from '../../assets/icon/arlene-mccoy.svg'

const Contributors = () => {
    return (
        <div className="flex flex-col">
           
            <div className="flex flex-col gap-5 px-[30px] py-5">
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-2.5 items-center">
                        <img src={Tyler} alt="" className='' />
                        <div className="flex flex-col gap-2">
                            <span className='text-b-14-14-500 text-gray-900'>Tyler Hero</span>
                            <span className='text-b-12-12-400 text-gray-700'>6 constributors</span>
                        </div>
                    </div>
                    <FaEllipsisVertical className='text-gray-600' />
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-2.5 items-center">
                        <img src={Esther} alt="" className='' />
                        <div className="flex flex-col gap-2">
                            <span className='text-b-14-14-500 text-gray-900'>Esther Howard</span>
                            <span className='text-b-12-12-400 text-gray-700'>29 сontributors</span>
                        </div>
                    </div>
                    <FaEllipsisVertical className='text-gray-600' />
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-2.5 items-center">
                        <img src={Cody} alt="" className='' />
                        <div className="flex flex-col gap-2">
                            <span className='text-b-14-14-500 text-gray-900'>Cody Fisher</span>
                            <span className='text-b-12-12-400 text-gray-700'>34 constributors</span>
                        </div>
                    </div>
                    <FaEllipsisVertical className='text-gray-600' />
                </div>
                <div className="flex flex-row items-center justify-between">
                    <div className="flex flex-row gap-2.5 items-center">
                        <img src={Arlene} alt="" className='' />
                        <div className="flex flex-col gap-2">
                            <span className='text-b-14-14-500 text-gray-900'>Arlene McCoy</span>
                            <span className='text-b-12-12-400 text-gray-700'>1 constributors</span>
                        </div>
                    </div>
                    <FaEllipsisVertical className='text-gray-600' />
                </div>
            </div>
           
        </div>
    )
}
export default Contributors