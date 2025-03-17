import { GiAbstract080 } from 'react-icons/gi';
import Jennifer from '../../../../assets/icon/jennifer.svg'
import Verify from '../../../../assets/icon/verify.svg'
import { SlLocationPin } from 'react-icons/sl';
import { CiMail } from 'react-icons/ci';
import Card from '../../../../components/card/card';
import Menu from '../../../../components/publicProfile/hovermenu';
import { Link } from 'react-router';
import XMR from '../../../../assets/icon/xmr.svg'
import Badges from '../../../../components/publicProfile/badges';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa6';
import { TbWorld } from 'react-icons/tb';
import CreatedOne from '../../../../assets/icon/createdOne.svg'
import CreatedThree from '../../../../assets/icon/createdThree.svg'
import CreatedFour from '../../../../assets/icon/createdFour.svg'
import CreatedSix from '../../../../assets/icon/createdSix.svg'
import CreatedSeven from '../../../../assets/icon/createdSeven.svg'



const NFT = () => {
    const location = window.location.pathname
    return (
        <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3 items-center justify-center bg-mask bg-cover">
            <div className="rounded-full border border-success">
                    <img src={Jennifer} alt="" className='size-[100px]' />
                </div>
                <div className="flex flex-row items-center gap-1 ">
                    <span className="text-b-18-18-600 text-gray-900">Jennifer Klabber</span>
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
                    {/* {Community Badge} */}
                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        title='Assets'
                        content={
                            <div className="flex flex-row items-start gap-2 px-[30px] py-5">
                                <img src={XMR} alt="xmr" />
                                <div className="flex flex-col gap-2.5">
                                    <span className='text-h-26-26-600 text-gray-900'>302.97 XMR</span>
                                    <span className='text-b-14-14-500 text-gray-700'>$42,074.81</span>
                                </div>
                            </div>
                        }
                    />
                    {/* {About} */}
                    <Card
                        buttonStatus={false}
                        dotStatus={false}
                        title="About"
                        content={
                            <div className="flex flex-col gap-5 px-[30px] py-5">
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Joined:</span>
                                    <span className="text-b-14-14-400 text-gray-900">26 Aug, 2021</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Sector:</span>
                                    <span className="text-b-14-14-400 text-gray-900">Online Education</span>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <span className="text-b-14-14-400 text-gray-600 w-[100px]">Status:</span>
                                    <div className="px-[6px] py-[5px] bg-success-light border border-success-clarity flex rounded-md items-center justify-center ">
                                        <span className="text-b-11-12-500 text-success">Subscribed</span>
                                    </div>
                                </div>
                                <p className='text-b-14-22-400 text-gray-800'>Experienced and creative professional with a passion great as a commitment to best excellence.</p>

                            </div>

                        }
                    />
                    {/* {Work experience} */}
                    <Badges title='Badges' />
                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        title="Network"
                        content={
                            <div className="flex flex-col px-[30px] gap-5  py-5">
                                <div className="flex flex-row items-center gap-2.5">
                                    <TbWorld className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation hover:text-primary">jennynft</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <FaFacebook className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation hover:text-primary">jennynft</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <FaTwitter className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation hover:text-primary">jennynft</Link>
                                </div>
                                <div className="flex flex-row items-center gap-2.5">
                                    <FaYoutube className='text-gray-600 text-b-14-14-500 size-[18px]' />
                                    <Link to={location} className="text-b-14-14-400 text-gray-900 text-animation hover:text-primary">jennyklabber</Link>
                                </div>
                            </div>

                        }
                    />


                </div>

                <div className="lg:col-span-2 flex flex-col gap-[30px]">
                    {/* {Created} */}
                    <Card
                        buttonStatus={false}
                        dotStatus={false}
                        dotContentStatus={true}
                        dotContent={
                            <Link
                                to={location}
                                className="text-b-13-14-500 text-primary border-b border-dotted border-b-primary cursor-pointer"
                            >
                                View All
                            </Link>
                        }
                        content={
                            <div className="flex flex-col gap-5 pl-[30px] py-5">
                                <div className="w-full overflow-x-auto " style={{ scrollbarWidth: "thin", scrollBehavior: "smooth" }}>
                                    <div className="flex flex-row  items-center gap-5 ">
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={CreatedOne} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-[14px] flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Artistic Expressions
                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <span className='text-gray-700 text-b-13-14-400'>Token ID:</span>
                                                            <span className='text-gray-800 text-b-13-14-500'>67890</span>

                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between  px-[14px] pb-5">
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700'>Current bid</span>
                                                            <div className="flex flex-row items-center gap-1">
                                                                <img src={XMR} alt="xmr" className='size-[18px]' />
                                                                <span className='text-b-14-14-600 text-gray-900'>3.2 XMR</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700 text-right'>Ending in</span>
                                                            <span className='text-b-14-14-600 text-gray-900'>14h 30m 49s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={CreatedThree} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-[14px] flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Digital Harmony
                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <span className='text-gray-700 text-b-13-14-400'>Token ID:</span>
                                                            <span className='text-gray-800 text-b-13-14-500'>54321</span>

                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between  px-[14px] pb-5">
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700'>Current bid</span>
                                                            <div className="flex flex-row items-center gap-1">
                                                                <img src={XMR} alt="xmr" className='size-[18px]' />
                                                                <span className='text-b-14-14-600 text-gray-900'>4.1 XMR</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700 text-right'>Ending in</span>
                                                            <span className='text-b-14-14-600 text-gray-900'>11h 15m 00s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={CreatedFour} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-[14px] flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Geometric Patterns                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <span className='text-gray-700 text-b-13-14-400'>Token ID:</span>
                                                            <span className='text-gray-800 text-b-13-14-500'>81023</span>

                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between  px-[14px] pb-5">
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700'>Current bid</span>
                                                            <div className="flex flex-row items-center gap-1">
                                                                <img src={XMR} alt="xmr" className='size-[18px]' />
                                                                <span className='text-b-14-14-600 text-gray-900'>3.8 XMR</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700 text-right'>Ending in</span>
                                                            <span className='text-b-14-14-600 text-gray-900'>14h 30m 49s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />
                                         <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={CreatedOne} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-[14px] flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Artistic Expressions
                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <span className='text-gray-700 text-b-13-14-400'>Token ID:</span>
                                                            <span className='text-gray-800 text-b-13-14-500'>67890</span>

                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between  px-[14px] pb-5">
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700'>Current bid</span>
                                                            <div className="flex flex-row items-center gap-1">
                                                                <img src={XMR} alt="xmr" className='size-[18px]' />
                                                                <span className='text-b-14-14-600 text-gray-900'>3.2 XMR</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700 text-right'>Ending in</span>
                                                            <span className='text-b-14-14-600 text-gray-900'>14h 30m 49s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={CreatedThree} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-[14px] flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Digital Harmony
                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <span className='text-gray-700 text-b-13-14-400'>Token ID:</span>
                                                            <span className='text-gray-800 text-b-13-14-500'>54321</span>

                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between  px-[14px] pb-5">
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700'>Current bid</span>
                                                            <div className="flex flex-row items-center gap-1">
                                                                <img src={XMR} alt="xmr" className='size-[18px]' />
                                                                <span className='text-b-14-14-600 text-gray-900'>4.1 XMR</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700 text-right'>Ending in</span>
                                                            <span className='text-b-14-14-600 text-gray-900'>11h 15m 00s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />

                                    </div>
                                </div>
                            </div>
                        }
                        title="Created"

                    />
                    {/* {collected} */}
                    <Card
                        buttonStatus={false}
                        dotStatus={false}
                        dotContentStatus={true}
                        dotContent={
                            <Link
                                to={location}
                                className="text-b-13-14-500 text-primary border-b border-dotted border-b-primary cursor-pointer"
                            >
                                View All
                            </Link>
                        }
                        content={
                            <div className="flex flex-col gap-5 pl-[30px] py-5">
                                <div className="w-full overflow-x-auto " style={{ scrollbarWidth: "thin", scrollBehavior: "smooth" }}>
                                    <div className="flex flex-row  items-center gap-5 ">
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={CreatedOne} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-[14px] flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Artistic Expressions
                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <span className='text-gray-700 text-b-13-14-400'>Token ID:</span>
                                                            <span className='text-gray-800 text-b-13-14-500'>67890</span>

                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between  px-[14px] pb-5">
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700'>Current bid</span>
                                                            <div className="flex flex-row items-center gap-1">
                                                                <img src={XMR} alt="xmr" className='size-[18px]' />
                                                                <span className='text-b-14-14-600 text-gray-900'>3.2 XMR</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700 text-right'>Ending in</span>
                                                            <span className='text-b-14-14-600 text-gray-900'>14h 30m 49s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={CreatedThree} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-[14px] flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Digital Harmony
                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <span className='text-gray-700 text-b-13-14-400'>Token ID:</span>
                                                            <span className='text-gray-800 text-b-13-14-500'>54321</span>

                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between  px-[14px] pb-5">
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700'>Current bid</span>
                                                            <div className="flex flex-row items-center gap-1">
                                                                <img src={XMR} alt="xmr" className='size-[18px]' />
                                                                <span className='text-b-14-14-600 text-gray-900'>4.1 XMR</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700 text-right'>Ending in</span>
                                                            <span className='text-b-14-14-600 text-gray-900'>11h 15m 00s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={CreatedFour} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-[14px] flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Geometric Patterns                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <span className='text-gray-700 text-b-13-14-400'>Token ID:</span>
                                                            <span className='text-gray-800 text-b-13-14-500'>81023</span>

                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between  px-[14px] pb-5">
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700'>Current bid</span>
                                                            <div className="flex flex-row items-center gap-1">
                                                                <img src={XMR} alt="xmr" className='size-[18px]' />
                                                                <span className='text-b-14-14-600 text-gray-900'>3.8 XMR</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700 text-right'>Ending in</span>
                                                            <span className='text-b-14-14-600 text-gray-900'>14h 30m 49s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />
                                         <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={CreatedOne} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-[14px] flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Artistic Expressions
                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <span className='text-gray-700 text-b-13-14-400'>Token ID:</span>
                                                            <span className='text-gray-800 text-b-13-14-500'>67890</span>

                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between  px-[14px] pb-5">
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700'>Current bid</span>
                                                            <div className="flex flex-row items-center gap-1">
                                                                <img src={XMR} alt="xmr" className='size-[18px]' />
                                                                <span className='text-b-14-14-600 text-gray-900'>3.2 XMR</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700 text-right'>Ending in</span>
                                                            <span className='text-b-14-14-600 text-gray-900'>14h 30m 49s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={CreatedThree} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-[14px] flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Digital Harmony
                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <span className='text-gray-700 text-b-13-14-400'>Token ID:</span>
                                                            <span className='text-gray-800 text-b-13-14-500'>54321</span>

                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between  px-[14px] pb-5">
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700'>Current bid</span>
                                                            <div className="flex flex-row items-center gap-1">
                                                                <img src={XMR} alt="xmr" className='size-[18px]' />
                                                                <span className='text-b-14-14-600 text-gray-900'>4.1 XMR</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700 text-right'>Ending in</span>
                                                            <span className='text-b-14-14-600 text-gray-900'>11h 15m 00s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />

                                    </div>
                                </div>
                            </div>
                        }
                        title="Collected"

                    />
                    <Card
                        buttonStatus={false}
                        dotStatus={false}
                        dotContentStatus={true}
                        dotContent={
                            <Link
                                to={location}
                                className="text-b-13-14-500 text-primary border-b border-dotted border-b-primary cursor-pointer"
                            >
                                View All
                            </Link>
                        }
                        content={
                            <div className="flex flex-col gap-5 pl-[30px] py-5">
                                <div className="w-full overflow-x-auto " style={{ scrollbarWidth: "thin", scrollBehavior: "smooth" }}>
                                    <div className="flex flex-row  items-center gap-5 ">
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={CreatedSix} alt="lasda" className="rounded-t-xl w-full " />
                                                    <div className="px-[14px] flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Artistic Expressions
                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <span className='text-gray-700 text-b-13-14-400'>Token ID:</span>
                                                            <span className='text-gray-800 text-b-13-14-500'>67890</span>

                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between  px-[14px] pb-5">
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700'>Current bid</span>
                                                            <div className="flex flex-row items-center gap-1">
                                                                <img src={XMR} alt="xmr" className='size-[18px]' />
                                                                <span className='text-b-14-14-600 text-gray-900'>3.2 XMR</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700 text-right'>Ending in</span>
                                                            <span className='text-b-14-14-600 text-gray-900'>14h 30m 49s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={CreatedSeven} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-[14px] flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Digital Harmony
                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <span className='text-gray-700 text-b-13-14-400'>Token ID:</span>
                                                            <span className='text-gray-800 text-b-13-14-500'>54321</span>

                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between  px-[14px] pb-5">
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700'>Current bid</span>
                                                            <div className="flex flex-row items-center gap-1">
                                                                <img src={XMR} alt="xmr" className='size-[18px]' />
                                                                <span className='text-b-14-14-600 text-gray-900'>4.1 XMR</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700 text-right'>Ending in</span>
                                                            <span className='text-b-14-14-600 text-gray-900'>11h 15m 00s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={CreatedFour} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-[14px] flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Geometric Patterns                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <span className='text-gray-700 text-b-13-14-400'>Token ID:</span>
                                                            <span className='text-gray-800 text-b-13-14-500'>81023</span>

                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between  px-[14px] pb-5">
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700'>Current bid</span>
                                                            <div className="flex flex-row items-center gap-1">
                                                                <img src={XMR} alt="xmr" className='size-[18px]' />
                                                                <span className='text-b-14-14-600 text-gray-900'>3.8 XMR</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700 text-right'>Ending in</span>
                                                            <span className='text-b-14-14-600 text-gray-900'>14h 30m 49s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />
                                         <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={CreatedOne} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-[14px] flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Artistic Expressions
                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <span className='text-gray-700 text-b-13-14-400'>Token ID:</span>
                                                            <span className='text-gray-800 text-b-13-14-500'>67890</span>

                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between  px-[14px] pb-5">
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700'>Current bid</span>
                                                            <div className="flex flex-row items-center gap-1">
                                                                <img src={XMR} alt="xmr" className='size-[18px]' />
                                                                <span className='text-b-14-14-600 text-gray-900'>3.2 XMR</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700 text-right'>Ending in</span>
                                                            <span className='text-b-14-14-600 text-gray-900'>14h 30m 49s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />
                                        <Card
                                            dotStatus={false}
                                            buttonStatus={false}
                                            content={
                                                <div className="flex flex-col gap-5 w-max">
                                                    <img src={CreatedThree} alt="lasda" className="rounded-t-xl " />
                                                    <div className="px-[14px] flex flex-col gap-2.5 ">
                                                        <Link to={location} className="text-b-15-16-500 text-gray-900 hover:text-primary text-animation">
                                                            Digital Harmony
                                                        </Link>
                                                        <div className="flex flex-row items-center gap-1">
                                                            <span className='text-gray-700 text-b-13-14-400'>Token ID:</span>
                                                            <span className='text-gray-800 text-b-13-14-500'>54321</span>

                                                        </div>
                                                    </div>
                                                    <div className="flex flex-row items-center justify-between  px-[14px] pb-5">
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700'>Current bid</span>
                                                            <div className="flex flex-row items-center gap-1">
                                                                <img src={XMR} alt="xmr" className='size-[18px]' />
                                                                <span className='text-b-14-14-600 text-gray-900'>4.1 XMR</span>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-2 ">
                                                            <span className='text-b-13-14-400 text-gray-700 text-right'>Ending in</span>
                                                            <span className='text-b-14-14-600 text-gray-900'>11h 15m 00s</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            }
                                        />

                                    </div>
                                </div>
                            </div>
                        }
                        title="3d Art"
                    />
                </div>
            </div>
        </div>
    );
}
export default NFT