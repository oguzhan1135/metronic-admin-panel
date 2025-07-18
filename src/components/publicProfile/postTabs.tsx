import { useState } from "react";
import { MdOutlineMessage, MdSaveAlt } from "react-icons/md";
import Background from '@assets/save-background.svg'
import { CiImageOn } from "react-icons/ci";
import Tyler from '@assets/tyler-hero.svg'
import BackgroundDark from '@assets/save-background-dark.svg'
interface PostTabProps {
    commentContent: React.ReactElement;
    likeContent: React.ReactElement;
    selectedTab: string;
    comment: number;
    like: number;
    save: number;
}

const PostTab: React.FC<PostTabProps> = ({ commentContent, likeContent, selectedTab, comment, like, save }) => {
    const [selected, setSelected] = useState(selectedTab || "")
    return (
        <div className="flex flex-col gap-5">
            <div className="flex gap-2.5 flex-col md:flex-row items-start md:items-center border-t border-b border-dotted py-[6px] ">
                <div onClick={() => setSelected("comment")} className={`p-3 rounded-md flex items-center justify-center group cursor-pointer ${selected === "comment" ? 'bg-primary-light border-primary  group hover:bg-primary/10' : ''} `}>
                    <div className="flex flex-row items-center gap-[5px]">
                        <MdOutlineMessage className={`size-[18px] ${selected === "comment" ? "text-primary" : "text-gray-500"} group-hover:text-primary`} />
                        <span className={`text-b-13-14-500 ${selected === "comment" ? "text-primary" : "text-gray-700"} group-hover:text-primary`}>{comment} Comments</span>
                    </div>
                </div>

                <div onClick={() => setSelected("like")} className={`p-3 rounded-md flex items-center justify-center group cursor-pointer ${selected === "like" ? 'bg-primary-light border-primary  group hover:bg-primary/10' : ''} `}>
                    <div className="flex flex-row items-center gap-[5px]">
                        <MdOutlineMessage className={`size-[18px] ${selected === "like" ? "text-primary" : "text-gray-500"} group-hover:text-primary`} />
                        <span className={`text-b-13-14-500 ${selected === "like" ? "text-primary" : "text-gray-700"} group-hover:text-primary`}>{like} Likes</span>
                    </div>
                </div>

                <div onClick={() => setSelected("save")} className={`p-3 rounded-md flex items-center group justify-center cursor-pointer ${selected === "save" ? 'bg-primary-light border-primary  group hover:bg-primary/10' : ''} `}>
                    <div className="flex flex-row items-center gap-[5px] group-hover:text-primary">
                        <MdSaveAlt className={`size-[18px] ${selected === "save" ? "text-primary" : "text-gray-500"} group-hover:text-primary`} />
                        <span className={`text-b-13-14-500 ${selected === "save" ? "text-primary" : "text-gray-700"} group-hover:text-primary`}>{save} Saves</span>
                    </div>
                </div>
            </div>

            {
                selected === "comment" ?
                    <>
                        {commentContent}
                    </> : selected === "like" ?
                        <>
                            {likeContent}
                        </> : selected === "save" ?
                            <div className="flex flex-col items-center w-full gap-[7px]">
                                <img src={Background} alt="background" className="dark:hidden" />
                                <img src={BackgroundDark} alt="background-dark" className="dark:flex hidden" />
                                <span className="text-b-20-20-500 text-gray-900 pt-[23px]">Access Restricted for this Option</span>
                                <p className="text-b-14-22-400 text-gray-600 text-center pb-[23px]">The user may not have the necessary privileges or permissions to access this option in this page</p>
                                <div className="w-max flex items-center justify-center border rounded-md px-4 py-3 cursor-pointer">
                                    <span className="text-b-13-14-500 text-gray-700">Request Access</span>
                                </div>
                            </div> :
                            <div className="flex flex-row items-center gap-2.5">
                                <img src={Tyler} alt="tyler" className="size-[40px]" />
                                <div className="flex flex-row items-center justify-between border w-full px-[14px] py-4 rounded-md">
                                    <input type="text" className="outline-none  flex text-b-14-22-400 text-gray-800" placeholder="your comment.." />
                                    <CiImageOn className="text-gray-500 size-[18px] hover:text-gray-800 cursor-pointer" />

                                </div>
                            </div>
            }

        </div>
    )
}
export default PostTab