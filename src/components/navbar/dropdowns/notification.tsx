
import { IoMdClose } from "react-icons/io"
interface NotificationProps {
    closeDropdowns: () => void;
}
const Notification: React.FC<NotificationProps> = ({ closeDropdowns }) => {
    return (
        <div className="absolute  top-12 right-40 w-80">
            <div className="flex bg-white rounded-xl border-gray-300 border  flex-col">
                <div className=" pl-5 pr-2.5 py-3 border-b">
                    <div className="flex flex-row items-center justify-between">
                        <span className="text-gray-900 text-b-14-14-600">Notification</span>
                        <div onClick={() => closeDropdowns()} className="p-2 hover:bg-gray-200 flex items-center justify-center rounded-md cursor-pointer duration-200">
                            <IoMdClose className=" text-gray-600 size-5" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Notification