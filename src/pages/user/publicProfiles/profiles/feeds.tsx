import { CiImageOn, CiMail } from "react-icons/ci"
import { FaFacebook, FaYoutube } from "react-icons/fa6"
import { GiAbstract080 } from "react-icons/gi"
import { SlLocationPin } from "react-icons/sl"
import Tyler from '../../../../assets/icon/tyler-hero.svg'
import Cody from '../../../../assets/icon/cody-fisher.svg'
import Jennifer from '../../../../assets/icon/jennifer.svg'
import Menu from "../../../../components/publicProfile/hovermenu"
import Verify from '../../../../assets/icon/verify.svg'
import Card from "../../../../components/publicProfile/card"
import { Link } from "react-router"
import LeftItem from '../../../../assets/icon/feeds-left-item.svg'
import RightTopItem from '../../../../assets/icon/feeds-right-top-item.svg'
import RightBottomItem from '../../../../assets/icon/feeds-right-bottom-item.svg'
import PostTab from "../../../../components/publicProfile/postTabs"
import { MdTabUnselected } from "react-icons/md"
import YouTube from "react-youtube";
import { FaRegCheckCircle, FaUsers } from "react-icons/fa"
import Ranee from '../../../../assets/icon/rane-bronson.svg'
import Jonathan from '../../../../assets/icon/jonathan-taylor.svg'
import Lilia from '../../../../assets/icon/lilia-mattox.svg'
import Neil from '../../../../assets/icon/neil-ronerts.svg'




const Feeds = () => {
    const YouTubePlayer = ({ videoId }: { videoId: string }) => {
        return (
            <YouTube
                videoId={videoId}
                opts={{
                    width: "100%",
                    height: "100%",
                    playerVars: {
                        modestbranding: 0,
                        rel: 0,
                    },
                }}

                className="w-full h-full aspect-video"
            />
        );
    }
    const location = window.location.pathname
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 items-center justify-center">
                <div className="rounded-full border border-success">
                    <img src={Jennifer} alt="" className='size-[100px]' />
                </div>
                <div className="flex flex-row items-center gap-1 ">
                    <span className="text-b-18-18-600 text-gray-900">Jenny Klabber</span>
                    <img src={Verify} alt="" />
                </div>
                <div className="flex md:flex-row flex-col items-center gap-5">
                    <div className="flex flex-row items-center gap-[5px]">
                        <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                        <span className='text-gray-600 text-b-14-14-500'>KeenThemes</span>
                    </div>
                    <div className="flex flex-row items-center gap-[5px]">
                        <SlLocationPin className='text-gray-600 text-b-14-14-500' />
                        <span className='text-gray-600 text-b-14-14-500'>SF, Bay Area</span>
                    </div>
                    <div className="flex flex-row items-center gap-[5px]">
                        <CiMail className='text-gray-600 text-b-14-14-500' />
                        <Link to={location} className='text-gray-600 text-b-14-14-500 hover:text-primary text-animation'>jenny@kteam.com</Link>
                    </div>
                </div>
            </div>
            {/* {Sub  menu} */}
            <Menu />

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-[30px] p-4">
                <div className="xl:col-span-1 flex flex-col gap-[30px]">
                    {/* {Data} */}
                    <div className="bg-white  rounded-xl shadow-sm border">
                        <div className="flex items-center justify-center py-[30px] ">
                            <div className="flex sm:flex-row flex-col items-center gap-5 w-full">
                                <div className="flex flex-col gap-1 items-center justify-center relative after:content-[''] w-full after:flex after:bg-gray-300 after:w-full after:h-[1px] sm:after:w-[1px] after:right-0  sm:after:h-full sm:after:absolute sm:after:right-0 last:after:hidden">
                                    <span className="text-h-26-26-600 text-gray-900">5.3k</span>
                                    <span className="text-b-14-14-400 text-gray-700 pb-5 md:pt-0">Connections</span>
                                </div>


                                <div className="flex flex-col gap-1 items-center justify-center w-full ">
                                    <span className="text-h-26-26-600 text-gray-900">28.9k</span>
                                    <span className="text-b-14-14-400 text-gray-700">Uploads</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* {Profile} */}
                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        title="Profile"
                        content={
                            <div className="flex flex-col px-[30px] gap-5  py-5">
                                <p>Experienced and creative professional with a passion great as for problem-solving and a commitment to excellence.</p>
                                <div className="flex flex-row items-center gap-2.5">
                                    <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation">KeenThemes</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation">Author Level 100</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation">UI/UX Desiger</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <GiAbstract080 className='text-gray-600 text-b-14-14-500' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation">jenny@kteam.com</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <CiMail className='text-gray-600 text-b-14-14-500' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation">jenny@kteam.com</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <FaFacebook className='text-gray-600 text-b-14-14-500' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation">keenthemes</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <FaYoutube className='text-gray-600 text-b-14-14-500' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation">keenthemes</Link>
                                </div>
                            </div>

                        }
                    />
                    {/* Open to Work */}
                    <Card
                        title="Open to Work"
                        dotStatus={false}
                        buttonStatus={true}
                        buttonTitle="View details"
                        content={
                            <div className="flex  flex-col gap-5 py-5 px-[30px]">
                                <p className="text-b-14-22-400 text-gray-800">Experienced UI/UX designer seeking new opportunities.</p>
                            </div>
                        }
                    />
                    {/* {Skills} */}

                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        title='Skills'
                        content={
                            <div className="flex flex-col gap-5">

                                <div className="flex flex-row items-center flex-wrap gap-[10px] px-[30px] py-5">
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Web Design</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Code Review</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Figma</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Product Development</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Webflow</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>AI</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>noCode</span>
                                    </div>
                                    <div className="flex items-center justify-center rounded-[4px] p-2 bg-gray-200">
                                        <span className='text-b-11-12-500 text-gray-700'>Management</span>
                                    </div>

                                </div>
                            </div>
                        }
                    />
                </div>

                <div className="lg:col-span-2 flex flex-col gap-[30px]">
                    <Card
                        dotStatus={true}
                        titleContent={
                            <div className="flex flex-row items-center gap-3">
                                <img src={Jennifer} alt="jennifer" className="size-[50px]" />
                                <div className="flex flex-col gap-2">
                                    <Link to={location} className=" text-b-15-16-600 hover:text-primary text-animation">Jenny Klabber</Link>
                                    <span className=" text-b-14-14-400 text-gray-700">Yesterday at  5:06 PM</span>
                                </div>
                            </div>
                        }
                        content={
                            <div className="flex flex-col gap-5 pb-5 px-[30px]">
                                <p className="text-b-14-22-400 text-gray-800">Now that I’m done thoroughly mangling that vague metaphor, let’s get down to business. You know you need to start blogging to grow your business, but you don’t know how. In this post, I’ll show you how to write a great blog post in five simple steps that people will actually want to read. Ready? Let’s get started.</p>

                                <div className="grid grid-rows-1 md:grid-cols-2  gap-[30px]">
                                    <div className="grid row-span-1 md:col-span-1 grid-rows-1 ">
                                        <img src={LeftItem} alt="" className="w-full h-full" />
                                    </div>
                                    <div className="grid row-span-1 md:col-span-1 grid-rows-2 gap-[30px] ">
                                        <div className="grid row-span-1 rounded-xl overflow-hidden">
                                            <img src={RightTopItem} alt="" className="w-full h-full scale-110" />

                                        </div>
                                        <div className="grid row-span-1 rounded-xl overflow-hidden">
                                            <img src={RightBottomItem} alt="" className="w-full h-full object-cover" />

                                        </div>

                                    </div>

                                </div>

                                <PostTab
                                    comment={2}
                                    like={47}
                                    save={900}
                                    selectedTab="comment"
                                    likeContent={
                                        <div className="flex flex-col">
                                            <div className="flex flex-row items-center justify-between px-3 py-2.5">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <img src={Cody} alt="cody" className="size-10" />
                                                    <div className="flex flex-col gap-[6px]">
                                                        <Link to={location} className="text-gray-900 text-b-15-16-600">Adam Wilson</Link>
                                                        <span className="text-b-13-14-400 text-gray-700">2 mutual subscribers</span>
                                                    </div>

                                                </div>
                                                <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer">
                                                    <FaUsers />
                                                    Connect
                                                </a>
                                            </div>
                                            <div className="flex flex-row items-center justify-between px-3 py-2.5">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <img src={Ranee} alt="rane" />
                                                    <div className="flex flex-col gap-[6px]">
                                                        <Link to={location} className="text-gray-900 text-b-15-16-600">Renee Branson</Link>
                                                        <span className="text-b-13-14-400 text-gray-700">6 mutual subscribers</span>
                                                    </div>

                                                </div>
                                                <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer">
                                                    <FaRegCheckCircle className="text-gray-500 size-[14px]" />
                                                    Connected
                                                </a>
                                            </div>
                                            <div className="flex flex-row items-center justify-between px-3 py-2.5">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <img src={Jonathan} alt="jonathan" />
                                                    <div className="flex flex-col gap-[6px]">
                                                        <Link to={location} className="text-gray-900 text-b-15-16-600">Jonathan Taylor</Link>
                                                        <span className="text-b-13-14-400 text-gray-700">13 mutual subscribers</span>
                                                    </div>

                                                </div>
                                                <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer">
                                                    <FaUsers />
                                                    Connect
                                                </a>
                                            </div>
                                            <div className="flex flex-row items-center justify-between px-3 py-2.5">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <img src={Lilia} alt="lilia" />
                                                    <div className="flex flex-col gap-[6px]">
                                                        <Link to={location} className="text-gray-900 text-b-15-16-600">Lilia Mattox</Link>
                                                        <span className="text-b-13-14-400 text-gray-700">4 mutual subscribers</span>
                                                    </div>

                                                </div>
                                                <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer">
                                                    <FaRegCheckCircle className="text-gray-500 size-[14px]" />
                                                    Connected
                                                </a>
                                            </div>
                                            <div className="flex flex-row items-center justify-between px-3 py-2.5">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <img src={Neil} alt="neil" />
                                                    <div className="flex flex-col gap-[6px]">
                                                        <Link to={location} className="text-gray-900 text-b-15-16-600">Neil Roberts</Link>
                                                        <span className="text-b-13-14-400 text-gray-700">23 mutual subscribers</span>
                                                    </div>

                                                </div>
                                                <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer">
                                                    <FaRegCheckCircle className="text-gray-500 size-[14px]" />
                                                    Connected
                                                </a>
                                            </div>

                                        </div>
                                    }
                                    commentContent={
                                        <div className="flex flex-col gap-5">
                                            <div className="flex flex-row items-start gap-[14px]">
                                                <img src={Tyler} alt="tyler" className="size-[50px]" />
                                                <div className="flex flex-col gap-2.5 w-full ">
                                                    <div className="flex flex-row items-center justify-between">
                                                        <div className="flex flex-row items-center gap-2.5 ">
                                                            <Link to={location} className="text-b-15-16-500 hover:text-primary text-animation">Mr. Anderson </Link>
                                                            <span className="text-b-14-14-400 text-gray-700">1 Day ago</span>
                                                        </div>
                                                        <Link to={location} className="text-primary border-b border-dotted text-b-13-14-500 border-b-primary">Reply</Link>

                                                    </div>
                                                    <p className="text-14-22-400 text-gray-800">
                                                        Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write. I’ll show you how to write a great blog post in five simple steps that people will actually want to read. Ready?
                                                    </p>
                                                </div>

                                            </div>
                                            <div className="flex flex-row items-start gap-[14px]">
                                                <img src={Cody} alt="cody" className="size-[50px]" />
                                                <div className="flex flex-col gap-2.5 w-full">
                                                    <div className="flex flex-row items-center  justify-between">
                                                        <div className="flex flex-row items-center gap-2.5 ">
                                                            <Link to={location} className="text-b-15-16-500 hover:text-primary text-animation">Mr. Anderson </Link>
                                                            <span className="text-b-14-14-400 text-gray-700">1 Day ago</span>
                                                        </div>
                                                        <Link to={location} className="text-primary border-b border-dotted text-b-13-14-500 border-b-primary">Reply</Link>

                                                    </div>
                                                    <p className="text-14-22-400 text-gray-800">
                                                        Long before you sit dow to put digital pen to paper.                                                    </p>
                                                </div>

                                            </div>
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={Tyler} alt="tyler" className="size-[40px]" />
                                                <div className="flex flex-row items-center justify-between border w-full px-[14px] py-4 rounded-md">
                                                    <input type="text" className="outline-none  flex text-b-14-22-400 text-gray-800" placeholder="your comment.." />
                                                    <CiImageOn className="text-gray-500 size-[18px] hover:text-gray-800 cursor-pointer" />

                                                </div>
                                            </div>

                                        </div>

                                    }
                                />
                            </div>
                        }
                        buttonStatus={false}
                    />
                    <Card
                        dotStatus={true}
                        titleContent={
                            <div className="flex flex-row items-center gap-3">
                                <img src={Jennifer} alt="jennifer" className="size-[50px]" />
                                <div className="flex flex-col gap-2">
                                    <Link to={location} className=" text-b-15-16-600 hover:text-primary text-animation">Jenny Klabber</Link>
                                    <span className=" text-b-14-14-400 text-gray-700">2 days ago</span>
                                </div>
                            </div>
                        }
                        content={
                            <div className="flex flex-col gap-5 pb-5 px-[30px]">
                                <p className="text-b-14-22-400 text-gray-800">I can hear your objections already. “But Dan, I have to blog for a cardboard box manufacturing company.” I feel your pain, I really do.</p>

                                <PostTab
                                    comment={2}
                                    like={24}
                                    save={16}
                                    selectedTab="save"
                                    likeContent={
                                        <div className="flex flex-col">
                                            <div className="flex flex-row items-center justify-between px-3 py-2.5">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <img src={Cody} alt="cody" className="size-10" />
                                                    <div className="flex flex-col gap-[6px]">
                                                        <Link to={location} className="text-gray-900 text-b-15-16-600">Adam Wilson</Link>
                                                        <span className="text-b-13-14-400 text-gray-700">2 mutual subscribers</span>
                                                    </div>

                                                </div>
                                                <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer">
                                                    <FaUsers />
                                                    Connect
                                                </a>
                                            </div>
                                            <div className="flex flex-row items-center justify-between px-3 py-2.5">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <img src={Ranee} alt="rane" />
                                                    <div className="flex flex-col gap-[6px]">
                                                        <Link to={location} className="text-gray-900 text-b-15-16-600">Renee Branson</Link>
                                                        <span className="text-b-13-14-400 text-gray-700">6 mutual subscribers</span>
                                                    </div>

                                                </div>
                                                <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer">
                                                    <FaRegCheckCircle className="text-gray-500 size-[14px]" />
                                                    Connected
                                                </a>
                                            </div>
                                            <div className="flex flex-row items-center justify-between px-3 py-2.5">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <img src={Jonathan} alt="jonathan" />
                                                    <div className="flex flex-col gap-[6px]">
                                                        <Link to={location} className="text-gray-900 text-b-15-16-600">Jonathan Taylor</Link>
                                                        <span className="text-b-13-14-400 text-gray-700">13 mutual subscribers</span>
                                                    </div>

                                                </div>
                                                <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer">
                                                    <FaUsers />
                                                    Connect
                                                </a>
                                            </div>
                                            <div className="flex flex-row items-center justify-between px-3 py-2.5">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <img src={Lilia} alt="lilia" />
                                                    <div className="flex flex-col gap-[6px]">
                                                        <Link to={location} className="text-gray-900 text-b-15-16-600">Lilia Mattox</Link>
                                                        <span className="text-b-13-14-400 text-gray-700">4 mutual subscribers</span>
                                                    </div>

                                                </div>
                                                <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer">
                                                    <FaRegCheckCircle className="text-gray-500 size-[14px]" />
                                                    Connected
                                                </a>
                                            </div>
                                            <div className="flex flex-row items-center justify-between px-3 py-2.5">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <img src={Neil} alt="neil" />
                                                    <div className="flex flex-col gap-[6px]">
                                                        <Link to={location} className="text-gray-900 text-b-15-16-600">Neil Roberts</Link>
                                                        <span className="text-b-13-14-400 text-gray-700">23 mutual subscribers</span>
                                                    </div>

                                                </div>
                                                <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer">
                                                    <FaRegCheckCircle className="text-gray-500 size-[14px]" />
                                                    Connected
                                                </a>
                                            </div>

                                        </div>
                                    }
                                    commentContent={
                                        <div className="flex flex-col gap-5">
                                            <div className="flex flex-row items-start gap-[14px]">
                                                <img src={Tyler} alt="tyler" className="size-[50px]" />
                                                <div className="flex flex-col gap-2.5 w-full ">
                                                    <div className="flex flex-row items-center justify-between">
                                                        <div className="flex flex-row items-center gap-2.5 ">
                                                            <Link to={location} className="text-b-15-16-500 hover:text-primary text-animation">Mr. Anderson </Link>
                                                            <span className="text-b-14-14-400 text-gray-700">1 Day ago</span>
                                                        </div>
                                                        <Link to={location} className="text-primary border-b border-dotted text-b-13-14-500 border-b-primary">Reply</Link>

                                                    </div>
                                                    <p className="text-14-22-400 text-gray-800">
                                                        Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write. I’ll show you how to write a great blog post in five simple steps that people will actually want to read. Ready?
                                                    </p>
                                                </div>

                                            </div>
                                            <div className="flex flex-row items-start gap-[14px]">
                                                <img src={Cody} alt="cody" className="size-[50px]" />
                                                <div className="flex flex-col gap-2.5 w-full">
                                                    <div className="flex flex-row items-center  justify-between">
                                                        <div className="flex flex-row items-center gap-2.5 ">
                                                            <Link to={location} className="text-b-15-16-500 hover:text-primary text-animation">Mr. Anderson </Link>
                                                            <span className="text-b-14-14-400 text-gray-700">1 Day ago</span>
                                                        </div>
                                                        <Link to={location} className="text-primary border-b border-dotted text-b-13-14-500 border-b-primary">Reply</Link>

                                                    </div>
                                                    <p className="text-14-22-400 text-gray-800">
                                                        Long before you sit dow to put digital pen to paper.                                                    </p>
                                                </div>

                                            </div>
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={Tyler} alt="tyler" className="size-[40px]" />
                                                <div className="flex flex-row items-center justify-between border w-full px-[14px] py-4 rounded-md">
                                                    <input type="text" className="outline-none  flex text-b-14-22-400 text-gray-800" placeholder="your comment.." />
                                                    <CiImageOn className="text-gray-500 size-[18px] hover:text-gray-800 cursor-pointer" />

                                                </div>
                                            </div>

                                        </div>

                                    }
                                />
                            </div>
                        }
                        buttonStatus={false}
                    />
                    <Card
                        dotStatus={true}
                        buttonTitle="Show more Likes"

                        titleContent={
                            <div className="flex flex-row items-center gap-3">
                                <div className="flex items-center justify-center rounded-full size-[50px] bg-primary-light">
                                    <MdTabUnselected className="text-primary size-6" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Link to={location} className=" text-b-15-16-600 hover:text-primary text-animation">Finance Deprt - Annual Report</Link>
                                    <span className=" text-b-14-14-400 text-gray-700">2 days ago</span>
                                </div>
                            </div>
                        }
                        content={
                            <div className="flex flex-col gap-5 pb-5 px-[30px]">
                                <p className="text-b-14-22-400 text-gray-800">You also need to be able to accept that not every post is going to get your motor running. Some posts will feel like a chore, but if you have editorial control over what you write about, then choose topics you’d want to read – even if they relate to niche industries. </p>
                                <div className="overflow-hidden rounded-xl">
                                    <YouTubePlayer videoId="2uWJpnuCMKQ" />
                                </div>


                                <PostTab
                                    comment={2}
                                    like={24}
                                    save={16}
                                    selectedTab="like"
                                    likeContent={
                                        <div className="flex flex-col">
                                            <div className="flex flex-row items-center justify-between px-3 py-2.5">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <img src={Cody} alt="cody" className="size-10" />
                                                    <div className="flex flex-col gap-[6px]">
                                                        <Link to={location} className="text-gray-900 text-b-15-16-600">Adam Wilson</Link>
                                                        <span className="text-b-13-14-400 text-gray-700">2 mutual subscribers</span>
                                                    </div>

                                                </div>
                                                <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer">
                                                    <FaUsers />
                                                    Connect
                                                </a>
                                            </div>
                                            <div className="flex flex-row items-center justify-between px-3 py-2.5">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <img src={Ranee} alt="rane" />
                                                    <div className="flex flex-col gap-[6px]">
                                                        <Link to={location} className="text-gray-900 text-b-15-16-600">Renee Branson</Link>
                                                        <span className="text-b-13-14-400 text-gray-700">6 mutual subscribers</span>
                                                    </div>

                                                </div>
                                                <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer">
                                                    <FaRegCheckCircle className="text-gray-500 size-[14px]" />
                                                    Connected
                                                </a>
                                            </div>
                                            <div className="flex flex-row items-center justify-between px-3 py-2.5">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <img src={Jonathan} alt="jonathan" />
                                                    <div className="flex flex-col gap-[6px]">
                                                        <Link to={location} className="text-gray-900 text-b-15-16-600">Jonathan Taylor</Link>
                                                        <span className="text-b-13-14-400 text-gray-700">13 mutual subscribers</span>
                                                    </div>

                                                </div>
                                                <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-primary text-b-12-12-500 text-white border gap-1 cursor-pointer">
                                                    <FaUsers />
                                                    Connect
                                                </a>
                                            </div>
                                            <div className="flex flex-row items-center justify-between px-3 py-2.5">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <img src={Lilia} alt="lilia" />
                                                    <div className="flex flex-col gap-[6px]">
                                                        <Link to={location} className="text-gray-900 text-b-15-16-600">Lilia Mattox</Link>
                                                        <span className="text-b-13-14-400 text-gray-700">4 mutual subscribers</span>
                                                    </div>

                                                </div>
                                                <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer">
                                                    <FaRegCheckCircle className="text-gray-500 size-[14px]" />
                                                    Connected
                                                </a>
                                            </div>
                                            <div className="flex flex-row items-center justify-between px-3 py-2.5">
                                                <div className="flex flex-row items-center gap-2.5">
                                                    <img src={Neil} alt="neil" />
                                                    <div className="flex flex-col gap-[6px]">
                                                        <Link to={location} className="text-gray-900 text-b-15-16-600">Neil Roberts</Link>
                                                        <span className="text-b-13-14-400 text-gray-700">23 mutual subscribers</span>
                                                    </div>

                                                </div>
                                                <a className="px-2.5 py-2.5 flex flex-row items-center rounded-md bg-white text-b-12-12-500 text-gray-700 border gap-1 cursor-pointer">
                                                    <FaRegCheckCircle className="text-gray-500 size-[14px]" />
                                                    Connected
                                                </a>
                                            </div>

                                        </div>
                                    }
                                    commentContent={
                                        <div className="flex flex-col gap-5">
                                            <div className="flex flex-row items-start gap-[14px]">
                                                <img src={Tyler} alt="tyler" className="size-[50px]" />
                                                <div className="flex flex-col gap-2.5 w-full ">
                                                    <div className="flex flex-row items-center justify-between">
                                                        <div className="flex flex-row items-center gap-2.5 ">
                                                            <Link to={location} className="text-b-15-16-500 hover:text-primary text-animation">Mr. Anderson </Link>
                                                            <span className="text-b-14-14-400 text-gray-700">1 Day ago</span>
                                                        </div>
                                                        <Link to={location} className="text-primary border-b border-dotted text-b-13-14-500 border-b-primary">Reply</Link>

                                                    </div>
                                                    <p className="text-14-22-400 text-gray-800">
                                                        Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write. I’ll show you how to write a great blog post in five simple steps that people will actually want to read. Ready?
                                                    </p>
                                                </div>

                                            </div>
                                            <div className="flex flex-row items-start gap-[14px]">
                                                <img src={Cody} alt="cody" className="size-[50px]" />
                                                <div className="flex flex-col gap-2.5 w-full">
                                                    <div className="flex flex-row items-center  justify-between">
                                                        <div className="flex flex-row items-center gap-2.5 ">
                                                            <Link to={location} className="text-b-15-16-500 hover:text-primary text-animation">Mr. Anderson </Link>
                                                            <span className="text-b-14-14-400 text-gray-700">1 Day ago</span>
                                                        </div>
                                                        <Link to={location} className="text-primary border-b border-dotted text-b-13-14-500 border-b-primary">Reply</Link>

                                                    </div>
                                                    <p className="text-14-22-400 text-gray-800">
                                                        Long before you sit dow to put digital pen to paper.                                                    </p>
                                                </div>

                                            </div>
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={Tyler} alt="tyler" className="size-[40px]" />
                                                <div className="flex flex-row items-center justify-between border w-full px-[14px] py-4 rounded-md">
                                                    <input type="text" className="outline-none  flex text-b-14-22-400 text-gray-800" placeholder="your comment.." />
                                                    <CiImageOn className="text-gray-500 size-[18px] hover:text-gray-800 cursor-pointer" />

                                                </div>
                                            </div>

                                        </div>

                                    }
                                />
                            </div>
                        }
                        buttonStatus={true}
                    />
                    <Card
                        dotStatus={true}
                        titleContent={
                            <div className="flex flex-row items-center gap-3">
                                <img src={Jennifer} alt="jennifer" className="size-[50px]" />
                                <div className="flex flex-col gap-2">
                                    <Link to={location} className=" text-b-15-16-600 hover:text-primary text-animation">Jenny Klabber</Link>
                                    <span className=" text-b-14-14-400 text-gray-700">Week ago</span>
                                </div>
                            </div>
                        }
                        content={
                            <div className="flex flex-col gap-5 pb-5 px-[30px]">
                                <p className="text-b-14-22-400 text-gray-800">This doesn’t mean that all bloggers are insincere fakers. On the contrary, many bloggers’ natural curiosity is what makes them great at what they do. If you blog for a living, you have to be comfortable jumping from one topic to the next, even if you don’t know anything about it.</p>

                                <PostTab
                                    comment={2}
                                    like={8}
                                    save={16}
                                    selectedTab=""
                                    likeContent={
                                        <div>
                                            Like içeriği
                                        </div>
                                    }
                                    commentContent={
                                        <div className="flex flex-col gap-5">
                                            <div className="flex flex-row items-start gap-[14px]">
                                                <img src={Tyler} alt="tyler" className="size-[50px]" />
                                                <div className="flex flex-col gap-2.5 w-full ">
                                                    <div className="flex flex-row items-center justify-between">
                                                        <div className="flex flex-row items-center gap-2.5 ">
                                                            <Link to={location} className="text-b-15-16-500 hover:text-primary text-animation">Mr. Anderson </Link>
                                                            <span className="text-b-14-14-400 text-gray-700">1 Day ago</span>
                                                        </div>
                                                        <Link to={location} className="text-primary border-b border-dotted text-b-13-14-500 border-b-primary">Reply</Link>

                                                    </div>
                                                    <p className="text-14-22-400 text-gray-800">
                                                        Long before you sit dow to put digital pen to paper you need to make sure you have to sit down and write. I’ll show you how to write a great blog post in five simple steps that people will actually want to read. Ready?
                                                    </p>
                                                </div>

                                            </div>
                                            <div className="flex flex-row items-start gap-[14px]">
                                                <img src={Cody} alt="cody" className="size-[50px]" />
                                                <div className="flex flex-col gap-2.5 w-full">
                                                    <div className="flex flex-row items-center  justify-between">
                                                        <div className="flex flex-row items-center gap-2.5 ">
                                                            <Link to={location} className="text-b-15-16-500 hover:text-primary text-animation">Mr. Anderson </Link>
                                                            <span className="text-b-14-14-400 text-gray-700">1 Day ago</span>
                                                        </div>
                                                        <Link to={location} className="text-primary border-b border-dotted text-b-13-14-500 border-b-primary">Reply</Link>

                                                    </div>
                                                    <p className="text-14-22-400 text-gray-800">
                                                        Long before you sit dow to put digital pen to paper.                                                    </p>
                                                </div>

                                            </div>
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={Tyler} alt="tyler" className="size-[40px]" />
                                                <div className="flex flex-row items-center justify-between border w-full px-[14px] py-4 rounded-md">
                                                    <input type="text" className="outline-none  flex text-b-14-22-400 text-gray-800" placeholder="your comment.." />
                                                    <CiImageOn className="text-gray-500 size-[18px] hover:text-gray-800 cursor-pointer" />

                                                </div>
                                            </div>

                                        </div>

                                    }
                                />
                            </div>
                        }
                        buttonStatus={false}
                    />
                    <div className="flex items-center justify-center w-full">
                        <Link to={location} className=" text-primary text-b-14-14-400 border-b border-dotted border-b-primary ">Show more posts</Link>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feeds