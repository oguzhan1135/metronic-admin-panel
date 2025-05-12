import { Link } from 'react-router'
import ErrorImage from '../../../assets/icon/error-500.svg'
const Error500 = () => {
    return (
        <div className="flex items-center justify-center flex-col gap-10 min-h-screen w-full">
            <img src={ErrorImage} alt="error" />
            <div className="flex flex-col gap-4 items-center">
                <div className="flex items-center justify-center border rounded-[4px] bg-primary-light border-primary border-opacity-20 p-2">
                    <span className='text-b-11-12-500 text-primary'>500 Error</span>
                </div>
                <h3 className='text-h-26-26-600 text-gray-900'>Internal Server Error</h3>
                <span className='text-b-15-16-400 text-gray-700'>Server error occurred. Please try again later or <Link to={"/"} className='text-primary'>Contact Us</Link> for assistance. .</span>
            </div>
            <Link to={"/"} className="flex items-center justify-center rounded-md bg-primary text-white text-b-13-14-500 px-4 py-[13px]">Back to Home</Link>
        </div>
    )
}
export default Error500