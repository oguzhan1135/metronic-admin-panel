import { Link } from 'react-router'
import ErrorImage from '@assets/error-404.svg'
import { IoSearchOutline } from 'react-icons/io5'

const Error404 = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-10 min-h-[calc(100vh-250px)]">
            <img src={ErrorImage} alt="error" />
            <div className="flex flex-col gap-4 items-center">
                <div className="flex items-center justify-center border rounded-[4px] bg-primary-light border-primary border-opacity-20 p-2">
                    <span className='text-b-11-12-500 text-primary'>404 Error</span>
                </div>
                <h3 className='text-h-26-26-600 text-gray-900'>We have lost this page</h3>
                <span className='text-b-15-16-400 text-gray-700'>The requested page is missing. Check the URL or <Link to={"/"} className='text-primary'>Return Home</Link>.</span>
            </div>
            <div className="px-3 py-[13px] border rounded-md flex flex-row gap-[6px] items-center bg-light-active min-w-[260px]">
                <IoSearchOutline className='text-gray-500 size-[18px]' />
                <input type="text" className='outline-none bg-transparent text-b-13-14-400 text-gray-800' placeholder='Search Metronic' />
            </div>
        </div>
    )
}
export default Error404