
import { IoMdClose } from "react-icons/io"
const Chat = () => {
    return (
        <div className="absolute  top-12 right-32 w-80">
            <div className="flex bg-white rounded-xl border-gray-300 border  flex-col">
                <div className=" px-5 py-3 border-b">
                    <div className="flex flex-row items-center justify-between">
                        <span className="text-gray-900 text-b-14-14-600">Chat</span>
                        {/* <IoMdClose className=" text-gray-600 size-5" /> */}
                    </div>
                </div>
                {
                    //Waiting data
                }
            </div>
        </div>
    )
}
export default Chat