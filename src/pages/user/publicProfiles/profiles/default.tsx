

import { GiAbstract080 } from 'react-icons/gi';
import Jennifer from '../../../../assets/icon/jennifer.svg'
import Verify from '../../../../assets/icon/verify.svg'
import { SlLocationPin } from 'react-icons/sl';
import { CiMail } from 'react-icons/ci';
import UnlockCreative from '../../../../assets/icon/unlockCreative.svg'
import Chart from '../../../../components/charts/earningChart'
import Jira from '../../../../assets/icon/jira-work.svg'
import Pesto from '../../../../assets/icon/paccion.svg'
import Perrier from '../../../../assets/icon/perrier.svg'
import DonutChart from '../../../../components/charts/donutChart';
import Contributors from '../../../../components/publicProfile/contributors';
import PDF from '../../../../assets/icon/pdf.svg'
import DOC from '../../../../assets/icon/doc.svg'
import JS from '../../../../assets/icon/javascript.svg'
import AI from '../../../../assets/icon/illustrator.svg'
import Card from '../../../../components/card/card';
import Menu from '../../../../components/publicProfile/hovermenu';
import { Link } from 'react-router';
import { HiOutlineDotsVertical } from 'react-icons/hi';
import ProjectTable from '../../../../components/publicProfile/projectTable';
import Badges from '../../../../components/publicProfile/badges';
import UnlockCreativeDark from '../../../../assets/icon/unlock-creative-dark.svg'


const Default = () => {


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
                    <Badges title='Community Badges' />
                    {/* {About} */}
                    <Card
                        dotStatus={false}
                        buttonStatus={false}
                        title={"About"}
                        content={<>
                            <div className="flex-col flex gap-5 pt-[30px]">
                                <div className="flex flex-row gap-4 pl-[30px] pb-[30px] pr-[50px]">
                                    <div className="flex flex-col  gap-5">
                                        <span className='text-gray-600 text-b-14-14-400'>Age:</span>
                                        <span className='text-gray-600 text-b-14-14-400'>City:</span>
                                        <span className='text-gray-600 text-b-14-14-400'>State:</span>
                                        <span className='text-gray-600 text-b-14-14-400'>Country:</span>
                                        <span className='text-gray-600 text-b-14-14-400'>Postcode:</span>
                                        <span className='text-gray-600 text-b-14-14-400'>Phone:</span>
                                        <span className='text-gray-600 text-b-14-14-400'>Email:</span>
                                    </div>
                                    <div className="flex flex-col  gap-5">
                                        <span className='text-b-14-14-400 text-gray-900'>32</span>
                                        <span className='text-b-14-14-400 text-gray-900'>Amsterdam</span>
                                        <span className='text-b-14-14-400 text-gray-900'>North Holland</span>
                                        <span className='text-b-14-14-400 text-gray-900'>Netherlands</span>
                                        <span className='text-b-14-14-400 text-gray-900'>1092 NL</span>
                                        <span className='text-b-14-14-400 text-gray-900'>+31 6 1234 56 78</span>
                                        <Link to={location} className='text-b-14-14-400 text-gray-900 hover:text-primary text-animation'>jenny@ktstudio.com</Link>
                                    </div>
                                </div>

                            </div>
                        </>}
                    />
                    {/* {Work experience} */}
                    <Card
                        title={"Work Experience"}
                        dotStatus={false}
                        buttonStatus={true}
                        buttonTitle='Open to Work'
                        content={
                            <>
                                <div className="flex-col flex gap-5">
                                    <div className="flex flex-col gap-5 p-[30px]">
                                        <div className="flex flex-row items-start gap-[14px]">
                                            <img src={Jira} alt="" />
                                            <div className="flex flex-col gap-[7px]">
                                                <Link to={location} className='text-b-14-14-500 text-primary'>Esprito Studios</Link>
                                                <span className='text-b-14-14-500 text-gray-900'>Senior Project Manager</span>
                                                <span className='text-b-12-12-400 text-gray-700'>2019 - Present</span>
                                            </div>
                                        </div>
                                        <span className='text-b-14-14-500 text-gray-600'>Previous Jobs</span>
                                        <div className="flex flex-row items-start gap-[14px]">
                                            <img src={Pesto} alt="" />
                                            <div className="flex flex-col gap-[7px]">
                                                <Link to={location} className='text-b-14-14-500 text-primary'>Previous Jobs</Link>
                                                <span className='text-b-14-14-500 text-gray-900'>CRM Product Lead </span>
                                                <span className='text-b-12-12-400 text-gray-700'>2012 - 2019</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-start gap-[14px]">
                                            <img src={Perrier} alt="" />
                                            <div className="flex flex-col gap-[7px]">
                                                <Link to={location} className='text-b-14-14-500 text-primary'>Perrier Technologies</Link>
                                                <span className='text-b-14-14-500 text-gray-900'>UX Research</span>
                                                <span className='text-b-12-12-400 text-gray-700'>2010 - 2012</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        }
                    />
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
                    {/* {Unlock Creative area} */}
                    <Card
                        dotStatus={false}
                        buttonStatus={true}
                        buttonTitle="Get Started"
                        content={
                            <div className="flex md:flex-row flex-col items-center justify-between gap-10 px-10 py-[50px]">
                                <div className="flex flex-col gap-3">
                                    <span className='text-gray-900 text-h-22-22-600 max-w-[250px]'>Unlock Creative
                                        Partnerships on Our Blog</span>
                                    <p className='max-w-[437px] text-b-14-22-400 text-gray-700'>
                                        Explore exciting collaboration opportunities with our blog. We're open to partnerships, guest posts, and more. Join us to share your insights and grow your audience.
                                    </p>
                                </div>
                                <img src={UnlockCreative} alt="unlock-creative-light" className='dark:hidden' />
                                <img src={UnlockCreativeDark} alt="unlock-creative-dark" className='dark:flex hidden' />
                            </div>
                        }
                    />
                    {/* {Media Uploads} */}
                    <Card
                        title='Media Uploads'
                        buttonStatus={false}
                        dotStatus={true}
                        content={<Chart />}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
                        {/* {Contributors} */}

                        <Card
                            dotStatus={true}
                            buttonStatus={true}
                            title='Contributors'
                            buttonTitle='All Contributors'
                            content={<Contributors />}
                        />
                        {/* {Assistance} */}
                        <Card
                            title='Assistance'
                            buttonStatus={false}
                            dotStatus={true}
                            content={<DonutChart />}
                        />
                    </div>
                    {/* {Projects} */}
                    <ProjectTable />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">

                        <Card
                            dotStatus={true}
                            buttonStatus={true}
                            title='Contributors'
                            buttonTitle='All Contributors'
                            content={<Contributors />}
                        />

                        {/* {Recent uploads} */}
                        <Card
                            dotStatus={true}
                            buttonStatus={true}
                            buttonTitle='All Files'
                            title='Recent Uploads'
                            content={
                                <>
                                    <div className="flex flex-col py-5 gap-5">
                                        <div className="flex flex-row items-center justify-between px-[30px]">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={PDF} alt="" />
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>Project-pitch.pdf</Link>
                                                    <div className="flex flex-row items-center gap-1 flex-wrap">
                                                        <span className='text-b-12-12-400 text-gray-700'>4.7 MB</span>
                                                        <span className='text-b-12-12-400 text-gray-700'> 26 Sep 2024 3:20 PM</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                <HiOutlineDotsVertical className="text-gray-600" />
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between px-[30px]">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={DOC} alt="" />
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>Report-v1.docx</Link>
                                                    <div className="flex flex-row items-center gap-1 flex-wrap">
                                                        <span className='text-b-12-12-400 text-gray-700'>2.3 MB</span>
                                                        <span className='text-b-12-12-400 text-gray-700'> 26 Sep 2024 3:20 PM</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                <HiOutlineDotsVertical className="text-gray-600" />
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between px-[30px]">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={JS} alt="" />
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>Framework-App.js</Link>
                                                    <div className="flex flex-row items-center gap-1 flex-wrap">
                                                        <span className='text-b-12-12-400 text-gray-700'>0.8 MB</span>
                                                        <span className='text-b-12-12-400 text-gray-700'> 17 Oct 2024 6:46 PM</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                <HiOutlineDotsVertical className="text-gray-600" />
                                            </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-between px-[30px]">
                                            <div className="flex flex-row items-center gap-2.5">
                                                <img src={AI} alt="" />
                                                <div className="flex flex-col gap-2">
                                                    <Link to={location} className='text-b-14-14-500 text-gray-900 hover:text-primary text-animation'>Mobile-logo.ai</Link>
                                                    <div className="flex flex-row items-center gap-1 flex-wrap">
                                                        <span className='text-b-12-12-400 text-gray-700'>0.2 MB</span>
                                                        <span className='text-b-12-12-400 text-gray-700'> 4 Nov 2024 11:30 AM</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-2 rounded-md cursor-pointer w-max hover:bg-gray-200">
                                                <HiOutlineDotsVertical className="text-gray-600" />
                                            </div>
                                        </div>
                                    </div>

                                </>
                            }
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Default;